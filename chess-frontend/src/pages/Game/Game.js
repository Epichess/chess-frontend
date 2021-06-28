import React from 'react';
import PropTypes from 'prop-types';
import './Game.scss';
import {Board} from '../../components/Board/Board';
import GameHistory from "../../components/GameHistory/GameHistory";
import Timer from "../../components/Timer/Timer";

const Game = () => (
  <div className="Game">
      <div className="MainComponents">
          <GameHistory/>
          <Board/>
          <Timer/>
      </div>
  </div>
);

Game.propTypes = {};

Game.defaultProps = {};

export default Game;
