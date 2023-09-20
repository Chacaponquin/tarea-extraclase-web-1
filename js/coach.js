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
  const dorsalInput = document.getElementById("coach-dorsal");
  const experienceInput = document.getElementById("coach-experience");

  for (const province of PROVINCES) {
    const option = document.createElement("option");
    option.value = province;
    option.text = province;
    teamSelect.appendChild(option);
  }

  experienceInput.setAttribute("value", 1);
  dorsalInput.setAttribute("value", 1);
};
