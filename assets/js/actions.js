function info() {
  let div = document.getElementById("nuevoboton");
  div.innerHTML = "<div><button id='b1'>Nuevo Botón</button></div>";
}

//muestra la info sobre el juego
function activar2() {
  const token = localStorage.getItem("token");
  if (token) {
    let div = document.getElementById("nuevoboton");

    div.innerHTML = `  <h2 class="text-start mb-4">Bienvenido</h2>
            <p class="lead">
              Has iniciado sesión como <span id="username"> ${token}</span>
            </p>`;
  } else {
    window.location.href = "../index.html";
  }
}

//cerra sesion
function logout() {
  //preguntamos si desea cerra sesion
  const opction = confirm("Desea cerrar sesion?");
  //si la respuesta es si destruimos el token y redirigimos
  if (opction) {
    localStorage.removeItem("token");
    window.location.href = "../../index.html";
  }
}
