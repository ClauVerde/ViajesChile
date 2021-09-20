$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#somos').click(function(){
        alert("Somos la mejor empresa de viajes")
    });

    $('#destacado').click(function(){
        alert("Comparte en los mejores lugares de Chile")
    });
    
    $('#contactos').click(function(){
        alert("Que esperas para ser parte de nosotros?")
    });
    

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 500) {
      $(".fixed-top").css("background", "transparent");
    } else {
      $(".fixed-top").css("background", "#15aabf");
    }
  });
});
