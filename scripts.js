const GameBoard = (() => {
    const row = 3;
    const column = 3;
    const gameBoard = [];
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    //create a 2d array
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            gameBoard[i] = [];
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            gameBoard[i][j] = `${i}${j}`; //assign position of gameboard element
            const field = document.createElement('div');
            field.setAttribute('id', `${gameBoard[i][j]}`);
            container.appendChild(field);
        }
    }
    document.body.appendChild(container);
    return {gameBoard};
})();
/*
const DisplayController = (() => {

})();

const Player = (symbol, type, turn) => {
    
};

*/