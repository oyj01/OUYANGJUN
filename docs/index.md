<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>OUYANG JUN</title>
    <link rel="icon" type="image/x-icon" href="img/logo32px2.png">
    <link rel="stylesheet" type="text/css" href="css/logoCG.css"/>
    <link rel="stylesheet" type="text/css" href="css/display.css"/>
    <link rel="stylesheet" type="text/css" href="css/menu.css"/>
    <link rel="stylesheet" type="text/css" href="css/center.css"/>
    <link rel="stylesheet" type="text/css" href="css/project.css"/>
    <link rel="stylesheet" href="js/jquery-ui-1.10.4.custom/css/base/jquery-ui-1.10.4.custom.css">
    <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
    <script src="js/jquery-ui-1.10.4.custom/js/jquery-ui-1.10.4.custom.min.js" charset="utf-8"></script> 
    <script type="text/javascript" src="https://cdn.bootcss.com/jquery.pjax/2.0.1/jquery.pjax.js"></script>
    <script src="js/main.js" charset="utf-8"></script>
    <script src="js/menu.js" charset="utf-8"></script>
  </head>

<body>
  <div class="wrapper">
    <div class="logo_background">
      <div class="logoCG"></div>
    </div> 
    
    <div class="menu">
      <div class="aboutME">
        <a href="me/me.html" class="about">
          <div class="logo32"></div>
        </a>
      </div>

      <div class="contact">
        <div class="contact_icon">
          <a href="mailto:1995ouyangjun@gmail.com">
            <img src="img/mail-1.png" alt="">
          </a>
        </div>
        <div  class="contact_icon">
          <a href="https://www.instagram.com/ouyangjun95/">
            <img src="img/ins-1.png" alt="">
          </a>
        </div>
      </div>

      <ul class="home">
        <div class="back"></div>
        <li class="home_icon"></li>
        <li class="home_icon"></li>
        <li class="home_icon"></li>
        <li class="home_icon"></li>
        <li class="home_icon"></li>
        <li class="home_icon"></li>
        <li class="home_icon"></li>
        <li class="home_icon"></li>
        <li class="home_icon"></li>
      </ul>  
    </div>
    
    <div class="category">
      <ul class="label">
        <li class="label_list" id="PD">
          <div class="label_icon" id="PD"></div>
          <h2 class="label_title" id="PD">PRODUCT</h2>
        </li>
        <li class="label_list" id="GAD">
          <div class="label_icon" id="GAD"></div>
          <h2 class="label_title" id="GAD">GRAPHIC</h2>
        </li>
        <li class="label_list" id="IXD">
          <div class="label_icon" id="IXD"></div>
          <h2 class="label_title" id="IXD">INTERACTIVE</h2>
        </li>
        <li class="label_list" id="ME" onclick="window.open('me/me.html','_self')">
          <div class="label_icon" id="ME"></div>
          <h2 class="label_title" id="ME">ABOUT</h2>
        </li>
      </ul>

      <ul class="label_hide">
        <li class="hide_line"></li>
        <li class="hide_line"></li>
        <li class="hide_line"></li>
        <li class="hide_line"></li>
      </ul>

      <div class="label_click">
        <div class="label_limit">        
          <ul class="label_show">
            <li class="label_list" id="CLOSE">
              <div class="label_icon_show" id="CLOSE"></div>
              <h2 class="label_close_show" id="CLOSE">CLOSE</h2>
            </li>
            <li class="label_list" id="PD">
              <div class="label_icon_show" id="PD"></div>
              <h2 class="label_title_show" id="PD">PRODUCT</h2>
            </li>
            <li class="label_list" id="GAD">
              <div class="label_icon_show" id="GAD"></div>
              <h2 class="label_title_show" id="GAD">GRAPHIC</h2>
            </li>
            <li class="label_list" id="IXD">
              <div class="label_icon_show" id="IXD"></div>
              <h2 class="label_title_show" id="IXD">INTERACTIVE</h2>
            </li>
            <li class="label_list" id="HOME">
              <div class="label_icon_show" id="HOME"></div>
              <h2 class="label_title_show" id="HOME">HOME</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="center">
      <div class="OUYANGJUN">  
        <div class="align">
          <div class="logo_name"></div>
        </div>
      </div>

      <div class="mask_background" id="fixed">
        <img class="preview_photo" id="preview_photo">
        <div class="mask"></div>
      </div>
    </div>

    <div class="display">
      <div class="display_background">
        
        <div class="label_current">
          <h2 class="label_name"></h2>
        </div>

        <ul class="display_list">
          <li class="display_frame" id="p7" list="IXD"> 
            <a href="interactive/roomze.html" class="display_link" >
              <img class="display_photo" src="img/roomze-标签.png" id="p7">
            </a>
            <div class="limit">
              <h2 class="title">Roomze</h2>
              <h2 class="year">2020</h2>
            </div>
          </li>      
          
          <li class="display_frame" id="p6" list="IXD"> 
            <a href="interactive/foodie.html" class="display_link" >
              <img class="display_photo" src="img/foodie标签-1.png" id="p6">
            </a>
            <div class="limit">
              <h2 class="title">Foodie</h2>
              <h2 class="year">2019</h2>
            </div>
          </li>

          <li class="display_frame" id="p8" list="GAD"> 
            <a href="graphic/Link.html" class="display_link" >
              <img class="display_photo" src="img/Link-标签.png" id="p8">
            </a>
            <div class="limit">
              <h2 class="title">Link & Ryugaku mon</h2>
              <h2 class="year">2019</h2>
            </div>
          </li>

          <li class="display_frame" id="p2" list="PD">
            <a href="product/Alone&Together.html"" class="display_link" >
              <img class="display_photo" src="img/独聚.png" id="p2">
            </a>
            <div class="limit">
              <h2 class="title">Alone & Together</h2>
              <h2 class="year">2017</h2>
            </div>
          </li>
          <li class="display_frame" id="p1" list="PD">
            <a href="product/Speckle.html"" class="display_link" >
              <img class="display_photo" src="img/斑.png" id="p1" list="product">
            </a>
            <div class="limit">
              <h2 class="title">斑</h2>
              <h2 class="year">2016</h2>
            </div>
          </li>
          <li class="display_frame" id="p3" list="PD">
            <a href="product/RChair.html" class="display_link" >
              <img class="display_photo" src="img/折.png" id="p3">
            </a>
            <div class="limit">
              <h2 class="title">R Chair</h2>
              <h2 class="year">2015</h2>
            </div>
          </li>
          
          <li class="display_frame" id="p4" list="PD">
            <a href="product/Shaoxi.html" class="display_link" >
              <img class="display_photo" src="img/稍息.png" id="p4">
            </a>
            <div class="limit">
              <h2 class="title">稍 息</h2>
              <h2 class="year">2015</h2>
            </div>
          </li>
          <li class="display_frame" id="p5" list="PD"> 
            <a href="product/Lotus.html" class="display_link" >
              <img class="display_photo" src="img/灯.png" id="p5">
            </a>
            <div class="limit">
              <h2 class="title">Lotus</h2>
              <h2 class="year">2014</h2>
            </div>
          </li>

          <li class="display_frame" id="p9" list="GAD"> 
            <a href="graphic/ICLOUDVILLA.html" class="display_link" >
              <img class="display_photo" src="img/ICLOUDVILLA.png" id="p9">
            </a>
            <div class="limit">
              <h2 class="title">ICLOUD VILLA</h2>
              <h2 class="year">2014</h2>
            </div>
          </li>
        
        </ul>
      </div>
    </div>
  </div>
</body>

</html>
