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
  const teamSelect = document.getElementById("select-team");

  for (const province of PROVINCES) {
    const option = document.createElement("option");
    option.value = province;
    option.text = province;
    teamSelect.appendChild(option);
  }
};
