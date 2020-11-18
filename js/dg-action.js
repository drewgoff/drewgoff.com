// Stopping transition animation until page loads
(() => {
 document.addEventListener("DOMContentLoaded", () => {
   const node = document.querySelector('.preload-transitions');
   node.classList.remove('preload-transitions');
});
})();

// Mobile Menu
(() => {
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
})();

// Modal Window
(() => {
const modalBtns = Array.from(document.querySelectorAll(".otherPages"));
modalBtns.forEach(btn => {
  btn.onclick = function() {
    const modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
    document.querySelector("body").style.overflow = 'hidden';
  }
});

const closeBtns = Array.from(document.querySelectorAll(".close-button"));
closeBtns.forEach(btn => {
  btn.onclick = function() {
    let modal = btn.closest('.modal');
    modal.style.display = "none";
    document.querySelector("body").style.overflow = 'visible';
  }
});

window.onclick = function(event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
}
})();
