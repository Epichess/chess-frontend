import React from 'react';
import PropTypes from 'prop-types';
import './BoardCell.scss';
import Grid from "@material-ui/core/Grid";
import wp from '../../../Assets/Pieces/wp.svg';
import wr from '../../../Assets/Pieces/wr.svg';
import wn from '../../../Assets/Pieces/wn.svg';
import wb from '../../../Assets/Pieces/wb.svg';
import wq from '../../../Assets/Pieces/wq.svg';
import wk from '../../../Assets/Pieces/wk.svg';
import bp from '../../../Assets/Pieces/bp.svg';
import br from '../../../Assets/Pieces/br.svg';
import bn from '../../../Assets/Pieces/bn.svg';
import bb from '../../../Assets/Pieces/bb.svg';
import bq from '../../../Assets/Pieces/bq.svg';
import bk from '../../../Assets/Pieces/bk.svg';

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
