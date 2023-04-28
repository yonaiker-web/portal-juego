document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedPassword = localStorage.getItem(username);
    if (password === storedPassword) {
      localStorage.setItem("token", username);
      window.location.href = "../../pages/home.html";
    } else {
      alert("Nombre de usuario o contraseña incorrectos");
    }
  });
});
