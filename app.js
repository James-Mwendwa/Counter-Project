const counter = document.getElementById('number');
const incr = document.querySelector('#increment');
const decr = document.querySelector('#decrement');
const reset = document.querySelector('#reset')

let count = 0;

incr.addEventListener("click", () =>{
    count++;
    counter.innerHTML = count;
});

decr.addEventListener("click", () =>{
    count--;
    counter.innerHTML = count;
});

reset.addEventListener("click", () => {
    count = 0;
    counter.innerHTML = count;
})