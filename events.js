//Task 5
const hoverBox = document.getElementById("hoverBox");
const originalColor = "#ffffff";
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "#87ceeb";
  hoverBox.style.color = "#fff";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = originalColor;
  hoverBox.style.color = "";
});

//Task 6
const typeInput = document.getElementById("typeInput");
const typeOut = document.getElementById("typeOut");
typeInput.addEventListener("keyup", () => {
  typeOut.textContent = "You typed: " + typeInput.value;
});

//Task 7
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const calcOut = document.getElementById("calcOut");

function calculate(op) {
  if (num1.value === "" || num2.value === "") {
    calcOut.textContent = "Enter both numbers first.";
    return;
  }
  const a = Number(num1.value), b = Number(num2.value);
  let result;
  switch (op) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/":
      if (b === 0) { calcOut.textContent = "Cannot divide by zero."; return; }
      result = a / b;
      break;
  }
  calcOut.textContent = `Result: ${a} ${op} ${b} = ${Math.round(result * 1e8) / 1e8}`;
}
document.querySelectorAll("[data-op]").forEach((btn) =>
  btn.addEventListener("click", () => calculate(btn.dataset.op))
);
