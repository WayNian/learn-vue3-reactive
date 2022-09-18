const args = require("minimist")(process.argv.slice(2));
const { resolve } = require("path");

/**
 * node scripts/dev.js reactivity -f global
 * args: { _: [ 'reactivity' ], f: 'global' }
 * _: 默认智 f: 格式
 *
 */
const target = args._[0] || "reactivity";
const format = args.f || "global";

const pkg = require(resolve(__dirname, `../packages/${target}/package.json`));

/**
 * iife 立即执行函数
 * cjs node中的模块
 * esm 浏览器执行模块
 */

const outputFormat = format.startsWith("global")
  ? "iife"
  : format === "cjs"
  ? "cjs"
  : "esm";

console.log(outputFormat);
