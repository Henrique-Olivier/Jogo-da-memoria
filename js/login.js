const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const form = document.querySelector('.login_form')


//Funcao para validar o input e habilitar o botão
const ValidateInput = ({target}) => {
   if (target.value.length > 2 ) {
    button.removeAttribute("disabled");
    return;
   } 

    button.setAttribute('disabled' , '');
}

//Botão para logar
const HandleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'
}


input.addEventListener('input', ValidateInput);
form.addEventListener('submit', HandleSubmit);

