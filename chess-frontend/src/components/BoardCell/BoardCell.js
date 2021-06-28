import React from 'react';
import PropTypes from 'prop-types';
import './BoardCell.scss';
import Grid from "@material-ui/core/Grid";
import wp from '../../Assets/Pieces/setBlackWhiteMask2_13.png';


const pieceAssoc = {
    'wp': wp,

}

const BoardCell = ({value, displayNb = false, letter, piece}) => {
    if (displayNb && letter) {
        return (
            <div className="BoardCell BoardCellLetterNumber">
                <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
                {/*{letter}*/}
            </div>
        )
    }
    if (letter) {
        return (
                <div className="BoardCell BoardCellLetter">
                    <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
                    {/*{letter}*/}

                </div>
        )
    }
    else if (displayNb)
        return (
            <div className="BoardCell">
                <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
                {/*{value}*/}
            </div>
        )
    else
    return (
            <div className="BoardCell">
                <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
            </div>
    );
}

BoardCell.propTypes = {};

BoardCell.defaultProps = {};

export default BoardCell;
