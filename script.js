const formOne = document.getElementById('form-one');
const formTwo = document.getElementById('form-two');
const formThree = document.getElementById('form-three');

const nextOne = document.getElementById('next-one');
const nextTwo = document.getElementById('next-two');
const backOne = document.getElementById('back-one');
const backTwo = document.getElementById('back-two');
const progress = document.getElementById('progress');

nextOne.onclick = function(){
    formOne.style.left = '-450px';
    formTwo.style.left = '40px';
    progress.style.width = '240px'
}
backOne.onclick = function(){
    formOne.style.left = '40px';
    formTwo.style.left = '450px';
    progress.style.width = '120px'
}
nextTwo.onclick = function(){
    // formTwo.style.left = '-450px';
    // formThree.style.left = '40px';
    formThree.style.justifyContent = 'center'
    formThree.style.alignItems= 'center'
    progress.style.width = '360px'
}
backTwo.onclick = function(){
    formTwo.style.left = '40px';
    formThree.style.left = '450px';
    progress.style.width = '240px'
}