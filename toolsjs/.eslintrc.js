module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module' //默认script
  },
  rules: {
    //缩进
    indent: ['error', 2],
    //换行方式
    'linebreak-style': ['error', 'unix'],
    //引号使用
    quotes: ['warn', 'single'],
    //是否有结束分号
    semi: ['error', 'always'],
    'no-unused-vars': 1, //禁止为使用的变量
    'guard-for-in': 1, //for in循环要用if语句过滤
    'prefer-const': 1, //首选const
    'use-isnan': 2, //禁止比较时使用NaN，只能用isNaN()
    'no-multi-spaces': 2, //禁止使用多个空格 fix
    'no-return-await': 2, //禁止不必要的return await
    'wrap-iife': 0, //要求iife必须括起来
    'no-undefined': 1, //禁止将undefined作为标识符
    'array-bracket-newline': [1, 'consistent'], //在数组开括号后和闭括号前强制换行
    'array-element-newline': [1, 'consistent'], //强制数组元素间出现换行
    'eol-last': [1, 'always'], //要求或禁止文件末尾存在空行
    'func-call-spacing': [1, 'never'], //要求或禁止在函数标识符和其调用之间有空格
    'no-lonely-if': 2, //禁止 if 作为唯一的语句出现在 else 语句中'
    'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }], //要求回调函数使用箭头函数
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false
      }
    ], // 要求没用的变量使用const,并修复一定的情况
    'prefer-template': 1, //建议使用模板字面量而非字符串连接
    'template-curly-spacing': 2, //强制模板字符串中空格的使用,默认不
    'rest-spread-spacing': [2], //强制剩余和扩展运算符及其表达式之间有空格
    'sort-imports': [
      'warn',
      {
        ignoreCase: true, //忽略大小写
        ignoreDeclarationSort: true, //忽略声明的排序
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none']
      }
    ], //import 排序
    'yield-star-spacing': ['error', 'after'], //强制在 yield* 表达式中 * 周围使用空格
    'prefer-rest-params':1,//少用arguments
  }
};
