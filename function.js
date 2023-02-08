console.log("hello world");
var user = {
  username: "",
  password: "",
};

const handleChange = (event) => {
  console.log(event.target.listener);
};
let login = document.getElementById("login");
let username = document.getElementById("username");
let password = document.getElementById("password");

const handleChangeUserName = (event) => {
  user.username.value;
};
const handleChangePassword = (event) => {
  user.password.value;
};

username.addEventListener("change", handleChangeUserName);
password.addEventListener("change", handleChangePassword);

function clicou() {
  alert(`o usuario é: ${user.username} e a senha é ${user.password}`);
}

login.addEventListener("click", clicou);
