const mob = document.getElementById("mob");
const com = document.getElementById("com");
const compiuter = document.getElementById("Cumpioter");
const mobail = document.getElementById("Mobail");
const block = document.getElementById("block");
const menu = document.getElementById("menu");
const close = document.getElementById("close");
mob.addEventListener("click", () => {
  mobail.classList.remove("hidden");
  compiuter.classList.add("hidden");
});
