import './Square.scss';
import React, {useContext} from 'react';
import { GameContext } from '../../../Context/gameContext';
import Piece from '../Piece/Piece';



const Square = () => {
    const gameContext = useContext(GameContext)

    return (
        <div onClick={}>
            {<Piece/> && hasPiece}
        </div>
    )
}


Piece.propTypes = {};

Piece.defaultProps = {};

export default Square;