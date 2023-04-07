/*for문*/

for (let i = 0; i < 10; i++) {
  let star = "";
  for (let j = 0; j < 10; j++) {
    if (j < i) {
      star += "*";
    }
  }
  console.log(star);
}

/* i++ , ++i, a+=1 */
let i = 0;
let result1 = ++i;
console.log(i, result1); //1,1

let j = 0;
let result2 = j++;
console.log(j, result2); //1,0

result1 += 2;
result2 += 2;
console.log(result1, result2); //3,2
