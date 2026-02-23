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

// ========= 任务 4: map, filter, reduce 实践 =========

const products = [
  { id: 1, name: "笔记本电脑", price: 8999, inStock: true },
  { id: 2, name: "无线鼠标", price: 299, inStock: false },
  { id: 3, name: "机械键盘", price: 899, inStock: true },
  { id: 4, name: "4K显示器", price: 2599, inStock: true },
  { id: 5, name: "USB-C扩展坞", price: 499, inStock: false },
];

// TODO: 使用 .map()
// 目标: 创建一个只包含所有产品名称的新数组。
// 期望输出: ["笔记本电脑", "无线鼠标", "机械键盘", "4K显示器", "USB-C扩展坞"]
const productNames = products.map((product) => {
  return product.name;
}); // TODO: 在这里写你的代码
console.log("产品名称列表:", productNames);

// TODO: 使用 .filter()
// 目标: 创建一个只包含所有有货 (inStock: true) 的产品的新数组。
const inStockProducts = products.filter((product) => {
  return product.inStock;
}); // TODO: 在这里写你的代码
console.log("有货的产品:", inStockProducts);

// TODO: 使用 .reduce()
// 目标: 计算所有产品的总价。
const totalValue = products.reduce((sum, product) => {
  return sum + product.price;
}, 0); // TODO: 在这里写你的代码
console.log("所有产品总价值:", totalValue);

// TODO: 链式调用 (Chainning) - 王者挑战！
// 目标: 计算所有 **有货** 的产品的总价。
// 提示: 你可以先用 .filter() 筛选出有货的产品，然后在其结果上立刻调用 .reduce()。
const stockInStock = products.filter((product) => {
  return product.inStock;
}); // TODO: 在这里写你的代码
let totalValueInStock = stockInStock.reduce((sum, product) => {
  return sum + product.price;
}, 0);
console.log("有货产品总价值:", totalValueInStock);
totalValueInStock = stockInStock.reduce((sum, product) => {
  if (product.inStock) {
    return sum + product.price;
  }
}, 0);
console.log("有货产品总价值:", totalValueInStock);
