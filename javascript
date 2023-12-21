const register_c = document.querySelector("#registration_selection_country");

register_c.addEventListener('change', (event) => {
  if (register_c.value === "Sweden") {
    show_Sweden.style.display = "block";
    show_Denmark.style.display = "none";
      }
  else if (register_c.value === "Denmark") {
    show_Sweden.style.display = "none";
    show_Denmark.style.display = "block";
      }
});
