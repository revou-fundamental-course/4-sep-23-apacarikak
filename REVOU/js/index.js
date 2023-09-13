var nilaiSisi = document.getElementById('nilaiSisi');
var hitung = document.getElementById('hitung');
var output = document.getElementById('output');
var output1 = document.getElementById('output1');
var angkaSisi = document.getElementById('angkaSisi');
var hitung1 = document.getElementById('hitung1');
var reset = document.querySelector('reset');
var input = document.querySelector('input');
let currentInput = '';
let currentOperator = '';
let resultDisplayed = false;

hitung.addEventListener('click', function(){
    let s = parseFloat(nilaiSisi.value)
    let k = 4*s
    output.innerHTML = `Keliling Persegi dari sisi ${s} cm adalah ${k} cm`
})

hitung1.addEventListener('click', function(){
    let s = parseFloat(angkaSisi.value)
    let luas = s*s
    output1.innerHTML = `Luas Persegi dari sisi ${s} cm adalah ${luas} cm`
})

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    resultDisplayed = false;
    document.getElementById('nilaiSisi').value = '';
}

function clearDisplay1() {
    currentInput = '';
    currentOperator = '';
    resultDisplayed = false;
    document.getElementById('angkaSisi').value = '';
}