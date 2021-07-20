import './Row.scss';
import React, {useContext} from 'react';
import Grid from "@material-ui/core/Grid";
import { GameContext } from '../../../Context/gameContext';
import Piece from '../Piece/Piece';
import Square from '../Square/Square';



const Row = () => {
    const gameContext = useContext(GameContext)

    return (
        <Grid className="GameRow" container justify="center"  style={{"flexWrap": "nowrap"}}>
            {Square.map((sqr) => 
                Square(sqr) 
            )}  
        </Grid>
    )
}


Piece.propTypes = {};

Piece.defaultProps = {};

export default Row;