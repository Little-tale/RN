export {};

function testFunction(): void {
  const hello: string = "korea";
  console.log(hello);
}

if (true) {
  const hello: string = "America";
  console.log(hello, "hello from if block");
}

testFunction();

// console.log(hello);

// String Literal

const val01: string = "Hello!";
const val02: string = "world!";
const val03: string = val01 + " " + val02;
const val04: string = `${val01} ${val02}`;

console.log(val03);
console.log(val04);

// repeat
let array: number[] = [10, 20, 30, 40, 50];

let obj: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
};

for (const val of array) {
  console.log(val);
}

for (const key in obj) {
  console.log(key, obj[key]);
}

// Rest Operator

function printNums2(num1: number, ...rest: number[]): void {
  console.log(num1, rest);
}

printNums2(1, 2, 3, 4, 5);
// 1 [ 2, 3, 4, 5 ]

// Spread Operator
function sum2(...nums: number[]): number {
  return nums.reduce((pre, curr) => pre + curr, 0);
}

let numArray: number[] = [1, 2, 3];

// apply는 (thisArg, argsArray) 형식이라 이렇게 쓰는 게 정석
console.log(sum2.apply(null, numArray));
console.log(sum2(...numArray));

let drinks: { cafe: string; coca: string } = {
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

let arrowArray: number[] = [1, 2, 3, 4, 5];

let twice: number[] = arrowArray.map((num: number) => num * 2);
console.log(twice);

let arrow2: string[] = arrowArray.map((num: number) => {
  return num % 2 === 0 ? "짝" : "홀";
});

console.log(arrow2);

// Class

class Person {
  // public 파라미터 → 필드 선언 + 할당까지 한 번에 처리됨
  constructor(public region: string, public gender: string) {}

  greeting(val: string = "안녕하시오"): void {
    console.log(`${val}, 저는 ${this.region}에서 온 ${this.gender}입니다.`);
  }
}

let korean = new Person("Korea", "남자");
korean.greeting();

class Person2 extends Person {
  constructor(region: string, gender: string, public age: number) {
    super(region, gender);
  }

  greeting(): void {
    console.log(
      `안녕하세요, 저는 ${this.region}에서 온 ${this.gender}이고, 나이는 ${this.age}살입니다.`
    );
  }
}

let american = new Person2("America", "남자", 25);
american.greeting();
