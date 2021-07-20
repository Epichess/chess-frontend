import './Board.scss';
import React, {useState, useEffect, useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import GameRow from "./BoardRow/GameRow";
import { GameContext } from '../../Context/gameContext';

export default function Board() {
    const [oldMove, setOldMove] = useState([]);
    const [currentMove, setCurrentMove] = useState([]);
    const [resetIsClicked, setResetIsClicked] = useState(false);
    const [moveErr, setMoveErr] = useState(false);

    const gameContext = useContext(GameContext)
    
    useEffect(() => console.log(gameContext.exists), [])

    useEffect(() => {
        console.log('current move: ', currentMove);
    }, [currentMove])

    useEffect(() => {
        console.log('old move: ', oldMove);
    }, [oldMove])

    const receiveChildValue = (value) => {
        if (currentMove.length === 0) {
            console.log('received from child: ', value);
            setCurrentMove([value])
        }
        else if (currentMove.length === 1 && currentMove[0] !== value || moveErr === true) {
            if (moveErr === true) {
                setMoveErr(false);
                setCurrentMove([value]);
                return;
            }
            const ApiRes = 'ok';
            if (ApiRes === 'ok') {
                console.log('server said OK');
                setOldMove([...currentMove, value]);
                setCurrentMove([]);
            }
            else {
                console.log('server said KO');
                //afficher des background en rouge
                setMoveErr(true);
            }

        }
        else if (currentMove[0] === value) {
            setCurrentMove([]);
        }
        else
            setCurrentMove([currentMove[0], value]);
    }

    return (
        <Grid className="Board">
            <GameRow value={8} sentValueToParent={receiveChildValue} currentMove={currentMove} oldMove={oldMove} moveErr={moveErr}/>
            <GameRow value={7} sentValueToParent={receiveChildValue} currentMove={currentMove} oldMove={oldMove} moveErr={moveErr}/>
            <GameRow value={6} sentValueToParent={receiveChildValue} currentMove={currentMove} oldMove={oldMove} moveErr={moveErr}/>
            <GameRow value={5} sentValueToParent={receiveChildValue} currentMove={currentMove} oldMove={oldMove} moveErr={moveErr}/>
            <GameRow value={4} sentValueToParent={receiveChildValue} currentMove={currentMove} oldMove={oldMove} moveErr={moveErr}/>
            <GameRow value={3} sentValueToParent={receiveChildValue} currentMove={currentMove} oldMove={oldMove} moveErr={moveErr}/>
            <GameRow value={2} sentValueToParent={receiveChildValue} currentMove={currentMove} oldMove={oldMove} moveErr={moveErr}/>
            <GameRow value={1} sentValueToParent={receiveChildValue} displayLetter={true} currentMove={currentMove} oldMove={oldMove} moveErr={moveErr}/>
        </Grid>
    );
}

const Boarde = () => {
    const initialBoard = [
        // a utiliser avec h8 comme coordonnées
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