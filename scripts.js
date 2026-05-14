const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const CONTRASEÑA_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
const NOMBRE_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{6,16}$/;
const PHONE_REGEX = /^[0-9]{6,16}$/;

// Selectores
const countries = document.querySelector("#countries");
const usernameInput= document.querySelector("#username");
const emailInput = document.querySelector("#email");
const contraseñaInput = document.querySelector("#password");
const phoneInput = document.querySelector("#phone");
const phoneCodeInput = document.querySelector("#phone-code");
const confirmContraInput =document.querySelector("#confirm-password")
const Boton = document.querySelector("#boton")
const form = document.querySelector("#form")

    console.log(countries);
    [...countries].forEach(option => {
        option.innerHTML = option.innerHTML.split("(")[0]; // Solo muestra el nombre del país, sin el código numérico
    });

// Funcion Principal
const validation = (event, valid, element) => {
            const information = event.target.parentElement.children[2];
            Boton.disabled = !usernameValid || !emailValid || !contraseñaValid || !phoneValid || !confirmContraValid || !countriesValid ? true : false;
        console.log("information", information);
        
        if (valid) {
            element.classList.add("true");
            element.classList.remove("false");
            information.classList.remove("show-information");
        } else {
            element.classList.add("false");
            element.classList.remove("true");
            information.classList.add("show-information");
        }
}
    //validaciones
    let usernameValid = false;
    let emailValid = false;
    let phoneValid = false;
    let contraseñaValid = false;
    let confirmContraValid = false;
    let countriesValid

    usernameInput.addEventListener("input", event => {
          console.log(event.target.value);
        usernameValid = NOMBRE_REGEX.test(event.target.value);
        validation(event, usernameValid, usernameInput);

    });

emailInput.addEventListener("input", event => {
    console.log(event.target.value);
    emailValid = EMAIL_REGEX.test(event.target.value);
    validation(event, emailValid, emailInput)
    
});

countries.addEventListener("input", event => {
    const optionSelected = [...event.target.children].find(option => option.selected);
    console.log(optionSelected);
    phoneCodeInput.innerHTML = `+${optionSelected.value}`
    countriesValid = optionSelected.value === "" ? false : true;
    console.log(countriesValid);
    countries.classList.add("true");
    phoneCodeInput.classList.add("true");
    validation(event,null,null);
});

phoneInput.addEventListener("input", event => {
    console.log(event.target.value);
    phoneValid = PHONE_REGEX.test(event.target.value);
 const information = event.target.parentElement.parentElement.children[2];
        console.log("information", information);
        
        if (phoneValid) {
            phoneInput.classList.add("true");
            phoneInput.classList.remove("false");
            information.classList.remove("show-information");
        } else {
            phoneInput.classList.add("false");
            phoneInput.classList.remove("true");
            information.classList.add("show-information");
        }
});

contraseñaInput.addEventListener("input", event => {
    console.log(event.target.value);
    contraseñaValid = CONTRASEÑA_REGEX.test(event.target.value);
    validation(event, contraseñaValid, contraseñaInput);
    
});

confirmContraInput.addEventListener("input", event => {
    console.log(event.target.value);
    confirmContraValid = contraseñaInput.value === event.target.value
    validation(event, confirmContraValid, confirmContraInput)
    
});

form.addEventListener("submit", event =>{
    event.preventDefault();
    const usuario = {
        Usuario: usernameInput.value,
        Email: emailInput.value,
        Contraseña: contraseñaInput.value,
        Teléfono: `${phoneCodeInput.innerHTML} ${phoneInput.value}`,
    }
    console.log(usuario)
    alert("Se ha registrado su validación correctamente!")
})