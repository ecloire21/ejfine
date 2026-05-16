(function () {
  var root = document.querySelector("[data-featured-products]");
  if (!root || !window.EcloireProducts) return;

  var ids = ["aurora-band", "lyra-pendant", "nocturne-hoops"];
  var items = ids
    .map(function (id) {
      return window.getProductById && window.getProductById(id);
    })
    .filter(Boolean);

  root.innerHTML = items
    .map(function (p) {
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
        '<p class="price">From $' +
        formatPrice(p.price) +
        "</p></div></a></article>"
      );
    })
    .join("");

  function formatPrice(n) {
    return n.toLocaleString("en-US");
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }
})();
