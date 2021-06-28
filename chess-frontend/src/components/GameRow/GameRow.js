import React from 'react';
import PropTypes from 'prop-types';
import './GameRow.scss';
import Grid from "@material-ui/core/Grid";
import BoardCell from "../BoardCell/BoardCell";

const GameRow = ({value, displayLetter = false}) => {
        if (displayLetter) {
                return (
                    <Grid container justify="center" spacing="0" style={{"flex-wrap": "nowrap"}}>
                            <BoardCell value={value} letter="a"/>
                            <BoardCell value={value} letter="b"/>
                            <BoardCell value={value} letter="c"/>
                            <BoardCell value={value} letter="d"/>
                            <BoardCell value={value} letter="e"/>
                            <BoardCell value={value} letter="f"/>
                            <BoardCell value={value} letter="g"/>
                            <BoardCell value={value} letter="h"/>
                    </Grid>
                )
        }
        else
                return (
                    <Grid container justify="center" spacing="0" style={{"flex-wrap": "nowrap"}}>
                            <BoardCell value={value} displayNb={true}/>
                            <BoardCell value={value}/>
                            <BoardCell value={value}/>
                            <BoardCell value={value}/>
                            <BoardCell value={value}/>
                            <BoardCell value={value}/>
                            <BoardCell value={value}/>
                            <BoardCell value={value}/>
                    </Grid>
                )
};

GameRow.propTypes = {};

GameRow.defaultProps = {};

export default GameRow;
