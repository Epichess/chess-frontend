import React from 'react';
import PropTypes from 'prop-types';
import './GameRow.scss';
import Grid from "@material-ui/core/Grid";
import BoardCell from "../BoardCell/BoardCell";

const initBlackFirstRow = () => {
    return  [
        'br',
        'bn',
        'bb',
        'bq',
        'bk',
        'bb',
        'bn',
        'br'
    ];
}

const initBlackSecondRow = () => {
    return  [
        'bp',
        'bp',
        'bp',
        'bp',
        'bp',
        'bp',
        'bp',
        'bp'
    ];
}

const initWhiteFirstRow = () => {
    return  [
        'wr',
        'wn',
        'wb',
        'wq',
        'wk',
        'wb',
        'wn',
        'wr'
    ];
}

const initWhiteSecondRow = () => {
    return  [
        'wp',
        'wp',
        'wp',
        'wp',
        'wp',
        'wp',
        'wp',
        'wp'
    ];
}

const initBlack = (value) => {return (value === 8 ? initBlackFirstRow() : initBlackSecondRow())}
const initWhite = (value) => {return (value === 1 ? initWhiteFirstRow() : initWhiteSecondRow())}
const initEmpty = () => ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty',];

const initBoard = (value) => {

    if (value === 8 || value === 7) {
        console.log('initblack:',value);
        return initBlack(value);
    }
    else if (value === 1 || value === 2) {
        console.log('initwhite:',value);
        return initWhite(value);
    }
    else
        return initEmpty();
}

const GameRow = ({value, displayLetter = false}) => {

    const pieces = initBoard(value);

    const letters = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
    ]

    console.log(pieces);
    if (displayLetter) {
        return (
            <Grid className="GameRow" container justify="center"  style={{"flexWrap": "nowrap"}}>
                {pieces.map((myPiece, i) =>
                    <BoardCell value={value} key={i} letter={letters[i]} piece={myPiece} displayNb={i === 0}/>
                )}
            </Grid>
        )
    }
    else
        return (
            <Grid className="GameRow" container justify="center"  style={{"flexWrap": "nowrap"}}>
                {pieces.map((myPiece, i) =>
                    <BoardCell value={value} key={i} piece={myPiece} displayNb={i === 0}/>
                )}
            </Grid>
        )
};

GameRow.propTypes = {};

GameRow.defaultProps = {};

export default GameRow;
