// Año automático en el pie de página
document.querySelectorAll("[data-year]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Menú móvil
(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (!btn || !nav) return;

  function cerrar() {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Abrir menú");
  }

  btn.addEventListener("click", function () {
    var abierto = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(abierto));
    btn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  });
  nav.addEventListener("click", function (e) { if (e.target.tagName === "A") cerrar(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") cerrar(); });
})();
