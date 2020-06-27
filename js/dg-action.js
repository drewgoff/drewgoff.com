// Mobile Menu
(function() {
 function mobileMenu() {
   document.getElementById("dropDownMenu").classList.toggle("activeMenu");
 }

 function toggleBtn(x) {
   x.classList.toggle("change");
 }

 document.getElementById("toggle").addEventListener('click', function() {
  toggleBtn(this);
  mobileMenu();
 });
}) ();


// Modal Window
var modalBtns = Array.from(document.querySelectorAll(".otherPages"));
modalBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  }
});

var closeBtns = Array.from(document.querySelectorAll(".close-button"));
closeBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
  }
});

window.onclick = function(event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
}
