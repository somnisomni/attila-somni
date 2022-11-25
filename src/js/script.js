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

  /* ==========================================================================
    Parallax cover
    ========================================================================== */
  const cover = $q(".cover");
  let coverPosition = 0;

  function parallax() {
    if(cover && cover instanceof HTMLElement) {
      const windowPosition = window.scrollY;
      coverPosition = windowPosition > 0 ? Math.floor(windowPosition * 0.25) : 0;
      cover.style.transform = `translate3d(0, ${coverPosition}px, 0)`;

      if(window.scrollY < cover.clientHeight) {
        html.classList.add("cover-active");
      } else {
        html.classList.remove("cover-active");
      }
    }
  }
  parallax();

  $ael(window, "scroll", parallax);
  $ael(window, "resize", parallax);
  $ael(window, "orientationchange", parallax);
})();

/* === Functions callable from outside === */
function launchDisqus(disqusShortname) {
  const disqusScript = document.createElement("script");
  disqusScript.src = `//${disqusShortname}.disqus.com/embed.js`;
  disqusScript.async = true;
  disqusScript.defer = true;
  document.body.append(disqusScript);
}
