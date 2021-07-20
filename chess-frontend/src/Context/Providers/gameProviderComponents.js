//methods
import React, {ComponentProps, useState} from 'react';
import { GameContext } from '../gameContext';

export default function GameProvider({children}) {
    const [isActive, setIsActive]=useState(false);
    const [isClicked, setIsClicked]=useState(false);
    const [currentMove, setCurrentMove] = useState([]);
    const [bgColor, setBgColor] = useState('');
    const [exists, setExists] = useState('Coucou')

    return(
        <GameContext.Provider value={{
            isActive,
            setIsActive,
            isClicked,
            currentMove,
            bgColor,
            setBgColor,
            exists
        }}>
            {children}
        </GameContext.Provider>
    )
}

