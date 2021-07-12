import React, {useEffect, useState} from 'react';
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

const BoardCell = ({value, displayNb = false, letter, dispLetter, piece, sentValueToParent, currentMove}) => {
    const [bgColor, setBgColor] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        if ((letter + value) !== currentMove[0]) {
            setBgColor('');
            setIsClicked(false);
        }
    }, [currentMove])

    useEffect(() => {
        setBgColor(isClicked ? 'rgba(246,246,105, 0.5)' : '');
    }, [isClicked])


    const dispCellInfos = (e) => {
        console.log('piece', piece);
        setIsClicked(!isClicked);
        sentValueToParent(letter + value);
    }


    if (piece === 'empty') {
        return (
            <div className="BoardCell BoardCellLetterNumber" onClick={dispCellInfos} style={{backgroundColor: bgColor}}>
            </div>
        )
    }
    if (displayNb && dispLetter) {
        return (
            <div className="BoardCell BoardCellLetterNumber" onClick={dispCellInfos} style={{backgroundColor: bgColor}}>
                <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
                {letter}
            </div>
        )
    }
    if (dispLetter) {
        return (
            <div className="BoardCell BoardCellLetter" onClick={dispCellInfos} style={{backgroundColor: bgColor}}>
                <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
                {letter}
            </div>
        )
    } else if (displayNb)
        return (
            <div className="BoardCell" onClick={dispCellInfos} style={{backgroundColor: bgColor}}>
                <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
                {/*{value}*/}
            </div>
        )
    else
        return (
            <div className="BoardCell" onClick={dispCellInfos} style={{backgroundColor: bgColor}}>
                <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
            </div>
        );
}

export default BoardCell;