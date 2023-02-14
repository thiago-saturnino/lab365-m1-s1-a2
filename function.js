//EXERCICIO [M1S02]EXERCICIO 2
//EXERCICIO [M1S02]EXERCICIO 3

let user = {
  username: "",
  password: "",
};
let usuarioCorreto = {
  username: "correto",
  senha: "1234",
};

//let login = document.getElementById("login");
let username = document.getElementById("username");
let password = document.getElementById("password");

const handleChangeUsername = (event) => {
  user.username = event.target.value;
};
const handleChangePassword = (event) => {
  user.password = event.target.value;
};

//login.addEventListener("click", clicou);
username.addEventListener("change", handleChangeUsername);
password.addEventListener("change", handleChangePassword);

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clicou();
});

function clicou() {
  const usuarioCorreto = JSON.parse(localStorage.getItem("usuarioCorreto"));

  //    alert(
  //        `o usuário que você digitou é ${user.username} e a senha é: ${user.password}`
  //    );

  //    if (
  //       user.username == usuarioCorreto.username &&
  //        user.password == usuarioCorreto.senha
  //   )
  if (
    user.username == usuarioCorreto.username &&
    user.password == usuarioCorreto.senha
  ) {
    alert("Você está logado!");
    location.href = "./loginin.html";
  } else {
    alert("Credenciais incorretas");
  }
}

window.onload = () => {
  localStorage.setItem("usuarioCorreto", JSON.stringify(usuarioCorreto));
};

//---------------------------------------------------------------------
//EXERCICIO [M1S02] EX6 TABUADA

function geradorDeTabuada() {
  let numero = window.prompt("digite o número para gerar a tabuada:");
  let cont = 1;
  while (cont < 11) {
    console.log(numero + " x " + cont + " = " + numero * cont);
    cont++;
  }
}
geradorDeTabuada();

//---------------------------------------------------------------------
//EXERCICIO [M1S02] PADARIA TECH

function padariaTech() {
  let unidade = Number(document.getElementById("valor").value).toFixed(2);
  let resposta = document.getElementById("resposta");
  let precoPao = "";
  for (let i = 1; i < 51; i++) {
    precoPao += i + " pães = R$" + unidade * i + "</br>";
    resposta.innerHTML = precoPao;
  }
}

//---------------------------------------------------------------------
//EXERCICIO [M1S02] CRONOMETRO

let number = 11;
let tempo;

function iniciar() {
  tempo = setInterval(cronometro, 1000);
}

function cronometro() {
  var contagemEmTela = document.getElementById("contador");
  if (number == 0) {
    clearInterval(tempo);
    contagemEmTela.innerHTML = "Seu tempo acabou!! Tente novamente!!";
  } else {
    number--;
    contagemEmTela.innerHTML = "tempo restante: " + number;
  }
}

function resetar() {
  number = 10;
  iniciar();
}

//---------------------------------------------------------------------
//EXERCICIO [M1S02]EXERCICIO 4

localStorage.setItem("username", "Walberson");

username = localStorage.getItem("username");
console.log(username);

localStorage.removeItem("username");
console.log(username);

localStorage.setItem("username", "Thiago");
console.log(username);

localStorage.setItem("email", "walberson@walberson.com.br");

let useremail = localStorage.getItem("email");
console.log(useremail);

localStorage.removeItem("email");
console.log(useremail);

localStorage.setItem("useremail", "thiago@thiago.com.br");
console.log(useremail);

localStorage.setItem("url", "https://www.google.com");

let userurl = localStorage.getItem("url");
console.log(userurl);

localStorage.removeItem("email");
console.log(userurl);

localStorage.setItem(
  "useremail",
  "https://trello.com/b/ZC9fZ7Ug/thiago-farias"
);
console.log(userurl);

//---------------------------------------------------------------------
//EXERCICIO [M1S02]EXERCICIO 8
let valor;
let total = 0;
let saudacao = "Padaria Tech Plus";

console.log(saudacao);

console.log(`Valor do Produto: R$ ${valor}`);

while (valor != 0) {
  let proxValor = prompt("Digite o próximo valor ou 0 para parar");
  let price = parseFloat(proxValor);

  if (price === 0) {
    break;
  }
  total += price;
  console.log(`Produto: R$ ${price}`);
}

alert("Total: R$ " + total.toFixed(2));
console.log(`Total: R$ ${total.toFixed(2)}`);

while (true) {
  let proxValor = prompt("Dinheiro fornecido:");
  let paid = parseFloat(proxValor);

  if (isNaN(paid)) {
    alert("Valor inválido. Tente novamente.");
    console.log(`O valor recebido foi: R$ ${paid}`);
    continue;
  }

  if (paid < total) {
    alert("O dinheiro fornecido é insuficiente.");
    continue;
  }

  let change = paid - total;
  alert("Troco: R$ " + change.toFixed(2));
  console.log(`O valor recebido foi: R$ ${paid.toFixed(2)}`);
  console.log(`Troco: R$ ${change.toFixed(2)}`);
  break;
}
