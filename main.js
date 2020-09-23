let name = prompt("Coloque o seu nome");

document.getElementById("user").innerHTML = "Olá, " + name;

let test = prompt("Quer iniciar o teste?\nResponda sim para iniciar ou não para fechar a página.");

let question1 = prompt("O que é CSS?\na- Linguagem de marcação\nb- Folha de estilo\nc- Linguagem de programação");

if (question1 == "b") {
    document.getElementById("question1").innerHTML = "Questão 1";
}

let question2 = prompt("O que "2"+1+5 retorna?\na- 8\nb- "2"+6\nc- 215?");
