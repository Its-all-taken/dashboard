$(document).ready(function(){
  $('.ads-c').slick({
    autoplay:true,
    autoplaySpeed: 5000,
    dots: true
  });

  $(".close-a").click(function (){
      $(".ads-over").toggleClass("blocker")
    })

  $(".chevron").click(function (){
    $(".weather-side").toggleClass("blocker")
    $(".chevron").hide();
    })

  $(".close-w").click(function (){
    $(".weather-side").toggleClass("blocker")
    $(".chevron").show();
    })

  $(".colour").click(function (){
  let bgColor= ["#000", "#8248CB", "#487CCB", "#CB7F48", "#507E14"];
  let ranColor = bgColor[Math.floor(Math.random()*bgColor.length)];
  $(".colour").click(function(i,val){
    $("body").css("background-color",ranColor);
    })
  });
});

$(document).ready(function(){
  function getLocation() {
      $.get("https://ipapi.co/json", function(data) {
          getWeather(data.city);
      });
    }
  jQuery.getJSON('https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&id=524901&appid=061f24cf3cde2f60644a8240302983f2', function(data) {
      temp = data.main.temp.toFixed(0);
      status = data.weather[0].description;
      icon = data.weather[0].icon;
      clouds = data.clouds.all;
      humidity = data.main.humidity ? Math.round(data.main.humidity) : "N/A ";
      windSpeed = data.wind.speed ? (data.wind.speed * 3.6).toFixed(0) : "N/A ";

      $("#temperature").text(temp);
      $("#status").text(status[0].toUpperCase() + status.slice(1));
      $("#clouds").text(clouds + " %");
      $("#humidity").text(humidity + " %");
      $("#windSpeed").text(windSpeed + " метр/сек");

      if (icon === '01d' || icon === '01n'){
        $("#Clear").css('visibility', 'visible')
        $("#Drizzle").css('display', 'none')
        $("#Rain").css('display', 'none')
        $("#Snow").css('display', 'none')
        $("#Clouds").css('display', 'none')
      }
      else if (icon === '10d' || icon === '10n'){
        $("#Drizzle").css('visibility', 'visible')
        $("#Rain").css('display', 'none')
        $("#Snow").css('display', 'none')
        $("#Clouds").css('display', 'none')
        $("#Clear").css('display', 'none')
      }
      else if (icon === '11d' || icon === '11n'){
        $("#Rain").css('visibility', 'visible')
        $("#Drizzle").css('display', 'none')
        $("#Snow").css('display', 'none')
        $("#Clouds").css('display', 'none')
        $("#Clear").css('display', 'none')
      }
      else if (icon === '13d' || icon === '13n'){
        $("#Snow").css('visibility', 'visible')
        $("#Rain").css('display', 'none')
        $("#Drizzle").css('display', 'none')
        $("#Clouds").css('display', 'none')
        $("#Clear").css('display', 'none')
      }
      else if (icon === '02d' || icon === '02n' || icon === '03d' || icon === '03n' || icon === '04d' || icon === '04n'){
        $("#Clouds").css('visibility', 'visible')
        $("#Clear").css('display', 'none')
        $("#Rain").css('display', 'none')
        $("#Drizzle").css('display', 'none')
        $("#Snow").css('display', 'none')
      }
    });
});
