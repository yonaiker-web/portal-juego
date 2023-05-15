//muestra la info sobre el juego
function activar2() {
  const token = localStorage.getItem("token");
  if (token) {
    let div = document.getElementById("nuevoboton");

    div.innerHTML = `              
            <h2 class="text-start mb-4">Bienvenido</h2>
            <p class="lead">
              Has iniciado sesión como <span id="username"> ${token}</span>
            </p>
                  `;
                  window.location.href = "../pages/pacman.html";         
            
  } else {
    window.location.href = "../index.html";
  }
}
