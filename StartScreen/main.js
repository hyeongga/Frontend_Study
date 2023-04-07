//JS에서 html로 접근 (접근 : ''-tag/ #-id/ .-class)
const QUOTES = "quotes";
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const ampm = document.querySelector(".ampm");

function getTime() {
  const newDate = new Date();

  const hours = String(newDate.getHours()).padStart(2, "0"); //padStart : 시간 00:00 형식 맞추는 방법
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");

  /* //시간 00:00 형식 맞추기 ( 아래 식 or padStart)
    if (seconds.toString().length === 1) {
      seconds = "0" + seconds;
    }*/

  //time.innerText = hours + ":" + minutes + ":" + seconds;
  if (newDate.getHours() > 12) {
    const pmHours = String(newDate.getHours() - 12).padStart(2, "0");
    const pm = "PM";
    time.innerText = `${pmHours}:${minutes}:${seconds}`;
    ampm.innerText = `${pm}`;
  } else {
    const am = "AM";
    time.innerText = `${hours}:${minutes}:${seconds}`;
    ampm.innerText = `${am}`;
  }
}

function getDate() {
  const newDate = new Date();

  const day = String(newDate.getDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const year = String(newDate.getFullYear());

  date.innerText = `${year}.${month}.${day}`;
}

getTime();
getDate();
setInterval(getTime, 1000);

/*// '=>함수' 사용
setInterval(() => {
  console.log("setInterval");
}, 1000);
//1000이 1초를 뜻함*/

function getQuotes() {
  const quotesMsg = document.querySelector(".quotesMsg");
  let savedQuotes = localStorage.getItem(QUOTES); //localStorage에서 가지고 오기

  if (!savedQuotes) {
    localStorage.setItem(
      QUOTES,
      JSON.stringify(["우와우와", "하하하하", "신기방기", "랄랄라랄"])
    ); //setItem:추가, stringify:배열->문자열로 변경
    savedQuotes = localStorage.getItem(QUOTES); //문자열 가지고오기
  }
  let quotesArray = JSON.parse(savedQuotes); //문자열 -> 배열로 변경
  quotesMsg.innerText =
    quotesArray[Math.floor(Math.random() * quotesArray.length)]; //랜덤한 문장 나오게 만들기
}

getQuotes();

function onClickAdd() {
  const newQuotes = document.querySelector(".newQuotes");
  newQuotes.style.display = "inline-block";
}

function onClickRegist() {
  const quotesMsg = document.querySelector(".quotesMsg");
  const newQuotes = document.querySelector(".newQuotes");
  const newQuotesInput = document.querySelector(".newQuotesInput");

  if (!newQuotesInput.value) {
    alert("내용을 입력해주세요");
    return;
  }

  let savedQuotes = localStorage.getItem(QUOTES);

  let quotesArray = JSON.parse(savedQuotes);
  quotesArray.push(newQuotesInput.value);

  localStorage.setItem(QUOTES, JSON.stringify(quotesArray));

  quotesMsg.innerHTML = `<span style="color:white;">${newQuotesInput.value}</span>`;
  newQuotes.style.display = "none";
  newQuotesInput.value = "";
  // console.log(newQuotesInput.value);
}

let isLoading = false; //연속 요청 방지

//비동기를 위해서 async-await 사용
async function onClickSearch() {
  const searchInput = document.querySelector(".searchInput");
  const searchResult = document.querySelector(".searchResult");
  if (!searchInput.value) return; //코드가 한 줄로 끝나면 {중괄호}생략가능
  if (isLoading) return;

  //여기까지 옴 === is Loading이 false ; 실행되고 있는중이면 위에서 return 되어 밑으로 내려가지 않음
  isLoading = true;
  const question = searchInput.value;
  searchInput.value = "검색 중 입니다. 잠시만 기다려 주세요";

  console.log("쳇 제피티 동작중");

  //프론트엔드에서 백엔드로 요청을 보냄
  const response = await axios.post(
    "https://holy-fire-2749.fly.dev/chat",
    {
      question: question,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer BLOCKCHAINSCHOOL3",
      }, //Authorization: "인증토큰종류 실제토큰문자"
    }
  ); // axios.post(1번 인자에는 주소, 2번인자에는 body 정보, 3번째 인자에는 header에 넣어줄 정보를 각각 넣어주면 된다

  if (response.status === 200) {
    searchResult.style.display = "inline";
    searchResult.innerText = response.data.choices[0].message.content;
  }
  searchInput.value = "";
  isLoading = false;
}

//toggle 껐다 켰다 할 수 있는 함수
function onClickToggle(value) {
  const nft = document.querySelector(".nft");
  const nftView = document.querySelector(".nftView");

  if (value) {
    nft.style.display = "inline-block";
    nftView.style.display = "none";
  } else {
    nft.style.display = "none";
    nftView.style.display = "inline-block";
  }
}
