export function createSection(character) {
  const section = document.createElement("section");
  const main = document.querySelector("main");
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
}
