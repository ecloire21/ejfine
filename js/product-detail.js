(function () {
  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");
  var container = document.querySelector("[data-pdp]");
  if (!container || !window.getProductById) return;

  var p = window.getProductById(id);
  if (!p) {
    container.innerHTML =
      '<div class="not-found wrap"><h1>Piece not found</h1><p>This item is not in the catalog preview.</p><p><a class="btn btn-primary" href="shop.html">Back to shop</a></p></div>';
    return;
  }

  document.title = p.name + " | Ecloire";

  container.innerHTML =
    '<div class="wrap pdp">' +
    '<div class="pdp-gallery"><img src="' +
    escapeAttr(p.image) +
    '" alt="' +
    escapeAttr(p.name) +
    '"></div>' +
    '<div class="pdp-detail">' +
    "<h1>" +
    escapeHtml(p.name) +
    "</h1>" +
    '<p class="price">$' +
    p.price.toLocaleString("en-US") +
    "</p>" +
    "<p>" +
    escapeHtml(p.description) +
    "</p>" +
    "<h2>Details</h2>" +
    "<p><strong>Metal:</strong> " +
    escapeHtml(p.metal) +
    "</p>" +
    "<p><strong>Stones:</strong> " +
    escapeHtml(p.stones) +
    "</p>" +
    '<p class="note">USA shipping only. Final checkout and tax will be confirmed at purchase. ' +
    'See <a href="shipping-returns.html">Shipping &amp; Returns</a> for our 7-day return policy.</p>' +
    '<p><a class="btn btn-ghost" href="shop.html">Continue shopping</a></p>' +
    "</div></div>";

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(s) {
    return escapeHtml(s).replace(/'/g, "&#39;");
  }
})();
