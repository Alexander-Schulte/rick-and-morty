import { getCharacter } from "./lib/API";
import { clearcharacters } from "./lib/API";

const button = document.querySelector(".header__search-button");
button.innerHTML = "Show Characters!";

button.addEventListener("click", () => {
  clearcharacters();
  getCharacter();
});
