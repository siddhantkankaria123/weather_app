let containerTwo = document.getElementById("containertwo");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let lon = document.getElementById("lon");
let lat = document.getElementById("lat");
let humid = document.getElementById("humid");
let windspeed = document.getElementById("windspeed");
let API_key = `7c972d8ea0147a643ec41571e79734d2`;
let day = document.getElementById("day");
let month = document.getElementById("month");
let date = document.getElementById("date");
let year = document.getElementById("year");
let cityName = document.getElementById("cityName");
let weatherImage = document.getElementById("weatherImage");
let windImage = document.getElementById("windImage");
let humidImage = document.getElementById("humidImage");

let maincontainerthree = document.getElementById("maincontainerthree");
let containerThree = document.getElementById("containerThreecontent");
let containerfour = document.getElementById("containerfourcontent");
let containerfive = document.getElementById("containerfivecontent");
let containersix = document.getElementById("containersixcontent");

let maincontainerfour = document.getElementById("maincontainerfour");
let containerseven = document.getElementById("containersevencontent");
let containereight = document.getElementById("containereightcontent");
let containernine = document.getElementById("containerninecontent");
let containerten = document.getElementById("containertencontent");

let maincontainerfive = document.getElementById("maincontainerfive");
let containereleven = document.getElementById("containerelevencontent");
let containertweleve = document.getElementById("containertwelevecontent");
let containerthirteen = document.getElementById("containerthirteencontent");
let containerfourteen = document.getElementById("containerfourteencontent");
function go(e) {
  if (city.value == "") {
    alert("please Enter City Name");
  } else {
    getData(city.value);
  }
}
async function getData(city) {
  //current weather API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;

  //  next 5 day 3 hour weather API
  const hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}&units=metric`;

  //  current weather data
  const response = await fetch(url);
  const data = await response.json();

  // hourly weather data
  const hourly_response = await fetch(hourlyUrl);
  const hourly_data = await hourly_response.json();
  // console.log(hourly_data.list[0].main.temp);
  // console.log(hourly_data.list[0].dt_txt);

  console.log(hourly_data);
  if (data.cod == "404") {
    cityName.innerHTML = "";
    containerTwo.innerHTML = "";
    alert("city not found");
  } else {
    containerTwo.style.display = "block";
    cityName.innerHTML = city;

    windImage.innerHTML = `<i class="fa-solid fa-wind"></i>`;
    humidImage.innerHTML = `<img src="humidity.png" height = "40px" />`;
    weatherImage.innerHTML = `  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"  alt="" height="200px" />
    <div>${data.weather[0].description}</div> `;
    weatherImage.style.display = "flex";
    weatherImage.style.flexDirection = "column";
    weatherImage.style.fontSize = "2rem";

    // weatherImage.style.gap = "2rem";
    weatherImage.style.textAlign = "center";
    temp.innerHTML = `${data.main.temp} °c`;
    lon.innerHTML = `lon: ${data.coord.lon}`;
    lat.innerHTML = `lat: ${data.coord.lat}`;
    humid.innerHTML = `Humidity: ${data.main.humidity}% `;
    windspeed.innerHTML = `Wind Speed: ${data.wind.speed} Km/h`;

    maincontainerthree.style.display = "block";
    containerThree.innerHTML = `  <img src="https://openweathermap.org/img/wn/${hourly_data.list[0].weather[0].icon}@2x.png"  alt="" height="40px" /> 
                                  <div>${hourly_data.list[0].main.temp} °c</div>
                                  <div>${hourly_data.list[0].dt_txt} </div>`;
    containerfour.innerHTML = `<img src="https://openweathermap.org/img/wn/${hourly_data.list[1].weather[0].icon}@2x.png"  alt="" height="40px" /> 
    <div>${hourly_data.list[1].main.temp} °c</div>
    <div>${hourly_data.list[1].dt_txt} </div>`;
    containerfive.innerHTML = `<img src="https://openweathermap.org/img/wn/${hourly_data.list[2].weather[0].icon}@2x.png"  alt="" height="40px" /> 
    <div>${hourly_data.list[2].main.temp} °c</div>
    <div>${hourly_data.list[2].dt_txt} </div>`;
    containersix.innerHTML = `<img src="https://openweathermap.org/img/wn/${hourly_data.list[4].weather[0].icon}@2x.png"  alt="" height="40px" /> 
    <div>${hourly_data.list[4].main.temp} °c</div>
    <div>${hourly_data.list[4].dt_txt} </div>`;

    maincontainerfour.style.display = "block";
    containerseven.innerHTML = `<img src="https://openweathermap.org/img/wn/${hourly_data.list[5].weather[0].icon}@2x.png"  alt="" height="40px" /> 
    <div>${hourly_data.list[5].main.temp} °c</div>
    <div>${hourly_data.list[5].dt_txt} </div>`;

    containereight.innerHTML = `<img src="https://openweathermap.org/img/wn/${hourly_data.list[6].weather[0].icon}@2x.png"  alt="" height="40px" /> 
    <div>${hourly_data.list[6].main.temp} °c</div>
    <div>${hourly_data.list[6].dt_txt} </div>`;

    containernine.innerHTML = `<img src="https://openweathermap.org/img/wn/${hourly_data.list[7].weather[0].icon}@2x.png"  alt="" height="40px" /> 
    <div>${hourly_data.list[7].main.temp} °c</div>
    <div>${hourly_data.list[7].dt_txt} </div>`;

    containerten.innerHTML = `<img src="https://openweathermap.org/img/wn/${hourly_data.list[8].weather[0].icon}@2x.png"  alt="" height="40px" /> 
    <div>${hourly_data.list[8].main.temp} °c</div>
    <div>${hourly_data.list[8].dt_txt} </div>`;

    maincontainerfive.style.display = "block";
    containereleven.innerHTML = `<img src="https://openweathermap.org/img/wn/${hourly_data.list[9].weather[0].icon}@2x.png"  alt="" height="40px" /> 
    <div>${hourly_data.list[9].main.temp} °c</div>
    <div>${hourly_data.list[9].dt_txt} </div>`;

    containertweleve.innerHTML = `<img src="https://openweathermap.org/img/wn/${hourly_data.list[10].weather[0].icon}@2x.png"  alt="" height="40px" /> 
    <div>${hourly_data.list[10].main.temp} °c</div>
    <div>${hourly_data.list[10].dt_txt} </div>`;

    containerthirteen.innerHTML = `<img src="https://openweathermap.org/img/wn/${hourly_data.list[11].weather[0].icon}@2x.png"  alt="" height="40px" /> 
    <div>${hourly_data.list[11].main.temp} °c</div>
    <div>${hourly_data.list[11].dt_txt} </div>`;

    containerfourteen.innerHTML = `<img src="https://openweathermap.org/img/wn/${hourly_data.list[12].weather[0].icon}@2x.png"  alt="" height="40px" /> 
    <div>${hourly_data.list[12].main.temp} °c</div>
    <div>${hourly_data.list[12].dt_txt} </div>`;

    let x = new Date();
    date.innerHTML = x.getDate();
    year.innerHTML = x.getFullYear();
    let currentMonth = x.getMonth();
    // console.log(currentMonth);
    switch (currentMonth) {
      case 0:
        month.innerHTML = +"Jan";
        break;
      case 1:
        month.innerHTML = "Feb";
        break;
      case 2:
        month.innerHTML = "March ";
        break;
      case 3:
        month.innerHTML = "Apr ";
        break;
      case 4:
        month.innerHTML = "May ";
        break;
      case 5:
        month.inerHTML = "Jun ";
        break;
      case 6:
        month.innerHTML = "July ";
        break;
      case 7:
        month.innerHTML = "Aug ";
        break;
      case 8:
        month.innerHTML = "Sept ";
        break;
      case 9:
        month.innerHTML = "Oct ";
        break;
      case 10:
        month.innerHTML = "Nov ";
        break;
      case 11:
        month.innerHTML = "Dec ";
        break;
    }
    let day = document.getElementById("day");

    let currentDay = x.getDay();
    console.log(currentDay);
    switch (currentDay) {
      case 0:
        day.innerHTML = " Sun";
        break;
      case 1:
        day.innerHTML = "Mon";
        break;
      case 2:
        day.innerHTML = "Tues ";
        break;
      case 3:
        day.innerHTML = "Wed ";
        break;
      case 4:
        day.innerHTML = "Thru ";
        break;
      case 5:
        day.inerHTML = "Fri ";
        break;
      case 6:
        day.innerHTML = "Sat ";
        break;
    }
  }
}
