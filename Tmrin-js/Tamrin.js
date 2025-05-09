const input = document.getElementById("input");
const btnSave = document.getElementById("btnSave");
const todo = [];
let Edettixt = -1;
btnSave.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;
  if (Edettixt === -1) {
    todo.push(value);
  } else {
    text[Edettixt] = value;
    Edettixt = -1;
  }
  input.value = "";
});
function git() {}
