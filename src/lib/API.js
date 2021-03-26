export function getCharacter() {
  const url = "https://rickandmortyapi.com/api/character/";
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
        const section = document.createElement("section");
        section.classList.add("character");
        const main = document.querySelector("main");
        const fullName = document.createElement("h2");
        fullName.classList.add("fullName");
        fullName.textContent = `${character.name}`;
        const img = document.createElement("img");
        img.classList.add("img");
        img.src = character.image;
        img.alt = `$(character.name)`;

        section.append(fullName);
        section.append(img);
        main.append(section);
      })
    );
}
