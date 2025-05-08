const divs = document.getElementById("divs");
const clickbtn = document.getElementById("clickbtn");
const input = document.getElementById("input");
const todo = [];
let editIndex = -1;
clickbtn.addEventListener("click", () => {
  const value = input.value.trime();
  if (value === "") return;
  if (editBtn === -1) {
    todo.push(value);
  } else {
    todo[editBtn] = value;
    editBtn = -1;
  }
  input.value = "";
});
function renderTodos() {
  divs.classList.remove("hidden");
  divs.classList.add("flex");
  divs.innerHTML = "";
  todo.forEach((item, index) => {
    const h1 = document.createEvent("h1");
    h1.classList.add("h1-js");
    h1.textContent = item;

    const edeitbtn = document.createElement("butten");
    edeitbtn.textContent = "✏️ Edit";
    edeitbtn.classList.add("btn");
    edeitbtn.addEventListener("click", () => {
      input.value = item;
      editIndex = index;
    });
    const deldtbtn = document.createElement("butten");
    deldtbtn.textContent = "🗑️ Delete";
    deldtbtn.classList.add("btn2");
    deldtbtn.addEventListener("click", () => {
      todo.splice(index, 1);
      renderTodos();
    });
    const contener = document.createElement("div");
    container.style.marginBottom = "10px";
    contener.appendChild(edeitbtn);
    contener.appendChild(deldtbtn);
    contener.appendChild(h1);
    divs.appendChild(contener);
  });
}
