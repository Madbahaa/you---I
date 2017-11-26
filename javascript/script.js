$(document).ready(function(){
    $("#button").click(function(){
        $(".panel").slideToggle(400);
        $(".line1").toggleClass("class1");
        $(".line2").toggleClass("class2");
        $(".line3").toggleClass("class3");
    });
    $(window).resize(function(){
      if ($(this).width() > 630 ) {
        $(".panel").css("display","none");
        $(".line1").removeClass("class1");
        $(".line2").removeClass("class2");
        $(".line3").removeClass("class3");
      }
    });
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        console.log(wScroll);
        if (wScroll>10) {
          $(".nav-bar").addClass("background");
        }
        else {
          $(".nav-bar").removeClass("background");
        }
        if ($(this).width() > 630 ){
          if (wScroll>450) {
            $(".transform1").css({
              'transform': 'translate(0px,0px) ',
                'opacity':'1',

            });
            $(".transform2").css({
              'transform': 'translate(0px,0px) ',
              'opacity':'1',

            });
          }
          if(wScroll>800){
            $(".bubble1").css({"opacity":"1","transition-delay":"0.4s","transform":"translate(0,0)"});
            $(".bubble2").css({"opacity":"1","transition-delay":"0.8s","transform":"translate(0,0)"});
            $(".bubble3").css({"opacity":"1","transition-delay":"1.2s","transform":"translate(0,0)"});
          }
        }
        else {
          if (wScroll>450) {
            $(".transform1").css({
              'transform': 'translate(0px,0px) ',
                'opacity':'1',

            });
          }
          if (wScroll>900) {
            $(".transform2").css({
              'transform': 'translate(0px,0px) ',
              'opacity':'1',

            });
          }
        }

      //  console.log(wScroll);



    });
});
