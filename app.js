'use strict'

        let body = document.querySelector('body')
        body.style.display= 'flex'
        body.style.flexWrap = 'wrap'
        for(let i=0; i<16; i++) {
                const newDiv = document.createElement("div");
               newDiv.style.backgroundColor = 'yellow'
               newDiv.style.width = '200px'
               newDiv.style.height = '200px'

                newDiv.textContent= 'div';
                body.appendChild(newDiv);
        }

for (let div of document.querySelectorAll('div')){
        div.onclick = (e) => e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
}

