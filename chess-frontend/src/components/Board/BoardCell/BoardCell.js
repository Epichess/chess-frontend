import React, {useState} from 'react';
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

const BoardCell = ({value, displayNb = false, letter, dispLetter, piece, sentValueToParent}) => {
    const [bgColor, setBgColor] = useState('rgba(246,246,105, 0.5)');
    const [isClicked, setIsClicked] = useState(false);


    const dispCellInfos = (e) => {
        if (piece !== 'empty') {
            sentValueToParent(e.currentTarget);
            console.log(letter + value);
            console.log(e.currentTarget);
            setIsClicked(!isClicked);
            e.currentTarget.style = isClicked ?  `` : `background: ${bgColor}`;
        }
    }


    if (piece === 'empty') {
        return (
            <div className="BoardCell BoardCellLetterNumber" onClick={dispCellInfos}>
            </div>
        )
    }
    if (displayNb && dispLetter) {
        return (
            <div className="BoardCell BoardCellLetterNumber" onClick={dispCellInfos}>
                <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
                {letter}
            </div>
        )
    }
    if (dispLetter) {
        return (
                <div className="BoardCell BoardCellLetter" onClick={dispCellInfos}>
                    <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
                    {letter}
                </div>
        )
    }
    else if (displayNb)
        return (
            <div className="BoardCell" onClick={dispCellInfos}>
                <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
                {/*{value}*/}
            </div>
        )
    else
    return (
            <div className="BoardCell" onClick={dispCellInfos}>
                <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
            </div>
    );
}

BoardCell.propTypes = {};

BoardCell.defaultProps = {};

export default BoardCell;
