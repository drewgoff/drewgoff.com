document.getElementById("toggle").addEventListener("click",(function(){this.classList.toggle("change"),document.getElementById("dropDownMenu").classList.toggle("activeMenu")}));var modalBtns=Array.from(document.querySelectorAll(".otherPages"));modalBtns.forEach((function(t){t.onclick=function(){var e=t.getAttribute("data-modal");document.getElementById(e).style.display="block"}}));var closeBtns=Array.from(document.querySelectorAll(".close-button"));closeBtns.forEach((function(t){t.onclick=function(){t.closest(".modal").style.display="none"}})),window.onclick=function(t){"modal"===t.target.className&&(t.target.style.display="none")};