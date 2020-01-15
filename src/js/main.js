//toggle menu burger animation and menu
document.getElementById("menuToggle").addEventListener("mousedown", menuToggle);
function menuToggle() {
  document.getElementById("menu").classList.toggle("show"); //shows menu
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
