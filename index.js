const commander = require('commander')
  .option('-c, --config-file <type>')
  .option('-i, --input-csv <type>')
  .option('-o, --output-csv <type>')
commander.parse(process.argv)

console.log(`設定ファイルの読み込み`);

const configFilePath = __dirname + '/config.js';
const config = require(configFilePath)
const parseJson = config.inputSettings.json

const fileStream = require('fs')
const csvParser = require('csv')

// 出力のロジック
const exportCsv = (data) => {
  csvParser.stringify(data, {
    quoted: true
  }, (error, rawOutput) => {
    const outputCsv = commander.outputCsv || 'output.csv'
    const output = iconv.encode(rawOutput, "Shift_JIS")
    fileStream.writeFile(outputCsv, output, (error) => {
      if (error) {
        throw new Error(error)
      }
    })
  })
}

// 設定ファイルの読み込みロジックを適用する
const convertRow = (row) => {
  const parses = { ...config.inputSettings.parses
  }
  Object.keys(parses).forEach((key) => {
    const fromValue = row[key]
    row[key] = parses[key](fromValue)
  })

  const newRow = []

  // 列の生成
  config.outputSettings.outputs.columns.forEach(column => {
    let value = null

    if ('from' in column) {
      value = row[column.from]
      if (value != undefined) {
        // console.log("from' in column");
        // console.log(value);
      }
    }

    if ('convert' in column) {
      value = column.convert(value)
      if (value != undefined) {
        // console.log("convert' in column");
        // console.log(value);
      }
    }

    if (!value && 'default' in column) {
      value = column.default
      if (value != undefined && value != "") {
        // console.log("!value && 'default' in column");
        // console.log(value);
      }
    }

    newRow.push(value)
  })

  return newRow
}

// 入出力のロジック
const convertCsv = (error, data) => {
  const newData = data.map(convertRow)

  const header = config.outputSettings.outputs.columns.map(column => column.name)
  newData.unshift(header)
  exportCsv(newData)
}

const iconv = require("iconv-lite")

fileStream
  .createReadStream('input.csv')
  .pipe(iconv.decodeStream('Shift_JIS'))
  .pipe(csvParser.parse({
    columns: parseJson
  }, convertCsv))
