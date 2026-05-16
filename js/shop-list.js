(function () {
  var root = document.querySelector("[data-shop-grid]");
  if (!root || !window.EcloireProducts) return;

  root.innerHTML = window.EcloireProducts.map(renderCard).join("");

  function renderCard(p) {
    return (
      '<article class="card-product">' +
      '<a href="product.html?id=' +
      encodeURIComponent(p.id) +
      '">' +
      '<div class="thumb"><img src="' +
      p.image +
      '" alt="" loading="lazy"></div>' +
      '<div class="meta"><h3>' +
      escapeHtml(p.name) +
      "</h3>" +
      '<p class="price">$' +
      p.price.toLocaleString("en-US") +
      "</p>" +
      "<p>" +
      escapeHtml(p.summary) +
      "</p></div></a></article>"
    );
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }
})();
