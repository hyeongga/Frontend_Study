/*변수 설정*/

//var은 전역 변수로 전체공간에 다 영향을 미침 (잘 안씀); hoisting일어남
var myName = "hyeong";
if (true) {
  var myName = "oh";
}
console.log(myName); /*결과 hyeong*/

/*변수 선언시 let 많이 사용; 
const의 경우 통상적으로 상수-대문자/ 변수-소문자로 표기;
let, const 모두 블록 수준의 스코프를 가짐*/
let myName = "variable";
const WALLET = "sp3i42po";

//--------------------------------------------------------------------------------------

let iAmprogrammer = true; /*let의 경우 값을 안 담아도됨; (=true;) 생략가능; 추후설정 가능*/
let myFavoriteDrikIsZeroCoke = true;
let iHaveAThousandBitcoins = false; /*java_camelCase ; python_snake_case;*/

if (iHaveAThousandBitcoins) {
  console.log("You're a good person😁");
} else {
  console.log("You're a lier 🤬");
}

//--------------------------------------------------------------------------------------
/*배열(array) 안의 객체(object); 
 객체는 key-value로 구성;
 var a = {}; is an object-key-value pairs. var a = []; is an array-values*/

var a = [1, 2, 3]; // index 0부터 시작 [배열]
console.log(a);

const myProfile = {
  name: "haha",
  job: "hoho",
  age: "2",
  isKind: true,
};

const uglyMyProfile = ["haha", "hoho", 4];

myProfile.age = 55;
console.log(myProfile.age);

/*const 지정시 변수 자체 변경(재할당,재선언)은 불가하지만,
myProfile.age와 같이 객체를 통한 속성 변경은 가능*/
