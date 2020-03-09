"use strict";

const board = document.querySelector('.board');
const columns = 8;
const rows = 8;
const spalva1 = '#fff';
const spalva2 = '#000';
let color = '';

let HTMLas = '';
// board.innerHTML = HTMLas;

for (let y=1; y <= rows; y++) {
    HTMLas += `<div class="row"
                 style="height: calc(100% / ${rows});">`;
    for (let x = 1; x <=columns; x++){
     if((x+y)%2 === 0){
        color = spalva1;
     }else{
        color = spalva2;
     }
     HTMLas += `<div class="cell" 
                    style="background-color:${color};
                    width: calc(100% / ${columns});">${x}:${y}
            </div>`;
    }
    HTMLas += `</div>`;
}

board.innerHTML = HTMLas;
board.style.borderColor = `blue`;

