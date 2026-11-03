(function () {
  "use strict";

  var root = document.documentElement;

  /* ── Theme toggle: auto → dark → light → auto ──────────────── */
  var themeBtn = document.getElementById("theme-toggle");
  var order = ["auto", "dark", "light"];

  function getTheme() {
    try { return localStorage.getItem("theme") || "auto"; } catch (e) { return "auto"; }
  }
  function applyTheme(t) {
    if (t === "auto") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", t);
    try {
      if (t === "auto") localStorage.removeItem("theme");
      else localStorage.setItem("theme", t);
    } catch (e) {}
    if (themeBtn) themeBtn.textContent = "[" + t + "]";
  }
  function cycleTheme() {
    var next = order[(order.indexOf(getTheme()) + 1) % order.length];
    applyTheme(next);
  }
  applyTheme(getTheme());
  if (themeBtn) themeBtn.addEventListener("click", cycleTheme);

  /* ── Mobile menu ───────────────────────────────────────────── */
  var menuBtn = document.getElementById("menu-toggle");
  var menu = document.getElementById("site-menu");
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.textContent = open ? "[close]" : "[menu]";
    });
  }

  /* ── Keyboard shortcuts: 1–9 nav, t theme ──────────────────── */
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;

    if (e.key === "t") { cycleTheme(); return; }
    if (/^[1-9]$/.test(e.key)) {
      var link = document.querySelector('.menu-item[data-key="' + e.key + '"]');
      if (link) window.location.href = link.href;
    }
  });

  /* ── Typewriter tagline on the home page ───────────────────── */
  var tagline = document.querySelector(".hero-tagline[data-type]");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (tagline && !reduce) {
    var text = tagline.getAttribute("data-type");
    var i = 0;
    tagline.textContent = "";
    (function type() {
      tagline.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(type, 28 + Math.random() * 40);
    })();
  }

  /* ── Blog "grep" filter ────────────────────────────────────── */
  var grep = document.getElementById("grep-input");
  if (grep) {
    var items = document.querySelectorAll(".filterable li");
    var groups = document.querySelectorAll(".year-group");
    var empty = document.querySelector(".no-results");
    grep.addEventListener("input", function () {
      var q = grep.value.trim().toLowerCase();
      var shown = 0;
      items.forEach(function (li) {
        var hit = !q || li.getAttribute("data-search").indexOf(q) !== -1;
        li.hidden = !hit;
        if (hit) shown++;
      });
      groups.forEach(function (g) {
        g.hidden = !g.querySelector("li:not([hidden])");
      });
      if (empty) empty.hidden = shown !== 0;
    });
  }

  /* ── Project tag filter ────────────────────────────────────── */
  var filterBtns = document.querySelectorAll(".tag-filter [data-filter]");
  if (filterBtns.length) {
    var projects = document.querySelectorAll(".project");
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        filterBtns.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle("btn-primary", on);
          b.classList.toggle("btn-default", !on);
          b.classList.toggle("btn-ghost", !on);
        });
        projects.forEach(function (p) {
          var tags = (p.getAttribute("data-tags") || "").split(" ");
          p.classList.toggle("is-hidden", f !== "*" && tags.indexOf(f) === -1);
        });
      });
    });
  }
})();
