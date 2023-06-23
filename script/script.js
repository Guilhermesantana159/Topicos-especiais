// Array de frases
var frases = [
    "Venha",
    "fazer",
    "parte."
];

var index = 0;
var fraseElement = document.getElementById("frase");

function exibirProximaFrase() {
    fraseElement.textContent = frases[index];
    index = (index + 1) % frases.length;
}

// Exibe a primeira frase
exibirProximaFrase();

// Atualiza a frase a cada 3 segundos
setInterval(exibirProximaFrase, 500);