// const API_KEY = "";
const weatherIcon = document.querySelector(".weatherIcon");
const weatherTemp = document.querySelector(".weatherTemp");

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    // http 요청 promis 사용 - Fetch사용해서 비동기화
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        weatherTemp.innerText =
          data.name + ", " + parseInt(data.main.temp) + "°C";

        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      });
  },
  () => alert("Not allowed!")
);

// //axios-await로 작성할 경우 : 비동기화 하기위해 :async-await 많이 사용
// const a = async () => {
//   const response = await axios.get(url);
//   const response = await axios.post(
//     url,
//     {
//       lat,
//       lon,
//     },
//     {
//       headers: {
//         key: API_KEY,
//       },
//     }
//   );
//   console.log(response.data);
// }; //??????????????????????????????????
