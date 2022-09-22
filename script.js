

const gameController = ((name1, name2) => {
    let round = 1;

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const createPlayer = (name, sign, codeSign) => {
        let score = 0;
        let choice = [];
        return {name, sign, codeSign, score, choice}
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
        console.log(board[indexBox]==="");
        if (board[indexBox]==="") {
            let player = round%2 ===1 ? playerX : playerO;
            let codeSign = storeChoice(indexBox, player);
            let winner = isWinner(player.choice)
            round++;
            let nextPlayer = round%2 ===1 ? playerX : playerO;
            console.log({codeSign, winner, nextPlayer})
            return {codeSign, winner, nextPlayer};
        } else {
            return false;
        }

    };

    const storeChoice = (index, player) => {
        board[index]=player.sign;
        player.choice.push(index);
        return player.codeSign;
    };

    const isWinner = choice => {
        let flag = false;
        winConditions.forEach( win => {
            if (win.every( pos => choice.includes(pos))) {
                isOn = false;
                flag = true;
            };
        });
        return flag;
    };


    const board = createBoard();
    const playerX = createPlayer("Florent", "X", '<i class="fa-solid fa-x"></i>');
    const playerO = createPlayer("Computer", "O", '<i class="fa-regular fa-circle"></i>');
    return {playerX, playerO, playround} ;
})();

const displayController = (() => {

    const boxes = [...document.getElementsByClassName('box')];

    const infoMsg = document.getElementById('message');
    infoMsg.innerText = "Let's go X Player !"

    let isListen = true;
    
    boxes.forEach( box => {
        box.addEventListener('click', function(event) {
            if (isListen) {
                let resultRound = gameController.playround(boxes.indexOf(box));
                if (resultRound) {
                    writeSign(box, resultRound.codeSign);
                    writeMsg(resultRound.nextPlayer.sign);
                    if (resultRound.winner) {
                        endGame(resultRound.codeSign);
                        isListen = false;
                    }
                    event.stopPropagation();
                }
            }
        })
    });








    const writeSign = (box, codeSign) => {
        box.innerHTML = codeSign;
    };

    const writeMsg = (sign) => {
        infoMsg.innerText = `Your turn ${sign} Player !`;
    };



    const endGame = (sign) => {
        infoMsg.innerHTML = `The Winner is  ${sign} ! <br> Press F5 to play again !`;
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
