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

const expresion_name = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

window.onload = () => {
  const teamSelect = document.getElementById("select-team");
  const dorsalInput = document.getElementById("coach-dorsal");
  const experienceInput = document.getElementById("coach-experience");
  const nameInput = document.getElementById("input-name");
  const formMns = document.getElementById("form_input-error");

  const validateForm = (e) =>{
      if(expresion_name.test(e.target.value)){
        nameInput.classList.remove('input-name-error');
        nameInput.classList.add('input-name');
        formMns.classList.remove('formulario_input-error-active');
        formMns.classList.add('form_input-error');
      }else{
        console.log("AAAAA");
        nameInput.classList.remove('input-name');
        nameInput.classList.add('input-name-error');
        formMns.classList.remove('form_input-error');
        formMns.classList.add('formulario_input-error-active');
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
