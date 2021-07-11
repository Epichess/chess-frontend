import React from 'react';
import PropTypes from 'prop-types';
import menuBackground from '../../Menu.png';
import './Menu.scss'
import {useHistory} from 'react-router-dom';
import { io } from "socket.io-client";

const Menu = () => {

    const socket = io("http://localhost:8000");

    const history = useHistory();
    const handdlePlayBtnClick = () => {
        history.push('/Game');

        socket.emit('create_game');
        console.log('socket emit create-game');

        socket.on("creating", (...args) => {
            console.log('create and store game id')
            // store game id
          });
    }
    return (
        <div className="menuBackground">
            <div className="MenuBtn PlayBtn" onClick={handdlePlayBtnClick}>
                <div className="MenuBtnText playBtnText">Play now</div>
            </div>
            <div className="MenuBtn SignupBtn">
                <div className="MenuBtnText signupBtnText">Sign Up</div>
            </div>

        </div>
    )
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
