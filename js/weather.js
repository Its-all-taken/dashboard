// let unit = "C";
//
// function getLocation() {
//     $.get("https://ipapi.co/json", function(data) {
//         getWeather(data.city);
//     });
// }
//
// function getWeather(city) {
//     let api = "https://thingproxy.freeboard.io/fetch/https://api.openweathermap.org/data/2.5/weather?id=524901&appid=061f24cf3cde2f60644a8240302983f2";
//
//     jQuery.getJSON($api, function(data) {
//         console.log(data);
//         temp = data.main.temp.toFixed(0);
//         status = data.weather[0].description;
//         iconId = data.weather[0].id;
//         pressure = data.main.pressure ? Math.round(data.main.pressure) : "N/A ";
//         humidity = data.main.humidity ? Math.round(data.main.humidity) : "N/A ";
//         windSpeed = data.wind.speed ? (data.wind.speed * 3.6).toFixed(0) : "N/A ";
//
//         $("#temperature").text(temp);
//         $("#status").text(status[0].toUpperCase() + status.slice(1));
//         $(".pressure").text(pressure + " hPa");
//         $(".humidity").text(humidity + " %");
//         $(".windSpeed").text(windSpeed);
//       });
//     }
