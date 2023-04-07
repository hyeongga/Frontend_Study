const Block = "블";
const BBLE = "쁠";
const CHAIN = "체";
const SCHOOL = "스";

let rightWord = Block + CHAIN + SCHOOL;

if (rightWord === "블체스") {
  console.log("블체스 화이팅!");
}

// "=="과 "==="의 차이
console.log(1 == 1); //T
console.log(1 === 1); //T
console.log(1 == "1"); //T : 값만 같으면 가능
console.log(1 === "1"); //F : 타입까지 같아야 가능

//----------------------------------------------------------
/*한글 변수명 가능*/

const 나는프로그래머다 = true;
const 나는천개의비트코인이있다 = false;
const 내가제일좋아하는음료는제로콜라다 = true;

let trueOrFalse = 나는프로그래머다;

if (trueOrFalse) {
  console.log("당신은 거짓을 말하지 않는 선량한 사람입니다");
} else {
  console.log("당신은 거짓말쟁이에 나쁜 사람입니다");
}

//else if 구문
let blockchainScore = 20;
let frontendScore = 50;

let totalScore = blockchainScore + frontendScore;

if (totalScore > 78) {
  console.log("Great👍");
} else if (totalScore > 50) {
  console.log("Good");
} else if (totalScore > 30) {
  console.log("Try harder");
} else {
  console.log("Sad.,.,.,");
}
