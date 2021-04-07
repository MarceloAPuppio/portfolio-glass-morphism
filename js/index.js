// Referenciamos elementos del DOM
const buttonDarkMode = document.getElementById("buttondarkmode");

//añadimos eventos

buttonDarkMode.addEventListener("change", () =>
  document.body.classList.toggle("darkmode")
);
