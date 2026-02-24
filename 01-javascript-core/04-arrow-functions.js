// ========= 任务 6: 箭头函数实践 =========

// --- Part 1: 语法转换 ---
// TODO: 将下面的传统函数转换成等价的、最简洁的箭头函数。

// 1.
const greet = function (name) {
  return "Hello, " + name + "!";
};

// 你的代码:
const greetArrow = (name) => `Hello, ${name}!`;

// 2.
const sum = function (a, b) {
  return a + b;
};

// 你的代码:
const sumArrow = (a, b) => a + b; // TODO

// 3.
const getApples = function () {
  return { name: "apple", color: "red" };
};
// 提示: 如果箭头函数直接返回一个对象字面量，需要用 () 包起来
// 你的代码:
const getApplesArrow = () => ({ name: "apple", color: "red" }); // TODO

// --- Part 2: `this` 的应用 ---
// 目标: 修复下面代码中的 `this` 指向问题。

const counter = {
  count: 0,
  start: function () {
    // 在 Node.js 环境中, setInterval 的回调函数 this 默认是 Timeout 对象
    // 在浏览器中, 默认是 window 对象
    setInterval(function () {
      // 问题：这里的 `this` 并不指向 `counter` 对象
      this.count++;
      console.log("错误的 this:", this.count); // 在 Node.js 中会输出 NaN (undefined + 1)
    }, 1000);
  },
};
counter.start();
const fixedCounter = {
  count: 0,
  start: function () {
    // TODO: 使用箭头函数修复 `this` 的指向问题，让计数器正常工作。
    // 你需要修改下面的 setInterval 回调函数
    setInterval(() => {
      this.count++;
      console.log("正确的 this:", this.count);
    }, 1000);
  },
};
fixedCounter.start();
// 由于 setInterval 会一直运行，为了方便测试，你可以注释掉不想运行的部分。
// counter.start(); // 运行这个会看到问题
// fixedCounter.start(); // 运行这个，期望看到 count 正常增加
// (在终端中按 Ctrl+C 停止运行)
