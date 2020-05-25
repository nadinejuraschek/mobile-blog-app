// REACT
import React, { createContext, useReducer } from 'react';

export default ( reducer, actions, initialState ) => {
    const Context = createContext();

    const Provider = ({ children }) => {
        const [ state, dispatch ] = useReducer(reducer, initialState);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        };

        return (
            <Contex.Provider value={{ state }}>
                {children}
            </Contex.Provider>
        );
    };

    return { Context, Provider };
};