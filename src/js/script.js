(() => {
  "use strict";

  const html = document.documentElement;
  const $q = (query = "") => document.querySelector(query);
  const $qa = (query = "") => document.querySelectorAll(query);
  const $ael = (queryOrEventTarget, event, handler, queryAll = false) => {
    if(queryOrEventTarget) {
      if(typeof queryOrEventTarget === "string") {
        const query = queryOrEventTarget;

        if(queryAll) {
          const qa = $qa(query);
          if(qa && qa.length > 0) {
            qa.forEach((e) => {
              e.addEventListener(event, handler);
            });
          }
        } else {
          const q = $q(query);
          if(q) {
            q.addEventListener(event, handler);
          }
        }
      } else if(queryOrEventTarget instanceof EventTarget) {
        const eventTarget = queryOrEventTarget;
        eventTarget.addEventListener(event, handler);
      }
    }
  }

  /* ==========================================================================
    Menu
    ========================================================================== */

  function menu() {
    html.classList.toggle("menu-active");
  }

  function deactivateMenu() {
    html.classList.remove("menu-active");
  }

  $ael("#menu", "click", menu);
  $ael(".nav-menu", "click", menu);
  $ael(".nav-close", "click", menu);

  $ael(window, "resize", deactivateMenu);
  $ael(window, "orientationchange", deactivateMenu);

  /* ==========================================================================
    Gallery
    ========================================================================== */

  function gallery() {
    $qa(".kg-gallery-image img").forEach(function(image) {
      const container = image.closest(".kg-gallery-image");
      const width = image.attributes.width.value;
      const height = image.attributes.height.value;
      const ratio = width / height;
      container.style.flex = `${ratio} 1 0%`;
    });
  }
  gallery();

  /* ==========================================================================
    Theme
    ========================================================================== */

  function theme() {
    const toggle = $q(".js-theme");
    const toggleText = toggle.querySelector(".theme-text");

    function set(type = "system") {
      if(type === "dark") {
        html.classList.remove("theme-light");
        html.classList.add("theme-dark");
        localStorage.setItem("attila_theme", "dark");
        toggleText.innerText = toggle.dataset.dark;
      } else if(type === "light") {
        html.classList.remove("theme-dark");
        html.classList.add("theme-light");
        localStorage.setItem("attila_theme", "light");
        toggleText.innerText = toggle.dataset.light;
      } else {
        html.classList.remove("theme-dark", "theme-light");
        localStorage.removeItem("attila_theme");
        toggleText.innerText = toggle.dataset.system;
      }
    }

    switch(localStorage.getItem("attila_theme")) {
      case "dark":
        set("dark");
        break;
      case "light":
        set("light");
        break;
      default:
        set();
        break;
    }

    toggle.addEventListener("click", (e) => {
      e.preventDefault();

      if(!html.classList.contains("theme-dark") &&
        !html.classList.contains("theme-light")) {
        set("dark");
      } else if(html.classList.contains("theme-dark")) {
        set("light");
      } else {
        set();
      }
    });
  }
  theme();
})();


jQuery(function($) {
  var html = $('html');
  var viewport = $(window);

/* ==========================================================================
   Parallax cover
   ========================================================================== */

  var cover = $('.cover');
  var coverPosition = 0;

  function prlx() {
    if (cover.length >= 1) {
      var windowPosition = viewport.scrollTop();
      (windowPosition > 0) ? coverPosition = Math.floor(windowPosition * 0.25): coverPosition = 0;
      cover.css({
        '-webkit-transform': 'translate3d(0, ' + coverPosition + 'px, 0)',
        'transform': 'translate3d(0, ' + coverPosition + 'px, 0)'
      });
      (viewport.scrollTop() < cover.height()) ? html.addClass('cover-active'): html.removeClass('cover-active');
    }
  }
  prlx();

  viewport.on({
    'scroll': function() {
      prlx();
    },
    'resize': function() {
      prlx();
    },
    'orientationchange': function() {
      prlx();
    }
  });
});
