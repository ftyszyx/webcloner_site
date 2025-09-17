// i18next-parser.config.js
module.exports = {
    locales: ['en-US', 'zh-CN'],
    output: 'src/i18n/dictionaries/$LOCALE.json',
    input: ['src/**/*.{js,jsx,ts,tsx}'],
    // keySeparator: false, // 如果你的 key 里面不包含 .，可以打开
    namespaceSeparator: '.', // 明确使用 .作为命名空间分隔符
    useKeysAsDefaultValue: false,
    defaultValue: '', // 对于新 key 使用空字符串

    lexers: {
        js: [{
            lexer: 'JavascriptLexer',
            functions: ['t', 'useTranslations'], // 识别这两个函数
        }],
        ts: [{
            lexer: 'TypescriptLexer',
            functions: ['t', 'useTranslations'],
        }],
        jsx: [{
            lexer: 'JsxLexer',
            functions: ['t', 'useTranslations'],
        }],
        tsx: [{
            lexer: 'TsxLexer',
            functions: ['t', 'useTranslations'],
        }],
        default: ['JavascriptLexer'],
    },
};