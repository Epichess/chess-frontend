import React from 'react';
import PropTypes from 'prop-types';
import menuBackground from '../../Menu.png';
import './Menu.css'

const Menu = () => {
    return (
        <div className="menuBackground">
            <div className="MenuBtn PlayBtn">
                <div className="playBtnText">Play now</div>
            </div>
            <div className="MenuBtn SignupBtn">
                <div className="signupBtnText">Sign Up</div>
            </div>

        </div>
    )
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
