$(function () {
  console.log(sessionStorage.getItem("loadTimes"))
  if (!window.sessionStorage) {
    alert("浏览器不支持sessionStorage");
    return false;
  }
  else{
    var list = sessionStorage.getItem("list");
    console.log(list);
    var loadTimes = sessionStorage.getItem("loadTimes");
    if (loadTimes == null) {
      setTimeout(function () {
        $("div.logo_background").hide();
      }, 3000)
      setTimeout(function () {
        $("div.OUYANGJUN").fadeIn();
        $("div.display").fadeIn();
      },3000)
      setTimeout(function () {   
        $("div.mask_background").fadeIn("slow");    
        $("div.display_background").fadeIn("slow");
        smartfload();
      }, 3500)
      setTimeout(function () {
        $("div.menu").fadeIn(2000);
        $("div.category").fadeIn(2000);
        $(".display_list").fadeIn(2000);
      }, 4000)
      sessionStorage.setItem("loadTimes",1)
    }else if(loadTimes != null && list != "" && list != null){
      var id = "";
      var lis = $(".display_list li").length;
      var name = list;
      if(list == "PRODUCT"){
        id = "PD"
      }
      if(list == "GRAPHIC"){
        id = "GAD"
      }
      if(list == "INTERACTIVE"){
        id = "IXD"
      }
      $("div.logo_background").hide();
      $("div.OUYANGJUN").fadeIn();
      $("div.display").fadeIn();
      setTimeout(function () {   
        $("div.mask_background").fadeIn("slow");    
        $("div.display_background").fadeIn("slow");
        smartfload();
        $("div.menu").fadeIn(2000);
        $("div.category").fadeIn(2000);
        $(".display_list").fadeIn(2000);
      }, 1000)
      labelJudg(id,name,lis);
      
    }else{
      $("div.logo_background").hide();
      $("div.OUYANGJUN").fadeIn();
      $("div.display").fadeIn();
      setTimeout(function () {   
        $("div.mask_background").fadeIn("slow");    
        $("div.display_background").fadeIn("slow");
        smartfload();
        $("div.menu").fadeIn(2000);
        $("div.category").fadeIn(2000);
        $(".display_list").fadeIn(2000);
      }, 1000)
    }
  }



  //图片悬浮预览
  $("img.display_photo").hover(function(){
    var p_id = $(this).attr("id");
    $(".preview_photo").attr("src","img/" + p_id + ".jpg").stop(true,true).fadeIn("slow");
    $(".display_frame").css("opacity","30%");
    $(".display_frame#" + p_id).css("opacity","100%");
  },function(){
    $(".preview_photo").stop(true,true).fadeOut("slow");
    $(".display_frame").css("opacity","100%");
  })

  //分类导航悬浮
  $(".label_list").hover(function(){
    isMouseOver = true
    var id = $(this).attr("id");
    $(".label_title#" + id).stop(true,true).css("font-weight","bold");
    $(".label_icon#" + id).stop(true,true).css("height","3px");
    $(".label_icon_show#" + id).stop(true,true).css("width","5px");
    $(".label_title_show#" + id).stop(true,true).css("font-weight","bold");
    $(".label_close_show#" + id).stop(true,true).css("font-weight","bold");
  },function(){
    if (isMouseOver) {
     var id = $(this).attr("id");
      $(".label_title#" + id).stop(true,true).css("font-weight","lighter");
      $(".label_icon#" + id).stop(true,true).css("height","1.5px"); 
      $(".label_icon_show#" + id).stop(true,true).css("width","3px");
      $(".label_title_show#" + id).stop(true,true).css("font-weight","normal");
      $(".label_close_show#" + id).stop(true,true).css("font-weight","normal");
    }
  })

  //导航点击分类
  $(".label_list").click(function(){
    var id = $(this).attr("id");
    var name = $(this).find(".label_title").html();
    if (name == null) {
      name = $(this).find(".label_title_show").html();
    }
    var lis = $(".display_list li").length;
    console.log(id,name,lis);
    // $(".label_current").fadeIn();
    $(".label_click").hide({"effect":"drop","direction":"up"});
    $(".label_name").html("");
    labelJudg(id,name,lis);
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
    $(".label_name").html("");
    $(".display_frame").fadeIn(1500);
    $(".home").fadeOut();
  })

  //窗口滚动隐藏
  var theWidth = window.innerWidth;
  console.log(theWidth);
  if (theWidth < 1220) {
    $(".label").hide();
    $(".label_hide").fadeIn();
  }else{
    $(".label").fadeIn();
    $(".label_hide").hide();
  }

  $(window).scroll(function(){
    if($(document).scrollTop()>75){
      $("div.OUYANGJUN").fadeOut("show");
    }
    if($(document).scrollTop()==0){
      $("div.OUYANGJUN").fadeIn("show");
    }

  })
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

  //点击图片浏览时获得list
  $(".display_frame").click(function(){
    var list = $(".label_name").html();
    console.log(list)
    sessionStorage.setItem("list",list);
  })

  //智能悬浮
  function smartfload(){
    var istop = $("#fixed").offset().top;
    $(window).scroll(function(){   
      if ($(document).scrollTop()>=istop) {
        $("#fixed").css({"position":"fixed","top":"0"});
      }
      if ($(document).scrollTop()<istop) {
        $("#fixed").css({"position":"absolute","top":"calc(50vh + 100px)"});
      }
    }) 
  }

  //标签判断
  function labelJudg(id,name,lis){
    // if (id == "CLOSE" || id == "ME") {
    //   return false;
    // }
    if (id == "HOME" || id == "CLOSE" || id == "ME") {
      $(".label_name").html("");
      $(".display_frame").fadeIn(1500);
      $(".home").fadeOut();
      return false;
    }
    $(".label_name").append(name);
    $(".display_frame").hide();
    $(".home").fadeIn();
    for (let i = 1; i <= lis; i++) {
      if ($(".display_list li:nth-child("+ i +")").attr("list") == id) {
        $(".display_list li:nth-child("+ i +")").fadeIn(1500);
      }   
    }
  }
 
})



 


