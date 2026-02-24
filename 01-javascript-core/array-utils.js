// TODO: 使用命名导出，导出一个名为 `findPassingScores` 的函数。
// 它接收一个分数数组和一个及格线，返回所有及格的分数组成的数组。
// 使用 .filter() 来实现。
// 例如: findPassingScores([59, 88, 95], 60) 应该返回 [88, 95]
export function findPassingScores(arr, score) {
  return arr.filter((scores) => {
    return scores >= score;
  });
}
// TODO: 使用命名导出，导出一个名为 `calculateTotal` 的函数。
// 它接收一个数字数组，返回它们的总和。
// 使用 .reduce() 来实现。
export function calculateTotal(arr) {
  return arr.reduce((num, sum) => {
    return sum + num;
  }, 0);
}
