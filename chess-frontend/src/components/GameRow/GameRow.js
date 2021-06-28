import React from 'react';
import PropTypes from 'prop-types';
import './GameRow.scss';
import Grid from "@material-ui/core/Grid";

const GameRow = () => (
    <Grid container justify="center" spacing="0" style={{"flex-wrap": "nowrap"}}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
            <Grid key={value} item>
                <div className="BoardCell"></div>
            </Grid>
        ))}
    </Grid>
);

GameRow.propTypes = {};

GameRow.defaultProps = {};

export default GameRow;
