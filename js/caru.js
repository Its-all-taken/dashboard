$(document).ready(function(){
  $('.ads-c').slick({
    autoplay:true,
    autoplaySpeed: 5000,
    dots: true
  });

$(".close-a").click(function (){
        $(".ads-over").toggleClass("blocker")
      })

$(".ch-w-side").click(function (){
    $(".weather-side").toggleClass("blocker")
    })

$(".close-w").click(function (){
    $(".weather-side").toggleClass("blocker")
    })

$(".colour").click(function (){
  let bgColor= ["#000", "#8248CB", "#487CCB", "#CB7F48", "#507E14"];
  let random_color = bgColor[Math.floor(Math.random()*bgColor.length)];
  $(".colour").click(function(i,val){
    $("body").css("background-color",random_color);
    })
  });

  let unit = "C";
  function getLocation() {
      $.get("https://ipapi.co/json", function(data) {
          getWeather(data.city);
      });
  }
});


$(document).ready(function(){
  jQuery.getJSON('https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&id=524901&appid=061f24cf3cde2f60644a8240302983f2', function(data) {
      temp = data.main.temp.toFixed(0);
      status = data.weather[0].description;
      iconId = data.weather[0].id;
      clouds = data.clouds.all;
      humidity = data.main.humidity ? Math.round(data.main.humidity) : "N/A ";
      windSpeed = data.wind.speed ? (data.wind.speed * 3.6).toFixed(0) : "N/A ";

      $("#temperature").text(temp);
      $("#status").text(status[0].toUpperCase() + status.slice(1));
      $("#clouds").text(clouds + " %");
      $("#humidity").text(humidity + " %");
      $("#windSpeed").text(windSpeed + " метров/сек");
    });
});
//не работает
// $(".colour").click(function (){
//   let bgColor = ["#000", "#8248CB", "#487CCB", "#CB7F48", "#507E14"];
//   $.each(bgColor, function(index, value){
//     $("body").css("background-color", value)
//   })
// });
//не работает
