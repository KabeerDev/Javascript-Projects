let btn = document.querySelector(".search");
let s_input = document.querySelector(".s_input");
let d_city = document.querySelector("#d_city-1");
let d_city2 = document.querySelector("#d_city-2");
let d_city3 = document.querySelector("#d_city-3");
let cp1 = document.querySelector("#cp1");
let cp2 = document.querySelector("#cp2");
let cp3 = document.querySelector("#cp3");
let cp4 = document.querySelector("#cp4");
let cp5 = document.querySelector("#cp5");
let cp6 = document.querySelector("#cp6");

let fetchWeather = async (city) => {
  document.querySelector(".city").innerText = city;
  let url =
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7996025811mshca3386bb0db2af7p13bdb0jsnb1bdde7232cd",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  document.querySelector("#temp").innerText = result.temp;
  document.querySelector("#temp2").innerText = result.temp;
  document.querySelector("#min_temp").innerText = result.min_temp;
  document.querySelector("#max_temp").innerText = result.max_temp;
  document.querySelector("#feels").innerText = result.feels_like;
  document.querySelector("#humidity").innerText = result.humidity;
  document.querySelector("#humidity2").innerText = result.humidity;
  document.querySelector("#w_degree").innerText = result.wind_degrees;
  document.querySelector("#w_speed").innerText = result.wind_speed;
  document.querySelector("#w_speed2").innerText = result.wind_speed;
  document.querySelector("#sr_time").innerText = result.sunrise;
  document.querySelector("#ss_time").innerText = result.sunset;
};
fetchWeather("Faisalabad");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (s_input.value !== "") {
    let city = s_input.value;
    fetchWeather(city);
  }

  if (document.querySelector("#temp").innerText == undefined) {
    document.querySelector(".main").style.display = "none";
  }
});

d_city.addEventListener("click", (e) => {
  e.preventDefault();
  fetchWeather(d_city.innerText);
});

d_city2.addEventListener("click", (e) => {
  e.preventDefault();
  fetchWeather(d_city2.innerText);
});

d_city3.addEventListener("click", (e) => {
  e.preventDefault();
  fetchWeather(d_city3.innerText);
});

let cp_weather = async (
  city,
  cild1,
  cild2,
  cild3,
  cild4,
  cild5,
  cild6,
  cild7,
  cild8,
  cild9,
  cild10
) => {
  let url =
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7996025811mshca3386bb0db2af7p13bdb0jsnb1bdde7232cd",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  cild1.innerText = result.cloud_pct;
  cild2.innerText = result.feels_like;
  cild3.innerText = result.humidity;
  cild4.innerText = result.max_temp;
  cild5.innerText = result.min_temp;
  cild6.innerText = result.sunrise;
  cild7.innerText = result.sunset;
  cild8.innerText = result.temp;
  cild9.innerText = result.wind_degrees;
  cild10.innerText = result.wind_speed;
};

cp_weather(
  cp1.children[0].innerText,
  cp1.children[1],
  cp1.children[2],
  cp1.children[3],
  cp1.children[4],
  cp1.children[5],
  cp1.children[6],
  cp1.children[7],
  cp1.children[8],
  cp1.children[9],
  cp1.children[10]
);
cp_weather(
  cp2.children[0].innerText,
  cp2.children[1],
  cp2.children[2],
  cp2.children[3],
  cp2.children[4],
  cp2.children[5],
  cp2.children[6],
  cp2.children[7],
  cp2.children[8],
  cp2.children[9],
  cp2.children[10]
);
