const GMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const CONTRASEÑA_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
const NOMBRE_REGEX = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
const TELEFONO_REGEX = /^[0-9]{6,16}$/g;

// Selectores
const countries = document.querySelector("#countries");
const usernameInput = document.querySelector("#username");
    console.log(countries);
    [...countries].forEach(option => {
        option.innerHTML = option.innerHTML.split("(")[0]; // Solo muestra el nombre del país, sin el código numérico
    });

    //validaciones
    let usernameValid = false;

    usernameInput.addEventListener("input", event => {
          console.log(event.target.value);
        usernameValid = NOMBRE_REGEX.test(event.target.value);
        if (usernameValid) {
            usernameInput.classList.add("true");
        } else {
            usernameInput.classList.add("false");
        }
    });

    