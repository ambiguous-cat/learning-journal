// TODO: 从 './string-utils.js' 中导入所有导出的模块。
// 给默认导出的函数起一个你喜欢的名字，比如 `cleanName`。
import cleanName, { capitalize } from "./string-utils.js";
// TODO: 从 './array-utils.js' 中导入所有导出的模块。
// 你可以使用 `import * as <别名> from './array-utils.js'` 的语法，
// 将所有命名导出收集到一个对象中。
import {
  findPassingScores as find,
  calculateTotal as sum,
} from "./array-utils.js";
// --- 测试你的代码 ---
console.log("--- 字符串工具测试 ---");
const greeting = "hELLo wORLd";
// 调用 capitalize 函数并打印结果
console.log(capitalize(greeting));
const rawFile = "  report.CSV  ";
// 调用你导入的默认导出函数并打印结果
console.log(cleanName(rawFile));
console.log("\n--- 数组工具测试 ---");
const scores = [45, 92, 68, 75, 59, 81];
const passingLine = 70;
// 调用数组工具模块中的函数，计算及格分数和总分，并打印结果。
console.log(find(scores, passingLine));
console.log(sum(scores));
