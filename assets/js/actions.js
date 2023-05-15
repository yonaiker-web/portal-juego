//muestra la info sobre el juego
function activar2() {
  const token = localStorage.getItem("token");
  if (token) {
    window.location.href = "../pages/pacman.html";
  } else {
    window.location.href = "../index.html";
  }
}
