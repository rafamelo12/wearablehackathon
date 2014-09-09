$(function() {
  setupHeader();

  $("nav ul li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 300, function(){
      window.location.hash = hash;
    });
  });
});

$(window).resize(function() {
  setupHeader();
});

function setupHeader() {
  var header = $('#home center');
  header.css('position', 'relative');
  header.css('top', $(window).height()*0.5-header.height()*0.5);
}
