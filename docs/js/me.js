$(function () {  
  $(".profile").fadeIn("fast");
  setTimeout(function () {
    $(".profile_logo_name").fadeIn("slow");
  }, 500)
  setTimeout(function () {
    $(".cha").fadeIn("slow");
    $(".menu").fadeIn("slow");
    $(".profile_background").toggle({"effect":"drop","direction":"down","options":"liner","duration":700});
    
  }, 1000)

  setTimeout(function () {
    $(".profile_limit").fadeIn(1000);
  },1750)
  
  
  $(window).scroll(function(){
    if($(document).scrollTop()>50){
      $("div.profile_OUYANGJUN").fadeOut();
    }
    if($(document).scrollTop()==0){
      $("div.profile_OUYANGJUN").fadeIn("show");
    }
  })

  $(".cha").click(function(){
    window.history.go(-1);
  })
  $(".cha").hover(function(){
    $(".cha1").css("width","4px");
    $(".cha2").css("width","4px");
  },function(){
    $(".cha1").css("width","2px");
    $(".cha2").css("width","2px");
  })
})