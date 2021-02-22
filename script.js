$(document).ready(function() {

$('body').scrollspy({ 
  target: '#main-nav',
  offset: 60
});

    $(".navbar a").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
  
  $('.navbar a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  
  
  });