!function(){function t(){document.getElementById("dropDownMenu").classList.toggle("activeMenu")}function e(t){t.classList.toggle("change")}document.getElementById("toggle").addEventListener("click",function(){e(this),t()})}();var modalBtns=Array.from(document.querySelectorAll(".otherPages"));modalBtns.forEach(function(t){t.onclick=function(){var e=t.getAttribute("data-modal");document.getElementById(e).style.display="block"}});var closeBtns=Array.from(document.querySelectorAll(".close-button"));closeBtns.forEach(function(t){t.onclick=function(){var e;t.closest(".modal").style.display="none"}}),window.onclick=function(t){"modal"===t.target.className&&(t.target.style.display="none")};