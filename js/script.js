const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

     // Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, digite o seu nome")
        return;
    }

    // Verificar se o e-mail está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, digite o seu e-mail")
        return;
}

    // Verificar se a senha está preenchida
    if(!validatePassword(passwordInput.value,8)){
    alert("A senha precisa de no mínimo 8 dígitos.")
        return;
    }

    // Verificar se a situaçõ foi selecionada 
    if (jobSelect.value ==="") {
        alert("POr favor, selecione a sua situação");
        return;
    }

    //Verifica se a mensagem está preenchida
    if(messageTextarea.value === "") {
        alert("Por favor, escreva uma mensagem")
    }

    // Se todos os campos estiverem corretamentes preenchidos, envie o form
    form.submit();

});

// Função qe validar e-mail
function isEmailValid(email) {
    // Criar uma regex para validar e-mail
    const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
    return true;
    }

    return false;
}

    //Função que valida a senha
    function validatePassword(password, minDigits) {
        if(password.length >=minDigits) {
            // Senha válida
            return true;
        }
        //Senha inválida
        return false;
    }