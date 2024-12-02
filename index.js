const display = document.getElementById("display");
document.getElementById("1").addEventListener("click", () => {
display.textContent += "1"
document.getElementById('invis').textContent = "";
})
document.getElementById("2").addEventListener("click", () => {
display.textContent += "2"
document.getElementById('invis').textContent = "";
})
document.getElementById("3").addEventListener("click", () => {
display.textContent += "3"
document.getElementById('invis').textContent = "";
})
document.getElementById("4").addEventListener("click", () => {
display.textContent += "4"
document.getElementById('invis').textContent = "";
})
document.getElementById("5").addEventListener("click", () => {
display.textContent += "5"
document.getElementById('invis').textContent = "";
})
document.getElementById("6").addEventListener("click", () => {
document.getElementById('invis').textContent = "";
display.textContent += "6"
})
document.getElementById("7").addEventListener("click", () => {
display.textContent += "7"
document.getElementById('invis').textContent = "";
})
document.getElementById("8").addEventListener("click", () => {
display.textContent += "8"
document.getElementById('invis').textContent = "";
})
document.getElementById("9").addEventListener("click", () => {
display.textContent += "9"
document.getElementById('invis').textContent = "";
})
document.getElementById("0").addEventListener("click", () => {
display.textContent += "0"
document.getElementById('invis').textContent = "";
})
document.getElementById("add").addEventListener("click", () => {
display.textContent += "+"
document.getElementById('invis').textContent = "";
})
document.getElementById("mul").addEventListener("click", () => {
display.textContent += "*"
document.getElementById('invis').textContent = "";
})
document.getElementById("dev").addEventListener("click", () => {
display.textContent += "/"
document.getElementById('invis').textContent = "";
})
document.getElementById("sub").addEventListener("click", () => {
display.textContent += "-"
document.getElementById('invis').textContent = "";
})
document.getElementById("dot").addEventListener("click", () => {
display.textContent += "."
document.getElementById('invis').textContent = "";
})
document.getElementById("EQU").addEventListener("click", () => {
try {
display.textContent = eval(display.textContent)
document.getElementById('invis').textContent = ""
}
catch (error) {
display.textContent = ""
document.getElementById('invis').textContent = "error";
}

})
document.getElementById("RESET").addEventListener("click", () => {
display.textContent = ""
document.getElementById('invis').textContent = "?";
})
