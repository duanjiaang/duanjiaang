let txt01 = document.getElementById('txt01');
let btn01 = document.getElementById('btn01');
let div01 = document.getElementById('div01');

txt01.addEventListener('keyup', function () {
    div01.innerHTML = txt01.value;
});

btn01.addEventListener('click', function () {
    alert(txt01.value);
});