(function () {
  var navToggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var yearEls = document.querySelectorAll("[data-year]");
  var y = new Date().getFullYear();
  yearEls.forEach(function (el) {
    el.textContent = String(y);
  });
})();
