// Chris Loewer
// Add simple parallax to an element


function setScrollSpeed(element, speedMultiplier) {
  var ticking = false;
  var lastScrollY = 0;
  doScroll();

  function updatePosition() {
    var translateValue = lastScrollY * speedMultiplier;

    if (translateValue < 0) {
      translateValue = 0;
    }

    ticking = false;

    var translate = 'translate3d(0px, -' + translateValue + 'px, 0px)';
    element.style['-webkit-transform'] = translate;
    element.style['-moz-transform'] = translate;
    element.style['-ms-transform'] = translate;
    element.style['-o-transform'] = translate;
    element.style.transform = translate;
  }

  function doScroll() {
    lastScrollY = window.pageYOffset;

    if (!ticking) {
      window.requestAnimationFrame(updatePosition);
      ticking = true;
    }
  }

  window.addEventListener('scroll', doScroll, false);
}

window.addEventListener('load', function () {
  var background = document.getElementById('parallax');
  setScrollSpeed(background, 0.5);
});
