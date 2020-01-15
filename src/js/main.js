document.getElementById("menuToggle").addEventListener("click", menuToggle);
function menuToggle() {
  var bars = document.getElementsByClassName('bar');
  for (var i = 0; i < bars.length; i++) {
    bars[i].classList.toggle('active');
  }
}
