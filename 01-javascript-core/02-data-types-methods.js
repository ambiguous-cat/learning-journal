// ========= 任务 1: 字符串处理 =========
// 目标: 清理和格式化一个文件名
const rawFileName = "  /images/PROFILE.JPEG  ";
// TODO: 1. 去除两端的空格
// TODO: 2. 转换为全部小写
// TODO: 3. 截取出 "profile.jpeg" 这部分
// TODO: 4. 将 ".jpeg" 替换为 ".png"
// 最终期望输出: "profile.png"
let cleanedFileName;
cleanedFileName = rawFileName.trim();
cleanedFileName = cleanedFileName.toLowerCase();
const index = cleanedFileName.lastIndexOf("/");
cleanedFileName = cleanedFileName.slice(index + 1);
cleanedFileName = cleanedFileName.replace("jpeg", "png");
console.log("任务1:", cleanedFileName);

// ========= 任务 2: 数组操作 =========
// 目标: 管理一个待办事项列表
let todos = ["学习 JavaScript", "写代码", "睡觉"];
// TODO: 1. 在列表末尾添加一个新待办 "看书" (使用 push)
// TODO: 2. 在列表开头添加一个新待办 "吃饭" (使用 unshift)
// TODO: 3. 假设 "写代码" 这个任务已经完成，使用 splice 将它从数组中删除
// TODO: 4. 使用 slice 创建一个只包含 "吃饭" 和 "学习 JavaScript" 的新数组，并打印出来
// 注意观察每一步操作后 todos 数组的变化
todos.push("看书");
todos.unshift("吃饭");
const toMove = "写代码";
const toMoveIndex = todos.indexOf(toMove);
if (toMoveIndex !== -1) {
  todos.splice(toMoveIndex, 1);
}
todos = todos.splice(0, 2);
console.log("任务2 - 最终的 todos:", todos);
// ========= 任务 3: 对象操作 =========
// 目标: 动态地更新和展示用户信息
const userProfile = {
  name: "default_user",
  email: "default@example.com",
};
const newKey = "phone";
const newValue = "1234567890";
// TODO: 1. 使用方括号表示法，给 userProfile 添加一个新的属性。这个属性的键(key)是 newKey 变量的值，值(value)是 newValue 变量的值。
// TODO: 2. 更新 email 属性为 "new_user@gmail.com"。
// TODO: 3. 使用 Object.keys() 和 for 循环，打印出 userProfile 的所有键。
userProfile[newKey] = newValue;
userProfile["email"] = "new_user@gmail.com";
const key = Object.keys(userProfile);
for (const item of key) {
  console.log(userProfile[item]);
}
console.log("任务3 - 更新后的用户信息:", userProfile);
// 在这里写你的循环代码来打印 key
