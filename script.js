const options = [...document.querySelectorAll(".vertical-carousel-option")];
const CAROUSEL_TIME = 3000;

if (options.length) {
  setInterval(() => {
    const active = options.find((node) => node.classList.contains("active"));
    const prev = active.previousElementSibling || options[options.length - 1];
    const next = active.nextElementSibling || options[0];
    const nextNext = next.nextElementSibling || options[0];

    active.classList.add("prev");
    next.classList.add("active");
    nextNext.classList.add("next");

    prev.classList.remove("prev");
    active.classList.remove("active");
    next.classList.remove("next");
  }, CAROUSEL_TIME);
}

const mode = document.querySelector(".mode");
mode.addEventListener("click", handleMode);

function handleMode(e) {
  document.body.classList.toggle("dark");
  e.target.innerText = e.target.innerText === "Light" ? "Dark" : "Light";
}
