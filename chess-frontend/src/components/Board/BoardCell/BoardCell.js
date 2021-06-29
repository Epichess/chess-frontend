import React from 'react';
import PropTypes from 'prop-types';
import './BoardCell.scss';
import Grid from "@material-ui/core/Grid";
import wp from '../../../Assets/Pieces/whitePawn.png';
import wr from '../../../Assets/Pieces/whiteRook.png';
import wn from '../../../Assets/Pieces/whiteKnight.png';
import wb from '../../../Assets/Pieces/whiteBishop.png';
import wq from '../../../Assets/Pieces/whiteQueen.png';
import wk from '../../../Assets/Pieces/whiteKing.png';
import bp from '../../../Assets/Pieces/blackPawn.png';
import br from '../../../Assets/Pieces/blackRook.png';
import bn from '../../../Assets/Pieces/blackKnight.png';
import bb from '../../../Assets/Pieces/blackBishop.png';
import bq from '../../../Assets/Pieces/blackQueen.png';
import bk from '../../../Assets/Pieces/blackKing.png';

const pieceAssoc = {
    'wp': wp,
    'wr': wr,
    'wn': wn,
    'wb': wb,
    'wq': wq,
    'wk': wk,
    'bp': bp,
    'br': br,
    'bn': bn,
    'bb': bb,
    'bq': bq,
    'bk': bk,
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
