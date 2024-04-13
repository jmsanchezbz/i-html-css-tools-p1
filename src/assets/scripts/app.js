const name = "Queen";
console.log(`Hello ${name}`);

const applyActiveClassToMenuElement = (href) => {
  console.log("executing...");
  const menuLinks = document.querySelectorAll(".menu .ulist__link");

  menuLinks.forEach((e) => {
    if (e.getAttribute("href").includes(href)) {
      e.parentNode.classList.add("ulist__element--active");
      return;
    }
  });
};
