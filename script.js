const Gameboard = (() => {
    let gameboard = ['','','',
                     '','','',
                     '','',''];

    const resetBoard = () => {
        gameboard.forEach((value,i) => gameboard[i] = "");
        return  gameboard;
    };
    
    const placeMark = function (position,mark) {
        if (gameboard[position] == "" && 0 <= position && position < 9) {
            gameboard[position] = mark;
        } else {
            return false;
        }
        return gameboard;
    }; 

    const getGameboard = () => gameboard.slice();

    return {getGameboard, placeMark, resetBoard};
    
})();

function Players(name, mark) {
    const getName = () => name ;
    const getMark = () => mark;

    return {getName, getMark}

};

const displayBoard = () => {
    let board = Gameboard.getGameboard();
    
    console.log(` ${board[0]} | ${board[1]} | ${board[2]} `)
    console.log('---+---+---');
    console.log(` ${board[3]} | ${board[4]} | ${board[5]} `)
    console.log('---+---+---');
    console.log(` ${board[6]} | ${board[7]} | ${board[8]} `)

};

const Controller = (() => {
    const p1 = Players("Tushar", "X");
    const p2 = Players("Adarsh", "O");
    
    const winConditions = [[0,1,2], [3,4,5], [6,7,8],
                           [0,3,6], [1,4,7], [2,5,8],
                           [0,4,8], [2,4,6]];

    let currentPlayer = p1;
    
    const playMove = function(position) {
        if (
            Gameboard.placeMark(position,currentPlayer.getMark())
        ) {
            console.clear();
            displayBoard();

            if (isWin()) {
                console.log(`${currentPlayer.getName()} with mark "${currentPlayer.getMark()}" wins!`);
            } else if (isDraw()) {
                console.log('it is draw');
            }

            if (currentPlayer == p1) {
                currentPlayer = p2;
            } else {
                currentPlayer = p1;
            }
        } else {
            console.log('The position in invalid or already taken!');
            console.log('RETRY!!');
        } 
    };

    const isWin = () => {
        let board = Gameboard.getGameboard();

        for (let conditions in winConditions) {
            const condition = winConditions[conditions];
            let a = condition[0];
            let b = condition[1];
            let c = condition[2];
            
            if ((board[a] == board[b]) && 
                (board[b] == board[c]) && 
                (board[a] !== "")) {
                return true;
            } else {
                return false;
            }
        };
    };

    const isDraw = () => {
        let board = Gameboard.getGameboard();

        for (let i = 0; i < 9; i++){
            if (board[i] == "") {
                return false;
            };
        };
        return true;
    }

    return {playMove}    
})();

// Controller.playMove(0); //p1
// Controller.playMove(2); //p2
// Controller.playMove(1); //p1
// Controller.playMove(3); //p2 
// Controller.playMove(4); //p1
// Controller.playMove(7); //p2
// Controller.playMove(5);
// Controller.playMove(8);
// Controller.playMove(6);














