export function getCharacter() {
  let url;
  const filter = document.querySelector(".header__filter");
  const status = filter.value;
  const inputName = document.querySelector(".header__search-form");
  const searchName = inputName.value;

  if (status == "Alive") {
    url = `https://rickandmortyapi.com/api/character?name=${searchName}&status=alive`;
  } else if (status == "Dead") {
    url = `https://rickandmortyapi.com/api/character?name=${searchName}&status=dead`;
  } else if (status == "Unknown") {
    url = `https://rickandmortyapi.com/api/character?name=${searchName}&status=unknown`;
  } else if (status == "All") {
    url = `https://rickandmortyapi.com/api/character?name=${searchName}`;
  }

  console.log(url);

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
        const main = document.querySelector("main");
        const section = document.createElement("section");
        section.classList.add("character");
        const fullName = document.createElement("h2");
        fullName.classList.add("fullName");
        fullName.textContent = `${character.name}`;
        const img = document.createElement("img");
        img.classList.add("img");
        img.src = character.image;
        img.alt = `$(character.name)`;

        if (character.status === "Alive") {
          section.style.backgroundColor = "var(--section-alive-color)";
        } else if (character.status === "Dead") {
          section.style.backgroundColor = "var(--section-dead-color)";
        } else if (character.status === "unknown") {
          section.style.backgroundColor = "var(--section-unknown-color)";
        }

        section.append(fullName);
        section.append(img);
        main.append(section);
      })
    );
}

export function clearcharacters() {
  const characterSection = document.querySelectorAll("section");
  characterSection.forEach((section) => section.remove());
}
