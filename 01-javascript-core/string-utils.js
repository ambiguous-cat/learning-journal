// TODO: 使用命名导出，导出一个名为 `capitalize` 的函数。
// 它接收一个字符串，返回首字母大写、其余字母小写的字符串。
// 例如: capitalize("hELLo") 应该返回 "Hello"
export function capitalize(str) {
  const strLoswer = str.slice(1).toLowerCase();
  const strUpper = str.slice(0, 1).toUpperCase();
  return strUpper + strLoswer;
}
// TODO: 使用默认导出，导出一个名为 `formatFileName` 的函数。
// 它接收一个原始文件名（如 "  my-document.PDF  "），返回一个清理后的版本（如 "my-document.pdf"）。
// 提示: 你可以综合运用 trim() 和 toLowerCase()。
export default function formatFileName(str) {
  return str.trim().toLowerCase();
}
