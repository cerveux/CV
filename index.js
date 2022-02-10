"use strict"
var fixedCard = $(".info").offset().top;   //consigue la posición inicial de la cards

var nacimiento = new Date("1985/05/03");
var difEdad = Date.now() - nacimiento.getTime();        //a la fecha de hoy le resta la fecha del nacimiento
var difFecha = new Date(difEdad);                   //a la diferencia en milisegundos la convierte de un valor numérico a un formato de fecha
var resultado = Math.abs(difFecha.getUTCFullYear() - 1970);  //getUTCFullYear convierte la fecha en años y después le restamos 1970 que es desde donde empieza a contar el sistema
$(".edadAutomatica").text(resultado + " Años");
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
