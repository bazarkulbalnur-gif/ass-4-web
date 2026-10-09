//Task 0 
console.log("Name: Bazarkul Balnur");
console.log("Group: SE-2529");

const hello = () => alert("Hello, JavaScript World!");
hello();
document.getElementById("helloBtn").addEventListener("click", hello);

//Task 1 
function runVariables() {
  const firstName = "Balnur";   // string
  const age = 19;                // number
  const isStudent = true;        // boolean
  const a = 12, b = 5;

  const lines = [
    `Types: ${typeof firstName}, ${typeof age}, ${typeof isStudent}`,
    `${a} + ${b} = ${a + b}`,
    `${a} - ${b} = ${a - b}`,
    `${a} * ${b} = ${a * b}`,
    `${a} / ${b} = ${a / b}`,
    `${a} % ${b} = ${a % b}`,
    "Concatenation: " + "Hello, " + firstName + "! You are " + age + ".",
  ];
  lines.forEach((l) => console.log(l));
  document.getElementById("varsOut").textContent = lines.join("\n");
}
document.getElementById("varsBtn").addEventListener("click", runVariables);
runVariables();
