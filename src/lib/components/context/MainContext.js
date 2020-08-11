import React, { useState, createContext } from 'react';
export const MainContext = createContext();

const MainProvider = (props) => {
  const [state, setState] = useState([]);
  const [validation, setValidation] = useState([]);
  // change state
  const handleChangeState = (property, newValue) => {
    setState({
      ...state,
      [property]: newValue,
    });
  };

  const handleChangeStateEvent = (property) => (event) => {
    if (state[property] !== event.target.value) {
      setState({
        ...state,
        [property]: event.target.value,
      });
    }
  };
  const [configStyles, setConfigStyles] = useState({});
  const [configGrid, setConfigGrid] = useState({});
  return (
    <MainContext.Provider
      value={{
        setState,
        state,
        handleChangeState,
        handleChangeStateEvent,
        validation,
        setValidation,
        configStyles,
        setConfigStyles,
        configGrid,
        setConfigGrid
      }}>
      {props.children}
    </MainContext.Provider>
  );
};
export default MainProvider;
