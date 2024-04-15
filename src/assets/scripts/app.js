const name = "Queen";
console.log(`Hello ${name}`);

module.exports = {
  scopeHoist: false,
};

window.applyActiveClassToMenuElement = applyActiveClassToMenuElement

export function applyActiveClassToMenuElement(href) {
  const menuLinks = document.querySelectorAll(".menu .ulist__link");

  menuLinks.forEach((e) => {
    if (e.getAttribute("href").includes(href)) {
      e.parentNode.classList.add("ulist__element--active");
      return;
    }
  });
};

export function loadYoutubeSong(event) {
  const yt_link = "https://www.youtube-nocookie.com/embed/";

  const iframe = document.querySelector("iframe.video--fluid");
  const li = event.target.closest("li");
  const videocode = li.getAttribute("data-info");

  iframe.src = yt_link + videocode;
};

export function addListenersToSongs() {
  const lis = document.querySelectorAll(".songs-list ol>li>a");
  lis.forEach((e) => {
    e.addEventListener("click", loadYoutubeSong);
  });
};

window.addListenersToSongs = addListenersToSongs