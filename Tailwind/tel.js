const menu = document.getElementById("menu");
const close = document.getElementById("close");
const nav = document.getElementById("nav");
menu.addEventListener("click", () => {
  nav.classList.remove("hidden");
  nav.classList.add("flex");
  close.classList.remove("hidden");
});
close.addEventListener("click", () => {
  nav.classList.remove("flex");
  nav.classList.add("hidden");
  close.classList.add("hidden");
});
// text
const text = ["Online", "Offline", "nazi "];
let index = 0;
setInterval(() => {
  document.getElementById("text").textContent = text[index];
  index = (index + 1) % text.length;
}, 2000);
// type
const texts = "Announcing our next round of funding. Read more →";
let a = 0;
function type() {
  if (a < texts.length) {
    document.getElementById("mat").textContent += texts.charAt(a);
    a++;
    setTimeout(type, 150);
  }
}
type();
