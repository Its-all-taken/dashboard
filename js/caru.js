$(document).ready(function(){
  $('.ads-c').slick({
    autoplay:true,
    autoplaySpeed: 5000,
    dots: true
  });
$(".close").click(function (){
        $(".ads-over").toggleClass("blocker")
      })
$(".colour").click(function (){
  let bgColor= ["#000", "#8248CB", "#487CCB", "#CB7F48", "#507E14"];
  let random_color = bgColor[Math.floor(Math.random()*bgColor.length)];
  $(".colour").click(function(i,val){
    $("body").css("background-color",random_color);
    })
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
