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

import { useCallback } from 'react'


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

const BoardCell = ({value, displayNb = false, letter, dispLetter, piece, sentValueToParent, currentMove, oldMove, moveErr}) => {
    const [bgColor, setBgColor] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        if ((letter + value) === oldMove[0] || (letter + value) === oldMove[1])
            setBgColor('rgba(246,246,105, 0.5)');
        if (oldMove.length === 2 && (letter + value) === oldMove[0]) {
            console.log('move demandé');
            let imgObj = document.getElementById(piece)
            var oldParent = document.getElementById(oldMove[0]);
            var newParent = document.getElementById(oldMove[1]);
            newParent.appendChild(oldParent.childNodes[0]);
        }
    }, [oldMove])

    useEffect(() => {
        if ((letter + value) !== currentMove[0] && (letter + value) !== currentMove[1] && (letter + value) !== oldMove[0] && (letter + value) !== oldMove[1]) {
            setBgColor('');
            setIsClicked(false);
        }
    }, [currentMove])

    useEffect(() => {
        if (isClicked && moveErr === true)
            setBgColor('rgba(217, 30, 24, 1)');
        else if (isClicked && moveErr === false)
            setBgColor('rgba(246,246,105, 0.5)');
        else
            setBgColor('');
    }, [isClicked, moveErr])

    //document.getElementById('div3').appendChild(document.getElementById('div1'));

    const dispCellInfos = (e) => {
        //console.log(document.getElementById(piece));
        if(e.target.id==''){
            console.log("You clicked: "+e.target.parentNode.parentNode.id);
        }
        else{
            console.log("You clicked: "+e.target.id);
        }
        
        console.log('piece', piece);
        setIsClicked(!isClicked);
        sentValueToParent(letter + value);
    }


    if (piece === 'empty') {
        return (
            <div id={letter+value} className="BoardCell BoardCellLetterNumber" onClick={dispCellInfos} style={{backgroundColor: bgColor}}>
            </div>
        )
    }
    if (displayNb && dispLetter) {
        return (
            <div id={letter+value} className="BoardCell BoardCellLetterNumber" onClick={dispCellInfos} style={{backgroundColor: bgColor}}>
                <div id={piece}>
                    <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
                </div>
                {letter}
            </div>
        )
    }
    if (dispLetter) {
        return (
            <div id={letter+value} className="BoardCell BoardCellLetter" onClick={dispCellInfos} style={{backgroundColor: bgColor}}>
                <div id={piece}>
                    <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
                </div>
                {letter}
            </div>
        )
    } else if (displayNb)
        return (
            <div id={letter+value} className="BoardCell" onClick={dispCellInfos} style={{backgroundColor: bgColor}}>
                <div id={piece}>
                    <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
                </div>
                {/*{value}*/}
            </div>
        )
    else
        return (
            <div id={letter+value} className="BoardCell" onClick={dispCellInfos} style={{backgroundColor: bgColor}}>
                <div id={piece}>
                    <img height="100%" width="100%" src={pieceAssoc[piece]}></img>
                </div>
            </div>
        );
}

export default BoardCell;