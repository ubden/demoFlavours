// Nav
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });

// Google Map
function initMap() {
  const loc = { lat: 42.361145, lng: -71.057083 };
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Animate on scroll
const animateHTML = function() {
  let elems,
      windowHeight
  
  let init = function() {
    elems = document.getElementsByClassName("hidden");
    windowHeight = window.innerHeight;
    _addEventHandlers();
  }
  
  const _addEventHandlers = function() {
      window.addEventListener("scroll", _checkPosition);
      window.addEventListener("resize", init)
  }
  const _checkPosition = function() {
    for ( let i = 0; i < elems.length; i++ ) {
      let posFromTop = elems[i].getBoundingClientRect().top;
      if ( posFromTop - windowHeight <= 0) { 
        elems[i].className = elems[i].className.replace( "hidden", "fade-in");
      }
    }    
  }
  return {
    init: init
  }
}
animateHTML().init();