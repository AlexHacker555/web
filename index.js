let count = 1;
let v = document.getElementById("adder");
let ch1 = document.getElementById("Counter");
ch1.textContent = count;
v.value = 1;
document.getElementById("plus").addEventListener('click', () => {
    count += +v.value;
    ch1.textContent = count;
})
document.getElementById("minus").addEventListener('click', () => {
    count -= +v.value;
    ch1.textContent = count;
})
document.getElementById("mult").addEventListener('click', () => {
    count *= +v.value;
    ch1.textContent = count;
})
document.getElementById("devide").addEventListener('click', () => {
    if (!+v.value == 0){
        count /= +v.value;
        ch1.textContent = count;
    }
})
document.getElementById("reset").addEventListener("click", () => {
    v.value = 1;
    count = 1;
    ch1.textContent = count;
})