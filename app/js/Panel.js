$('.close-button').click(function (e) {
    $('.pop-up').fadeOut(700);
    $('#overlay').removeClass('blur-in');
    $('#overlay').addClass('blur-out');
    e.stopPropagation();
    });