

const gameController = ((name1, name2) => {
    let round = 1;

    const createPlayer = (name, sign, codeSign) => {
        let score = 0;
        return {name, sign, codeSign, score}
    };

    const createBoard = () => {
        const board = [];
        let i=0;
        while (i<9) {
            board.push("");
            i++;
        };
        return board
    };

    const playround = (indexBox) => {
        console.log(indexBox);
        let sign;
        let codeSign;
        if (round%2 === 1) {
            sign = player1.sign;
            codeSign = player1.codeSign;
        } else {
            sign = player2.sign;
            codeSign = player2.codeSign;
        }
        console.log("round numéro", round);
        console.log(sign);
        console.log(codeSign);
        round++;

    };

    const fillBoard = (pos, player) => {
        board[pos] = player.sign;
    };



    const board = createBoard();
    const player1 = createPlayer(name1, "X", '<i class="fa-solid fa-x"></i>');
    const player2 = createPlayer(name2, "O", '<i class="fa-regular fa-circle"></i>');
    return {player1, player2, playround} ;
})();

const displayController = (() => {
    const boxes = [...document.getElementsByClassName('box')];
    
    boxes.forEach( box => {
        box.addEventListener('click', function(event) {
            let indexBox = boxes.indexOf(box);
            gameController.playround(indexBox);

            writeSign(box);
            event.stopPropagation();

        } )
        
    });

    const writeSign = box => {
        


        box.innerHTML = gameController.player1.codeSign;
    };

})();






/*
document.getElementById('test').addEventListener('click', function(event) {
    event.stopPropagation();
    
    document.getElementById('game').classList.add('gameboard-invible');
    setTimeout(function() {
        document.getElementById(elt).remove();
    },2000);
 
})

*/
















/* Footer */
const year = document.getElementById('current-year');
year.innerHTML = new Date().getFullYear();
