// const h1 = document.getElementById("h1");
const butten = document.getElementById("butten");
const input = document.getElementById("input");
const div = document.getElementById("div");
const messege = document.getElementById("mis");
const close = document.getElementById("close");
const todo = ["Dinner", "Lunch", "Breakfast"];
let index = 0;
function shoingCotes(arr) {
  setInterval(() => {
    div.innerHTML = "";
    const h1 = document.createElement("h1");
    const text = document.createTextNode(arr[index]);
    h1.appendChild(text);
    div.appendChild(h1);
    index = (index + 1) % arr.length;
  }, 3000);
}
shoingCotes(todo);
let todolist = [];
butten.addEventListener("click", () => {
  console.log("hi");
  if (input.value !== "") {
    todolist.push(input.value);
    input.value = "";
    messege.classList.remove("hidden");
    setTimeout(() => {
      messege.classList.add("hidden");
    }, 3000);
    close.addEventListener("click", () => {
      messege.classList.add("hidden");
    });
  }
});
const ShowBtn = document.getElementById("ShowBtn");
const buttenshow = document.getElementById("buttenshow");
ShowBtn.addEventListener("click", () => {
  buttenshow.innerHTML = "";
  for (let item of todolist) {
    const div = document.createElement("div");
    div.classList.add("hStyle");
    const h1 = document.createElement("h1");
    const text = document.createTextNode(item);
    h1.appendChild(text);
    buttenshow.appendChild(div);
    div.appendChild(h1);
  }
});
