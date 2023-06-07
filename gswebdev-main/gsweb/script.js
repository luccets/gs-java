alert("Seja Bem-Vindo a Green Corp!")

// declarando as variaveis do contato

let forms = document.getElementById("formsid")
let nameinput = document.getElementById("nomeid")
let telefoneinput = document.getElementById("telefoneid")
let emailinput = document.getElementById("emailid")
let msginput = document.getElementById("msgid")

// adicionando os eventos

forms.addEventListener("submit", (event) => {
    event.preventDefault();

    // verifica se o nome esta vazio 
    if (nameinput.value === "") {
        alert ("preencha seu nome");
        return;
    }

    // verifica se o telefone esta vazio 
    if (telefoneinput.value === "") {
        alert ("preencha seu telefone");
        return;
    }
    // verifica se o email esta vazio 
    if (emailinput.value === "") {
        alert ("preencha seu email");
        return;
    }
    
    // verifica se a mensagem esta vazia 
    if (msginput.value === "") {
        alert ("preencha sua mensagem");
        return;
    }
    // se estiver tudo preenchido 
    forms.submit();
    alert("Mensagem enviada")
})

//validando login para onu
function validarLogin(event) {
    event.preventDefault();
    var usuarioonu = document.getElementById("usuarioid").value;
    var senhaonu = document.getElementById("senhaid").value;

    if (usuarioonu === "Admin" && senhaonu === "123456") {
        window.location.href = "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021";
    }
}

// colocando a data e a hora no site
function DataHora() {
    var dataHoraAtual = new Date();
    var dataHoraFormatada = dataHoraAtual.toLocaleString();
    var dataHoraElemento = document.getElementById("data-hora");
    dataHoraElemento.textContent = dataHoraFormatada;
}
DataHora();
setInterval(DataHora, 1000);


// colocando o botão de dark mode 
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

// configurações do carrossel de imagens
let currentSlide = 0;
const slides = document.getElementsByClassName('slide');

function showSlide(n) {
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';
}

showSlide(currentSlide);

setInterval(function () {
    currentSlide++;
    showSlide(currentSlide);
}, 4000);