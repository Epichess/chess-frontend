import './Board.scss';
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import GameRow from "./BoardRow/GameRow";

export default function Board() {
    const [oldMove, setOldMove] = useState([]);
    const [currentMove, setCurrentMove] = useState([]);
    const [resetIsClicked, setResetIsClicked] = useState(false);

    const receiveChildValue = (value) => {
        console.log("Super Parent received value from child: " + value);
        if (currentMove.length === 0) {
            console.log("setCurrentMove(value);");
            setCurrentMove(value);
            console.log("setResetIsClicked(false);");
            setResetIsClicked(false);
        }
        else {
            if (currentMove[0] !== value[0]) {
                currentMove[1].style = '';
                console.log("setResetIsClicked(true);");
                setResetIsClicked(true);
                console.log('not same values');
            }
            else
                console.log("setResetIsClicked(false);");
                setResetIsClicked(false);
            console.log("setCurrentMove(value);");
            setCurrentMove(value);
        }
    }

    return (
        <Grid className="Board">
            <GameRow value={8} sentValueToParent={receiveChildValue} resetIsClicked={resetIsClicked}/>
            <GameRow value={7} sentValueToParent={receiveChildValue} resetIsClicked={resetIsClicked}/>
            <GameRow value={6} sentValueToParent={receiveChildValue} resetIsClicked={resetIsClicked}/>
            <GameRow value={5} sentValueToParent={receiveChildValue} resetIsClicked={resetIsClicked}/>
            <GameRow value={4} sentValueToParent={receiveChildValue} resetIsClicked={resetIsClicked}/>
            <GameRow value={3} sentValueToParent={receiveChildValue} resetIsClicked={resetIsClicked}/>
            <GameRow value={2} sentValueToParent={receiveChildValue} resetIsClicked={resetIsClicked}/>
            <GameRow value={1} sentValueToParent={receiveChildValue} resetIsClicked={resetIsClicked} displayLetter={true}/>
        </Grid>
    );
}

const Boarde = () => {
    const initialBoard = [
        // starting square, piece type, owner, id
        [0, 'Rook', 'black', 'br1'],
        [1, 'Knight', 'black', 'bh1'],
        [2, 'Bishop', 'black', 'bb1'],
        [3, 'Queen', 'black', 'bq1'],
        [4, 'King', 'black', 'bh1'],
        [5, 'Bishop', 'black', 'bb2'],
        [6, 'Knight', 'black', 'bk2'],
        [7, 'Rook', 'black', 'br2'],
        [8, 'Pawn', 'black', 'bp1'],
        [9, 'Pawn', 'black', 'bp2'],
        [10, 'Pawn', 'black', 'bp3'],
        [11, 'Pawn', 'black', 'bp4'],
        [12, 'Pawn', 'black', 'bp5'],
        [13, 'Pawn', 'black', 'bp6'],
        [14, 'Pawn', 'black', 'bp7'],
        [15, 'Pawn', 'black', 'bp8'],
        [48, 'Pawn', 'white', 'wp1'],
        [49, 'Pawn', 'white', 'wp2'],
        [50, 'Pawn', 'white', 'wp3'],
        [51, 'Pawn', 'white', 'wp4'],
        [52, 'Pawn', 'white', 'wp5'],
        [53, 'Pawn', 'white', 'wp6'],
        [54, 'Pawn', 'white', 'wp7'],
        [55, 'Pawn', 'white', 'wp8'],
        [56, 'Rook', 'white', 'wr1'],
        [57, 'Knight', 'white', 'wh1'],
        [58, 'Bishop', 'white', 'wb1'],
        [59, 'Queen', 'white', 'wq1'],
        [60, 'King', 'white', 'wk1'],
        [61, 'Bishop', 'white', 'wb2'],
        [62, 'Knight', 'white', 'wh2'],
        [63, 'Rook', 'white', 'wr2'],
    ]
    return (
        <div className='Board'>
            Board Component
        </div>
    );
}

export {Board};