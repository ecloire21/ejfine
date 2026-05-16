(function () {
  var roots = document.querySelectorAll("[data-featured-products]");
  if (!roots.length || !window.EcloireProducts) return;

  // Product merchandising: lets each homepage section choose its own edited order.
  roots.forEach(function (root) {
    var ids = (root.getAttribute("data-product-edit") || "aurora-band,lyra-pendant,nocturne-hoops")
      .split(",")
      .map(function (id) {
        return id.trim();
      })
      .filter(Boolean);

    var items = ids
      .map(function (id) {
        return window.getProductById && window.getProductById(id);
      })
      .filter(Boolean);

    root.innerHTML = items
      .map(function (p, index) {
        return renderCard(p, index);
      })
      .join("");
  });

  function renderCard(p, index) {
    var badge = index === 0 ? "Best seller" : "Ecloire edit";
    return (
      '<article class="card-product">' +
      '<a href="product.html?id=' +
      encodeURIComponent(p.id) +
      '" aria-label="View ' +
      escapeHtml(p.name) +
      '">' +
      '<div class="thumb"><span class="product-badge">' +
      badge +
      '</span><img src="' +
      p.image +
      '" alt="" loading="lazy"></div>' +
      '<div class="meta"><h3>' +
      escapeHtml(p.name) +
      "</h3>" +
      '<p class="summary">' +
      escapeHtml(p.summary) +
      "</p>" +
      '<div class="product-foot"><span class="price">$' +
      formatPrice(p.price) +
      '</span><span class="material">' +
      escapeHtml(p.metal) +
      "</span></div></div></a></article>"
    );
  }

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
