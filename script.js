const Gameboard = (() => {
    let gameboard = ['','','',
                     '','','',
                     '','',''];

    const resetBoard = () => {
        gameboard.forEach((value,i) => gameboard[i] = "");
        return  gameboard;
    };
    
    const placeMark = function (position,mark) {
        if (gameboard[position] == "" && (0 <= position) < 9) {
            gameboard[position] = mark;
        } else {
            throw Error('The position is either already taken or invalid!');
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
    console.log('--+--+--');
    console.log(` ${board[3]} | ${board[4]} | ${board[5]} `)
    console.log('--+--+--');
    console.log(` ${board[6]} | ${board[7]} | ${board[8]} `)
};

const Controller = (() => {
    const p1 = Players("Tushar", "X");
    const p2 = Players("Adarsh", "O");

    return {p1, p2}    
})();

