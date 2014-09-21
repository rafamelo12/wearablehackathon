$(function() {
  setupHeader();
  initializeVenueMap();

  $("nav ul li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 300, function(){
      window.location.hash = hash;
    });

    $('.navbar-collapse').removeClass('in');
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

function initializeVenueMap() {
  var position = new google.maps.LatLng(43.662182, -79.38037);

  var mapOptions = {
    center: position,
    zoom: 17,
    scrollwheel: false
  };
  var map = new google.maps.Map(document.getElementById("venue-map"), mapOptions);

  var marker = new google.maps.Marker({
    position: position,
    map: map,
    title: 'MATTAMY ATHLETIC CENTRE'
  });
}
