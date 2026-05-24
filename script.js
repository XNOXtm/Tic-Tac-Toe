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
    let currentPlayer;

    const p1 = Players("Tushar", "X");
    const p2 = Players("Adarsh", "O");

    currentPlayer = p1;
    
    const playMove = function(position) {
        if (
            Gameboard.placeMark(position,currentPlayer.getMark())
        ) {
            console.clear()
            displayBoard();

            if (currentPlayer == p1) {
                currentPlayer = p2;
            } else {
                currentPlayer = p1;
            }
        } else {
            console.log('The position in invalid or already taken!');
            console.log('RETRY!!');
        } 
    }

    return {playMove}    
})();

Controller.playMove(0); //p1
Controller.playMove(1); //p2
Controller.playMove(8); //p1
Controller.playMove(1); //p2 Error!
Controller.playMove(2); //p2
Controller.playMove(4);
Controller.playMove(6);



//possible winning conditions 
//1. horizonals: [0,1,2]; [3,4,5]; [6,7,8]
//2. verticals: [0,3,6]; [2,4,7]; [2,5,8]
//3. diagonals: [0,4,8]; [2,4,6]









