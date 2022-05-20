//iniciar as variaveis

let border = ['', '', '', '', '', '', '', '', '']

let player = 0
// como começamos no 0 a posição inicial será o depois o x
let symbols = ['o', 'x']

let gameOver = false

// handleMove vai pega a possição que passamos no border e depois vai colocar o simbolo do jogador da vez
function handleMove(position) {

    if (gameOver) {
        return
    }
    if (border[position] == '') {
        border[position] = symbols[player]

        gameOver = win()

        if(gameOver == false ){
    
                if (player == 0) {// depois mudamos a vez do jogador
                    player = 1
                } else {
                    player = 0
                }
            }
            return gameOver
        }
        
    }

    


function win() {

    let insWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 5, 8],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < insWin.length; i++) {
        let seq = insWin[i];

        let post1 = seq[0]
        let post2 = seq[1]
        let post3 = seq[2]

        if (border[post1] == border[post2] &&
            border[post1] == border[post3]&& 
            border[post1] != '') {
            return true
        }
    }
    return false
}