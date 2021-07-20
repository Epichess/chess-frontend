import './Piece.scss';
import React, {useContext} from 'react';
import { GameContext } from '../../../Context/gameContext';



const Piece = () => {
    const gameContext = useContext(GameContext)

    return (
        <div onClick={GameContext.setIsActive}>
            <img></img>
        </div>
    )
}


Piece.propTypes = {};

Piece.defaultProps = {};

export default Piece;