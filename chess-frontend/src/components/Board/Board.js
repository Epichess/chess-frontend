import './Board.scss';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import GameRow from "../GameRow/GameRow";

const useStyles = makeStyles((theme) => ({
       root: {
              flexGrow: 1,
       },
       paper: {
              height: 140,
              width: 100,
       },
       control: {
              padding: theme.spacing(2),
       },
}));

export default function Board() {
       const [spacing, setSpacing] = React.useState(2);
       const classes = useStyles();

       const handleChange = (event) => {
              setSpacing(Number(event.target.value));
       };

       return (
                  <Grid className="Board">
                      <GameRow value="8"/>
                      <GameRow value="7"/>
                      <GameRow value="6"/>
                      <GameRow value="5"/>
                      <GameRow value="4"/>
                      <GameRow value="3"/>
                      <GameRow value="2"/>
                      <GameRow value="1" displayLetter={true}/>
                  </Grid>
       );
}

const Boarde = () => {
         const initialBoard = [
                // starting square, piece type, owner, id
                [0, 'Rook', 'black', 'br1'],
                [1, 'Knight', 'black', 'bh1'],
                [2, 'Bishop', 'black', 'bb1'],
                [3, 'Queen', 'black', 'bq1'],
                [4, 'King', 'black', 'bh1'],
                [5, 'Bishop', 'black', 'bb2'],
                [6, 'Knight', 'black', 'bk2'],
                [7, 'Rook', 'black', 'br2'],
                [8, 'Pawn', 'black', 'bp1'],
                [9, 'Pawn', 'black', 'bp2'],
                [10, 'Pawn', 'black', 'bp3'],
                [11, 'Pawn', 'black', 'bp4'],
                [12, 'Pawn', 'black', 'bp5'],
                [13, 'Pawn', 'black', 'bp6'],
                [14, 'Pawn', 'black', 'bp7'],
                [15, 'Pawn', 'black', 'bp8'],
                [48, 'Pawn', 'white', 'wp1'],
                [49, 'Pawn', 'white', 'wp2'],
                [50, 'Pawn', 'white', 'wp3'],
                [51, 'Pawn', 'white', 'wp4'],
                [52, 'Pawn', 'white', 'wp5'],
                [53, 'Pawn', 'white', 'wp6'],
                [54, 'Pawn', 'white', 'wp7'],
                [55, 'Pawn', 'white', 'wp8'],
                [56, 'Rook', 'white', 'wr1'],
                [57, 'Knight', 'white', 'wh1'],
                [58, 'Bishop', 'white', 'wb1'],
                [59, 'Queen', 'white', 'wq1'],
                [60, 'King', 'white', 'wk1'],
                [61, 'Bishop', 'white', 'wb2'],
                [62, 'Knight', 'white', 'wh2'],
                [63, 'Rook', 'white', 'wr2'],
            ]
        return (
            <div className='Board'>
                   Board Component
            </div>
        );
}



export {Board};