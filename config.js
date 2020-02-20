// const validateConfig = (config) => {
//   // TODO: 必須項目を作成する
//   return null
// }

// const getConfig = (filePath) => {
//   const config = require(`path`)
//   // validateConfig(config)
//   return config
// }

module.exports = {

  inputSettings: {
    json: true,

    // 列名をキーにした連想配列になる
    parses: {
      // columnValueには、対応する列の値が入る
      '固定資産コード': (columnValue) => {
        return columnValue
      },
      '名称': (columnValue) => {
        return columnValue
      },
      '資産種類コード': (columnValue) => {
        return columnValue
      },
      '数量': (columnValue) => {
        return columnValue
      },
      '取得価額': (columnValue) => {
        return columnValue
      },
      '圧縮損計上': (columnValue) => {
        return columnValue
      },
      '圧縮損計上': (columnValue) => {
        return columnValue
      },
      '期首帳簿価額': (columnValue) => {
        return columnValue
      },
      '償却累計額': (columnValue) => {
        return columnValue
      },
      '償却方法コード名': (columnValue) => {
        return columnValue
      },
      '耐用年数': (columnValue) => {
        return columnValue
      },
      '償却率': (columnValue) => {
        return columnValue
      },
      '償却限度額合計': (columnValue) => {
        return columnValue
      },
      '普通償却限度額': (columnValue) => {
        return columnValue
      },
      '処分区分': (columnValue) => {
        return columnValue
      },
      '処分年月日': (columnValue) => {
        return columnValue
      },
      '取得年月日': (columnValue) => {
        return columnValue
      },
      '取得年月日': (columnValue) => {
        return columnValue
      },
      '使用開始日': (columnValue) => {
        return columnValue
      },
      '償却資産申告用資産種類': (columnValue) => {
        return columnValue
      },
      '減価償却実施額': (columnValue) => {
        return columnValue
      },
      '前期繰越超過額': (columnValue) => {
        return columnValue
      },
      '前期繰越不足額': (columnValue) => {
        return columnValue
      },
      '期首帳簿価額': (columnValue) => {
        return columnValue
      },
      '償却累計額': (columnValue) => {
        return columnValue
      },
      '改定取得価額': (columnValue) => {
        return columnValue
      },
      '調整前償却額': (columnValue) => {
        return columnValue
      }
    }
  },

  // 変換後のCSVの出力方法を設定する
  outputSettings: {
    outputs: {
      // 出力CSVのカラムを配列で設定する
      columns: [{
          name: '資産番号',
          default: '',
          from: '固定資産コード',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '修正区分',
          default: '0',
          from: '資産種類コード',
          convert: (fromValue) => {
            var value = 0
            if (fromValue == 18 || fromValue == 42) {
              value = 4
            }
            return value
          }
        },
        {
          name: '資産名称',
          default: '',
          from: '名称',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '資産名略称',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '型式',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '索引',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '資産区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '種類コード',
          default: '000000',
          from: '資産種類コード',
          convert: (fromValue) => {
            var value = 000000
            if (fromValue == 1) {
              value = 000500
            } else if (fromValue == 4) {
              value = 000100
            } else if (fromValue == 12) {
              value = 000003
            } else if (fromValue == 18) {
              value = 000005
            } else if (fromValue == 33 || fromValue == 36 || fromValue == 39) {
              value = 000101
            } else if (fromValue == 42) {
              value = 000110
            }
            return value
          }
        },
        {
          name: '構造コード',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '細目コード',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '部門コード',
          default: '000000',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '普通償却費仕訳パターン',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '特別償却費仕訳パターン',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '設置場所コード',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '管理者コード',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '購入先コード',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '財団コード',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '売却先コード',
          default: '00000000000',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '原価コード',
          default: '0',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '購入年度コード',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '減損グループコード',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '数量',
          default: '',
          from: '数量',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '取得価額',
          default: '',
          from: '取得価額',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '18年少額特例区分',
          default: '0',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '圧縮区分',
          default: '0',
          from: '圧縮損計上',
          convert: (fromValue) => {
            var value = 0
            if (fromValue != "") {
              value = 1
            }
            return value
          }
        },
        {
          name: '圧縮額',
          default: '',
          from: '圧縮損計上',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '修正後取得価額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期資本的支出累計',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '期首帳簿価額',
          default: '',
          from: '期首帳簿価額',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '期首償却累計額',
          default: '',
          from: '償却累計額',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '内特別償却累計額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期償却方法',
          default: '',
          from: '償却方法コード名',
          convert: (fromValue) => {
            var value = undefined
            if (fromValue == 4) {
                value = 2
            } else if (fromValue == 7) {
                value = 5
            } else if (fromValue == 10) {
                value = 6
            } else if (fromValue == "") {
                value = 4
            }
            return value
          }
        },
        {
          name: '当期耐用年数',
          default: '',
          from: '耐用年数',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期償却率',
          default: '',
          from: '償却率',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期みなし取得区分',
          default: '0',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期みなし取得価額',
          default: '0',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期償却限度額',
          default: '',
          from: '償却限度額合計',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期手入力区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期普通償却額',
          default: '',
          from: '普通償却限度額',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期特別償却有無区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期特別償却率区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期特別償却率',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期特別償却分子',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期特別償却分母',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期特別償却額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期増加償却有無区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期増加償却額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期償却方法',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期耐用年数',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期償却率',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期みなし取得区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期みなし取得価額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期償却限度額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期手入力区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期普通償却額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期特別償却有無区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期特別償却率区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期特別償却率',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期特別償却分子',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期特別償却分母',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期特別償却額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期増加償却有無区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期増加償却額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '除売却区分',
          default: '',
          from: '処分区分',
          convert: (fromValue) => {
            var value = ""
            if (fromValue == "除却") {
              value = 1
            }
            return value
          }
        },
        {
          name: '除売却年月日',
          default: '',
          from: '処分年月日',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '売却額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期首繰越額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期認容額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期末繰越額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期認容額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期末繰越額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '購入日',
          default: '',
          from: '取得年月日',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '取得日',
          default: '',
          from: '取得年月日',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '償却開始日',
          default: '',
          from: '使用開始日',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '初年度償却',
          default: '',
          from: '資産種類コード',
          convert: (fromValue) => {
            var value = 0
            if (fromValue == 18 || fromValue == 42) {
              value = 2
            }
            return value
          }
        },
        {
          name: '残存率',
          default: '1',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '残存価額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '償却可能率',
          default: '',
          from: '',
          convert: (fromValue) => {
            var value = 0
            if (fromValue == 18 || fromValue == 42) {
              value = 1
            }
            return value
          }
        },
        {
          name: '償却可能額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌々期償却費',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌３期償却費',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌４期償却費',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌５期償却費',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '償却済区分',
          default: '0',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '償却済年',
          default: '0',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '備考コード１',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '備考１',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '備考コード２',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '備考２',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '備考コード３',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '備考３',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '備考コード４',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '備考４',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '備考コード５',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '備考５',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '償却資産申告種別',
          default: '',
          from: '償却資産申告用資産種類',
          convert: (fromValue) => {
            var value = 0
            if (fromValue == "工具、器具及び備品") {
              value = 6
            } else if (fromValue == "構築物") {
              value = 1
            } else if (fromValue == "種類未定") {
              value = 0
            }
            return value
          }
        },
        {
          name: '申告先コード',
          default: '0001',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '前年度申告時帳簿価額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '前年度申告時評価額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '取得資産の扱い',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '償却資産申告耐用年数の指定',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '償却資産申告耐用年数',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '申告資産区分',
          default: '0',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '特例課税率分母',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '特例課税率分子',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '適用終了年度',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期償却実施額',
          default: '',
          from: '減価償却実施額',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期償却実施額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '前期繰越超過額',
          default: '',
          from: '前期繰越超過額（DJ列）',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '前期繰越不足額',
          default: '',
          from: '前期繰越不足額（DK列）',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '会計期首帳簿価額',
          default: '',
          from: '期首帳簿価額（DI列）',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '会計期首償却累計額',
          default: '',
          from: '償却累計額（ED列）',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期切捨てる償却不足額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期切捨てる償却不足額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期条項①',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期条項②',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期条項①',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期条項②',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '前期以前発生区分',
          default: '0',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '減損損失累計額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '減損後帳簿価額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '残存手入力区分',
          default: '0',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '減損後残存価額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '減損後耐用年数',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '償却率修正区分',
          default: '0',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '償却率',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '計算の基礎となる金額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期月額償却費手入力区分',
          default: '0',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期第１月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期第２月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期第３月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期第４月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期第５月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期第６月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期第７月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期第８月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期第９月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期第１０月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期第１１月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期第１２月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期月額償却費手入力区分',
          default: '0',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期第１月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期第２月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期第３月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期第４月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期第５月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期第６月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期第７月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期第８月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期第９月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期第１０月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期第１１月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期第１２月',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '備忘価額区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '残存償却区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '改定取得価額',
          default: '',
          from: '改定取得価額',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '改定年月日',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '会計期首改定取得価額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '会計期首改定年月日',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '減損後改定取得価額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '減損後改定年月日',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '残存償却開始年月日',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期調整前償却額',
          default: '',
          from: '調整前償却額',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期償却月数',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期償却超過取崩額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期税法限度額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期減損前償却状態区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期調整前償却額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期償却月数',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期償却超過取崩額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期税法限度額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期減損前償却状態区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期期首帳簿価額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期期首償却累計額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期償却超過額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期会計期首帳簿価額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期会計期首償却累計額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '当期改定償却限度額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期改定償却限度額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '税法上取引',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: 'リース期間月数',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '契約満了日',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '残価保証額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '減損後残存月数',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '前年申告時耐用年数',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '申告耐用年数クリア区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '申告時摘要上段',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '申告時摘要下段',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '資産除去債務区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '対応資産番号',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '除去費用見積額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '除去費用割引率',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '除去費用償却年数',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '利息費用仕訳パターン',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '短縮特例適用区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '短縮特例適用年月日',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '短縮特例適用時帳簿価額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '定率法均等償却適用区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '会計短縮特例適用時帳簿価額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '会計定率法均等償却適用区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期残存率',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期残存価額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期償却可能率',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期償却可能額',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期備忘価額区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '翌期残存償却区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '償却基準区分',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: 'リース会社コード',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        },
        {
          name: '契約番号',
          default: '',
          from: '',
          convert: (fromValue) => {
            return fromValue
          }
        }
      ]
    }
  }
}
