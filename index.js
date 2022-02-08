var fixedCard = $(".info").offset().top;   //consigue la posición inicial de la cards

$(window).scroll(function(){               //scroll listener

  var posActual = $(window).scrollTop();  //consigue la posición actual de la cards

  if (posActual >= fixedCard){
    $(".info").css({
      position: "sticky",
      top: "1%"
      // left: "60%",
      // width: "20.5%"
    });
  }else{
    $(".info").css({
      position: "static"
    });
  }


});
