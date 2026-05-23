const Gameboard = (() => {
    let gameboard = ['','','',
                     '','','',
                     '','',''];

    return {gameboard};
    
})();

function Players(name, mark) {
    const getName = () => name ;
    const getMark = () => mark;

    return {getName, getMark}

};


const Controller = (() => {
    const p1 = Players("Tushar", "X");
    const p2 = Players("Adarsh", "O");

    
    return {p1, p2}
    
})();

let board = Gameboard.gameboard[0] = "O";

console.log(Gameboard.gameboard)
