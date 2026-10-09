//Task 2 
const text = document.getElementById("text");
const original = text.textContent;
document.getElementById("changeTextBtn").addEventListener("click", () => {
  text.textContent = "The text was changed with JavaScript! ✨";
});
document.getElementById("resetTextBtn").addEventListener("click", () => {
  text.textContent = original;
});

//Task 3 
const box = document.getElementById("styleBox");
const colors = ["#e8f6fd", "#ffd6e7", "#fff3b0", "#d4f5d0", "#e3d4ff", "#ffe0c2"];
const sizes = ["16px", "20px", "26px", "32px"];
let c = 0, s = 0;
document.getElementById("colorBtn").addEventListener("click", () => {
  c = (c + 1) % colors.length;
  box.style.backgroundColor = colors[c];
});
document.getElementById("sizeBtn").addEventListener("click", () => {
  s = (s + 1) % sizes.length;
  box.style.fontSize = sizes[s];
});

//Task 4
const list = document.getElementById("itemList");
const emptyMsg = document.getElementById("emptyMsg");
let counter = 0;
function updateEmpty() {
  emptyMsg.style.display = list.children.length ? "none" : "block";
}
document.getElementById("addItemBtn").addEventListener("click", () => {
  counter++;
  const li = document.createElement("li");
  li.textContent = "Item " + counter;
  list.appendChild(li);
  updateEmpty();
});
document.getElementById("removeItemBtn").addEventListener("click", () => {
  if (list.lastElementChild) list.removeChild(list.lastElementChild);
  updateEmpty();
});
