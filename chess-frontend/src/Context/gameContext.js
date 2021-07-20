//declare methods
import { createContext } from "react";
  
  const defaultValues = {
    isActive: false,
    isClicked: false,
    currentMove: [],
    bgColor: '',
    exists: ''
  }
  
  export const GameContext = createContext(defaultValues);
