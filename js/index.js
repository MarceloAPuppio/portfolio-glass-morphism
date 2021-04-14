// Referenciamos elementos del DOM
const buttonDarkMode = document.getElementById("buttondarkmode");
//Detectamos si está configurado en modo Oscuro
let darkMode = window.matchMedia("(prefers-color-scheme: dark)");

darkMode.addEventListener("change", () => {
  if (darkMode.matches) {
    // buttonDarkMode.setAttribute("checked", true);
    buttonDarkMode.checked = true;
    document.body.classList.add("darkmode");
  } else {
    // buttonDarkMode.removeAttribute("checked");
    buttonDarkMode.checked = false;
    document.body.classList.remove("darkmode");
  }
});

//añadimos eventos
if (darkMode.matches) {
  buttonDarkMode.setAttribute("checked", true);
  document.body.classList.add("darkmode");
}

buttonDarkMode.addEventListener("change", () => {
  document.body.classList.toggle("darkmode");
});
