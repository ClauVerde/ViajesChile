document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        $('html,body').animate({
            'scrollTop': $($(this).attr('href')).offset().top+'px'
        }, 3000);
        

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




$(function () {
    $('[data-toggle="tooltip"]').tooltip();

});

      


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
      $(".fixed-top").css("background", "transparent");
    } else {
      $(".fixed-top").css("background", "#15aabf");
    }
});

