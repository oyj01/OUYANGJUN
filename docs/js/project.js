$(function(){
  $(".menu").show();
  $(".home").show();
  setTimeout(function(){
    $(".project").fadeIn(2000);
  },1000)

  $(".backTop").click(function(){
    $("html, body").animate({ scrollTop : 0}, 120);
  })
  
  var list = sessionStorage.getItem("list");
  console.log(list);
})