const POSITIONS = ["C", "SS", "1B", "2B", "3B", "LF", "CF", "RF", "P", "BD"];
const PROVINCES = [
  "Pinar del Rio",
  "Artemisa",
  "La Habana",
  "Mayabeque",
  "Matanzas",
  "Cienfuegos",
  "Villa Clara",
  "Camaguey",
  "Santiago de Cuba",
  "Las Tunas",
  "Granma",
  "Guantanamo",
  "Holguin",
  "Isla de la Juventud",
  "Santic Spiritus",
  "Ciego de Avila",
];

window.onload = () => {
  const teamSelect = document.getElementById("team-select");
  const posSelect = document.getElementById("position-select");
  const dorsalInput = document.getElementById("batter-dorsal");

  for (const province of PROVINCES) {
    const option = document.createElement("option");
    option.value = province;
    option.text = province;
    teamSelect.appendChild(option);
  }

  for (const position of POSITIONS) {
    const option = document.createElement("option");
    option.value = position;
    option.text = position;
    posSelect.appendChild(option);
  }

  dorsalInput.setAttribute("value", 1);
};
