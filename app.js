'use strict'

const box1 = document.querySelector('.box1')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

btn1.addEventListener('click', changeBg)
btn2.addEventListener('click', randBg)

let src = ['https://www.basketnews.lt/paveikslelis-149601-tmlg.jpg',
    'https://www.basketnews.lt/paveikslelis-112282-tmlg.jpg',
    'https://www.basketnews.lt/paveikslelis-3649-tmlg.jpg',
    'https://www.basketnews.lt/paveikslelis-3823-tmlg.jpg',
    'https://www.basketnews.lt/paveikslelis-92361-tmlg.jpg',
    'https://www.basketnews.lt/paveikslelis-3781-tmlg.jpg',
    'https://www.basketnews.lt/paveikslelis-197268-tmlg.jpg',
    'https://www.basketnews.lt/paveikslelis-324262-tmlg.jpg',
    'https://www.basketnews.lt/paveikslelis-29660-tmlg.jpg',]

let images = []

function changeBg() {
    btn1.disabled=true;

    for (let i = 0; i < 9; i++) {
        const img = document.createElement("img");
        img.style.width = '150px'
        img.style.height = '150px'
        img.src = src[i]
        box1.appendChild(img);
        images.push(img);
    }


for (let img of document.querySelectorAll('img')){
    img.ondblclick = (e) =>
        e.target.src='https://www.basketnews.lt/paveikslelis-3704-tmlg.jpg'
}}


function randBg() {
   box1.innerHTML = "";
    const array=images;
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    for (let item of shuffledArray) {
        box1.appendChild(item);
    }
}

