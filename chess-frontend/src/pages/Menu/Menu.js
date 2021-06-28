import React from 'react';
import PropTypes from 'prop-types';
import menuBackground from '../../Menu.png';
import './Menu.scss'
import {useHistory} from 'react-router-dom';

const Menu = () => {
    const history = useHistory();
    const handdlePlayBtnClick = () => {
        history.push('/Game');
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
