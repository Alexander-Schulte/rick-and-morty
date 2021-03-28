import { createSection } from "./character";

export function getCharacter() {
  const filterDrop = document.querySelector(".header__filter");
  const status = filterDrop.value;
  let url = createUrlFrom(status);

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.status);
      }
    })
    .then((dataObject) =>
      dataObject.results.forEach((character) => {
        createSection(character);
      })
    );
}

function createUrlFrom(status) {
  let url;
  const baseUrl = "https://rickandmortyapi.com/api/character/";
  const inputName = document.querySelector(".header__search-form");
  const searchName = inputName.value;
  if (status == "Alive") {
    url = `${baseUrl}?name=${searchName}&status=alive`;
  } else if (status == "Dead") {
    url = `${baseUrl}?name=${searchName}&status=dead`;
  } else if (status == "Unknown") {
    url = `${baseUrl}?name=${searchName}&status=unknown`;
  } else if (status == "All") {
    url = `${baseUrl}?name=${searchName}`;
  }
  return url;
}

export function clearcharacters() {
  const characterSection = document.querySelectorAll("section");
  characterSection.forEach((section) => section.remove());
}
