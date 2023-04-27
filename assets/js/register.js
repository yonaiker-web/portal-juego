document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    localStorage.setItem(username, password);
    alert("Usuario registrado con éxito!");
    window.location.href = "login.html";
  });
