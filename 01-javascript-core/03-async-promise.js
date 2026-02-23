// ========= 任务 5: 异步编程实践 =========

/**
 * 任务：创建一个函数 `fetchData`，它模拟从服务器获取数据。
 * 1. 这个函数返回一个 Promise。
 * 2. 在 1.5 秒后，该 Promise 应该变为 "Fulfilled" 状态。
 * 3. 为了模拟成功或失败，函数应该随机决定：
 *    - 70% 的概率成功，并 resolve 数据: { user: "小明", score: 90 }
 *    - 30% 的概率失败，并 reject 错误信息: "网络请求失败！"
 */
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve({ user: "小明", score: 90 });
      } else {
        const errorMessage = "网络请求失败！";
        reject(errorMessage);
      }
      // TODO: 在这里实现随机成功或失败的逻辑
      // 使用 Math.random() < 0.7 来模拟 70% 的概率
    }, 1500);
  });
}

// ========= Part 1: 使用 .then() 和 .catch() 来消费 Promise =========
console.log("Part 1: 开始使用 .then/.catch 获取数据...");
fetchData()
  .then((users) => {
    console.log(users);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
// TODO: 调用 fetchData() 函数，并：
// 1. 如果成功，打印 "获取成功: [数据]"
// 2. 如果失败，打印 "获取失败: [错误信息]"

// ========= Part 2: 使用 async/await 来消费 Promise =========
console.log("\nPart 2: 开始使用 async/await 获取数据...");

async function runAsyncWorkflow() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("错误原因：", error);
  }
  // TODO: 在 async 函数内部调用 fetchData() 函数，并：
  // 1. 使用 try...catch 结构
  // 2. 如果成功，await Promise 的结果，并打印 "获取成功: [数据]"
  // 3. 如果失败，在 catch 块中打印 "获取失败: [错误信息]"
}

runAsyncWorkflow();
