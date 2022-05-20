'use strict'

document.addEventListener('DOMContentLoaded', () =>{
    // pegando todos das as classes square e dando um evento click em cada um
    let squares = document.querySelectorAll(".square")
   // vare cada elemento e gera um handClick que será tratado 
    squares.forEach((square) =>{
        square.addEventListener('click', handClick)
    })
})

     
function handClick(event) {
    // target, elemento que recebe o evento e coloca dentro de square
    let square = event.target;
    console.log(square)
    let postion = square.id;// pegamos o ID e chamamos de position

    if (handleMove(postion)){// depois passamos o handleMove para a outra pagina, o game.js

        setTimeout(() => {
            alert('Fim de jogo!')
        }, 100);
    }
    // depois essa função vai chamar o handle move e vai pega as possições que passamos na condição do game.js
    updateSquare();
}


function updateSquare(){
    // fazemos o update pegando mais uma vez todos os elementos e cada posiçao da tabela
    let squares = document.querySelectorAll(".square")
 
    squares.forEach((square) => {
        // pegamos todos os simbolos que foram pegos na pagina jogo.js 
        let position = square.id
        let symbols = border[position]

        if(symbols !== ''){
            square.innerHTML = `<div class= '${symbols}'><div/>`
        }
    })
}

