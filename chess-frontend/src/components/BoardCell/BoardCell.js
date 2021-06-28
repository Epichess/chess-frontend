import React from 'react';
import PropTypes from 'prop-types';
import './BoardCell.scss';
import Grid from "@material-ui/core/Grid";

const BoardCell = ({value, displayNb = false, letter}) => {
    if (displayNb && letter) {
        return (
            <div className="BoardCell BoardCellLetterNumber">{letter}</div>
        )
    }
    if (letter) {
        return (
                <div className="BoardCell BoardCellLetter">{letter}</div>
        )
    }
    else if (displayNb)
        return (
            <div className="BoardCell">{value}</div>
        )
    else
    return (
            <div className="BoardCell"></div>
    );
}

BoardCell.propTypes = {};

BoardCell.defaultProps = {};

export default BoardCell;
