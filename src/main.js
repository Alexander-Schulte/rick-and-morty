import { getCharacter } from "./lib/API";

const button = document.querySelector(".header__search-button");
button.innerHTML = "Show Characters!";

function clearcharacters() {
  const section = document.querySelectorAll("section");
  section.forEach((section) => section.remove());
}

button.addEventListener("click", () => {
  clearcharacters();

  if (button.innerHTML === "Show Characters!") {
    getCharacter();
    button.innerHTML = "Characters loaded!";
  } else {
    button.innerHTML = "Show Characters!";
  }
});
