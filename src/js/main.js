//toggle menu burger animation
document.getElementById("menuToggle").addEventListener("click", menuToggle);
function menuToggle() {
  var bars = document.getElementsByClassName('bar');
  for (var i = 0; i < bars.length; i++) {
    bars[i].classList.toggle('active');
  }
}

//toggle nav backgroundcolor
window.addEventListener('scroll', function() {
  if (window.pageYOffset == 0) {
    document.getElementById("nav").classList.remove('scrolled');
  } else {
    document.getElementById("nav").classList.add('scrolled');
  }
});
