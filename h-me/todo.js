const divs = document.getElementById("divs");
const clickbtn = document.getElementById("clickbtn");
const input = document.getElementById("input");
const todo = [];
let editIndex = -1;

clickbtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;

  if (editIndex === -1) {
    todo.push(value);
  } else {
    todo[editIndex] = value;
    editIndex = -1;
  }

  input.value = "";
  renderTodos();
});

function renderTodos() {
  divs.classList.remove("hidden");
  divs.classList.add("flex");
  divs.innerHTML = "";

  todo.forEach((item, index) => {
    const h1 = document.createElement("h1");
    h1.classList.add("h1-js");
    h1.textContent = item;

    // دکمه ویرایش
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️ Edit";
    editBtn.classList.add("btn");
    editBtn.addEventListener("click", () => {
      input.value = item;
      editIndex = index;
    });

    // دکمه حذف
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️ Delete";
    deleteBtn.classList.add("btn2");
    deleteBtn.addEventListener("click", () => {
      todo.splice(index, 1);
      renderTodos(); // بازسازی لیست بعد از حذف
    });

    // ایجاد container برای هر آیتم
    const container = document.createElement("div");
    container.style.marginBottom = "10px";
    container.appendChild(h1);
    container.appendChild(editBtn);
    container.appendChild(deleteBtn);

    // اضافه کردن container به divs
    divs.appendChild(container);
  });
}
