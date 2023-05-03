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
