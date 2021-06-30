import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './GameRow.scss';
import Grid from "@material-ui/core/Grid";
import BoardCell from "../BoardCell/BoardCell";

const GameRow = ({value, displayLetter = false, sentValueToParent, resetIsClicked = false}) => {
    const receiveChildValue = (value) => {
        console.log("Parent received value from child: " + value); // value is 42
        sentValueToParent(value);
    };

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
            return initBlack(value);
        }
        else if (value === 1 || value === 2) {
            return initWhite(value);
        }
        else
            return initEmpty();
    }

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
        return (
            <Grid className="GameRow" container justify="center"  style={{"flexWrap": "nowrap"}}>
                {pieces.map((myPiece, i) =>
                    <BoardCell value={value} key={i} letter={letters[i]} piece={myPiece} displayNb={i === 0} sentValueToParent={receiveChildValue} resetIsClicked={resetIsClicked}/>
                )}
            </Grid>
        )
};

GameRow.propTypes = {};

GameRow.defaultProps = {};

export default GameRow;
