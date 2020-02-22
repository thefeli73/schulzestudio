//toggle menu burger animation and menu
document.getElementById("menuToggle").addEventListener("mousedown", menuToggle);
function menuToggle() {
  //removes menu if disabled and brings it back if enabled
  if ($("#menu").css('display') != 'block') {
    $("#menu").css('display','block'); //enables menu
    setTimeout(function(){
      document.getElementById("menu").classList.toggle("show"); //reveals menu
    },100);
  } else {
    document.getElementById("menu").classList.toggle("show"); //hides menu
    setTimeout(function(){
      $("#menu").css('display','none'); //disables menu
    },400);
  }

  var bars = $('.bar');
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
