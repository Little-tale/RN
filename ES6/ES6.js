// JavaScript(JS)
// → 브라우저나 Node.js에서 그대로 실행되는 언어

// TypeScript(TS)
// → “타입 붙은 JavaScript”
// → 사람이 쓰고 나면 JS로 변환(transpile) 해서 실행

/* JS 일때
function add(a, b) {
  return a + b;
}

add(1, 2);      // 3
add("1", "2");  // "12" (문자열 이어붙이기, 런타임에야 알게 됨)
*/

/* TS 일때
function add(a: number, b: number): number {
  return a + b;
}

add(1, 2);      // OK
add("1", "2");  // ❌ 컴파일 단계에서 에러
*/

// 무조건 기본은 const
// 진짜 값이 바뀌어야 하는 경우에만 let
// var는 쓰지 말자 (옛날)

export {};

var hello = "world";

function test() {
  var hello = "korea";
  console.log(hello);
}

if (true) {
  var hello = "America";
  console.log(hello, "hello from if block");
}

test();

console.log(hello);

// String Literal

const val01 = "Hello!";
const val02 = "world!";
const val03 = val01 + " " + val02;
const val04 = `${val01} ${val02}`;

console.log(val03);
console.log(val04);

// repeat
let array = [10, 20, 30, 40, 50];

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (let val of array) {
  console.log(val);
}

for (let val in obj) {
  console.log(val, obj[val]);
}

//Rest Operator

function printNums(num1, ...rest) {
  console.log(num1, rest);
}

printNums(1, 2, 3, 4, 5);
// 1 [ 2, 3, 4, 5 ]

// Spread Operator
function sum(...nums) {
  return nums.reduce((pre, curr) => pre + curr, 0);
}

let numArray = [1, 2, 3];
console.log(sum.apply(numArray));
console.log(sum(...numArray));

let drinks = {
  cafe: "latte",
  coca: "cola",
};

let newDrinks = {
  lemon: "lemonade",
  orange: "juice",
  ...drinks,
};

console.log(newDrinks);

// Arrow Function

let arrowArray = [1, 2, 3, 4, 5];

let twice = arrowArray.map((num) => num * 2);
console.log(twice);

let arrow2 = arrowArray.map((num) => {
  return num % 2 == 0 ? "짝" : "홀";
});

console.log(arrow2);

// Class

class Person {
  constructor(region_, gender_) {
    this.region = region_;
    this.gender = gender_;
  }

  greeting(val = "안녕하시오") {
    console.log(`${val}, 저는 ${this.region}에서 온 ${this.gender}입니다.`);
  }
}

let korean = new Person("Korea", "남자");
korean.greeting();

class Person2 extends Person {
  constructor(region_, gender_, age) {
    super(region_, gender_);
    this.age = age;
  }

  greeting() {
    console.log(
      `안녕하세요, 저는 ${this.region}에서 온 ${this.gender}이고, 나이는 ${this.age}살입니다.`
    );
  }
}

let american = new Person2("America", "남자", 25);
american.greeting();
