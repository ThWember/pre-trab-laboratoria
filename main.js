let name = prompt("Coloque o seu nome");

document.getElementById("user").innerHTML = "OLÁ, " + name;

let test = prompt("Quer iniciar o teste?\nResponda sim para iniciar ou não para fechar a página.");

if (test == "não") {
    window.close()
}

/*if (test =! "sim"||"não") {
    alert ("Usar apenas letras minúsculas");
    test = prompt("Quer iniciar o teste?\nResponda sim para iniciar ou não para fechar a página.");
}*/

let question1 = prompt("1. O que é CSS?\na- Linguagem de marcação\nb- Folha de estilo\nc- Linguagem de programação");

if (question1 == "b") {
    document.getElementById("question1-correct").innerHTML = "Questão 1";
} else {
    document.getElementById("question1-wrong").innerHTML = "Questão 1";
}

let question2 = prompt("2. O que '2+1+5 retorna?\na- 8\nb- '2'+6\nc- 215?");

if (question1 == "c") {
    document.getElementById("question2-correct").innerHTML = "Questão 2";
} else {
    document.getElementById("question2-wrong").innerHTML = "Questão 2";
}

let question3 = prompt("3. Qual dos seguintes elementos não possui tag de fechamento?\na- img\nb- p\nc- h")

if (question1 == "a") {
    document.getElementById("question3-correct").innerHTML = "Questão 3";
} else {
    document.getElementById("question3-wrong").innerHTML = "Questão 3";
}
