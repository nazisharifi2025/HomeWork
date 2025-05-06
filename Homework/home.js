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
com.addEventListener("click", () => {
  compiuter.classList.remove("hidden");
  mobail.classList.add("hidden");
});
menu.addEventListener("click", () => {
  block.classList.remove("hidden");
  block.classList.add("flex");
  menu.style.display = "none";
  close.style.display = "block";
  close.style.opacity = "1";
});
close.addEventListener("click", () => {
  block.classList.add("hidden");
  block.classList.remove("flex");
  menu.style.display = "block";
  close.style.display = "none";
  close.style.opacity = "0";
});
