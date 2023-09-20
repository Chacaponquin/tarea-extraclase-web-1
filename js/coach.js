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

const expression_name = /^[a-zA-ZÀ-ÿ\s]{4,50}$/;

window.onload = () => {
  const teamSelect = document.getElementById("select-team");
  const dorsalInput = document.getElementById("coach-dorsal");
  const experienceInput = document.getElementById("coach-experience");
  const nameInput = document.getElementById("input-name");
  const form_menssage = document.getElementById("form_input-error");

  const validateForm = (e) =>{
      if(expression_name.test(e.target.value)){
        nameInput.classList.remove('input-name-error');
        nameInput.classList.add('input-name');
        form_menssage.classList.remove('formulario_input-error-active');
        form_menssage.classList.add('form_input-error');
      }else{
        nameInput.classList.remove('input-name');
        nameInput.classList.add('input-name-error');
        form_menssage.classList.remove('form_input-error');
        form_menssage.classList.add('formulario_input-error-active');
      }
  };

  nameInput.addEventListener('keyup', validateForm);
  nameInput.addEventListener('blur', validateForm);

  for (const province of PROVINCES) {
    const option = document.createElement("option");
    option.value = province;
    option.text = province;
    teamSelect.appendChild(option);
  }

  experienceInput.setAttribute("value", 1);
  dorsalInput.setAttribute("value", 1);
};
