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
            Render.displayBoard();
            
            if (isWin()) {
                Render.displayBoard();
                Render.showWinner(currentPlayer.getName());
                Render.removeOverlay();
            } else if (isDraw()) {
                Render.displayBoard();
                Render.showDraw();
                Render.removeOverlay();
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
            };
        };
        return false;
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

const Render = (() => {
    const displayBoard = () => {
        let board = Gameboard.getGameboard();
        for(let i=0; i<9; i++) {
            boxes[i].textContent = board[i];
        };
    };

    const showWinner = (name) => {
        const showWin = document.getElementById('overlay');
        const winMsg = document.getElementById('overlayContent');
        winMsg.textContent = `${name} YOU WIN`;
        showWin.style.display = 'block';
    };

    const showDraw = () => {
        const drawOverlay = document.getElementById('overlay');
        const drawMsg = document.getElementById('overlayContent');
        drawMsg.textContent = "IT IS A DRAW";
        drawOverlay.style.display = 'block';
    };

    const removeOverlay = () => {
        const overlay = document.getElementById('overlay');
        overlay.addEventListener(('click'), function() {
            overlay.style.display = 'none';
            Gameboard.resetBoard();
            displayBoard();
        });
    }

    return {displayBoard, showWinner,showDraw,removeOverlay}
})();

const boxes = document.querySelectorAll('.box');
boxes.forEach((box,i) => {
    box.addEventListener("click", function() {
        Controller.playMove(i);
    });
}) 



// Controller.playMove(0); //p1
// Controller.playMove(2); //p2
// Controller.playMove(1); //p1
// Controller.playMove(3); //p2 
// Controller.playMove(4); //p1z
// Controller.playMove(7); //p2
// Controller.playMove(5);
// Controller.playMove(8);
// Controller.playMove(6);














