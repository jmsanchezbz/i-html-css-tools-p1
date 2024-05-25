const name = "Queen";
console.log(`Hello ${name}`);

window.applyActiveClassToMenuElement = applyActiveClassToMenuElement;

export function applyActiveClassToMenuElement(name) {
  const menuLinks = document.querySelectorAll(".menu .ulist__link");

  menuLinks.forEach((e) => {
    if (e.getAttribute("data-info").includes(name)) {
      e.parentNode.classList.add("ulist__element--active");
      return;
    }
  });
}

export function loadYoutubeSong(event) {
  const yt_link = "https://www.youtube-nocookie.com/embed/";

  const iframe = document.querySelector("iframe.video--fluid");
  const li = event.target.closest("li");
  const videocode = li.getAttribute("data-info");

  iframe.src = yt_link + videocode;
}

export function addListenersToSongs() {
  const lis = document.querySelectorAll(".songs-list ol>li>a");
  lis.forEach((e) => {
    e.addEventListener("click", loadYoutubeSong);
  });
}

window.addListenersToSongs = addListenersToSongs;

export function restartAnimation() {
  const svgElement = document.querySelector("#svgLetters");

  const parent = svgElement.parentElement;
  parent.replaceChild(svgElement, svgElement);
}

window.restartAnimation = restartAnimation;

setInterval(restartAnimation, 8000);