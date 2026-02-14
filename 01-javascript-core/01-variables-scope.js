function testVar() {
  if (true) {
    var a = 1;
    console.log("if 内部:", a);
  }
  console.log("外部", a);
}
testVar();
function testVar2() {
  console.log(b);
  if (true) {
    console.log(b);
    var b = 2;
    console.log(b);
  }
}
testVar2();
function testlet() {
  if (true) {
    let c = 5;
    console.log(c);
  }
  console.log(c);
}
testlet();
function testConst() {
  if (true) {
    const user = {
      name: "小明",
      age: 12,
    };
    console.log(user);
    user.name = "小红";
    console.log(user);
    user.name = "小红红";
    console.log(user);
  }
}
testConst();
