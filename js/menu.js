$(function(){
  $(window).resize(function(){
    var width = window.innerWidth;
    if (width < 1220) {
      $(".label").hide();
      $(".label_hide").fadeIn();
      $(".home").css({"width":"22px","height":"22px","bottom":"40px","right":"40px"});
      $(".home_icon").css({"width":"5px","height":"5px","margin-bottom":"2px","margin-left":"2px"});
      $(".back").css({"width":"7.5px","height":"7.5px","bottom":"3px","right":"30px"});
    }else{
      $(".label").fadeIn();
      $(".label_hide").hide();
      $(".label_click").hide();
      $(".home").css({"width":"45px","height":"45px","bottom":"40px","right":"40px"});
      $(".home_icon").css({"width":"10px","height":"10px","margin-bottom":"4px","margin-left":"4px"});
      $(".back").css({"width":"15px","height":"15px","bottom":"10px","right":"65px"});
    }
  })

  $(".home").hover(function(){
    if (window.innerWidth >= 1220) {
      $(".back").css("right","47.5px");
      $(".home_icon").css({"width":"7.5px","height":"7.5px","margin-bottom":"7.5px","margin-left":"7.5px"});
    }
  },function(){
    if (window.innerWidth >= 1220) {
      $(".back").css("right","60px");
      $(".home_icon").css({"width":"10px","height":"10px","margin-bottom":"4px","margin-left":"4px"});
    }
  })

  $(".home").click(function(){
    $(".label_current").hide();
    $(".display_frame").fadeIn(1500);
    $(".home").fadeOut();
  })

  $(".home#project").click(function(){
    window.history.go(-1);
  })

  $(".label_hide").click(function(){
    $(".label_click").toggle({"effect":"drop","direction":"up"});
  })
})