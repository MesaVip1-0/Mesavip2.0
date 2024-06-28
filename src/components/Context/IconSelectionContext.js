import React, { createContext, useState } from 'react';

export const IconSelectionContext = createContext({
    selectedIcons: {},
    toggleIconSelection: () => {}
});

export const IconSelectionProvider = ({ children }) => {
    const [selectedIcons, setSelectedIcons] = useState({});

    const toggleIconSelection = (iconName, value = null) => {
        setSelectedIcons(prevIcons => ({
            ...prevIcons,
            [iconName]: value !== null ? value : !prevIcons[iconName]
        }));
    };

    return (
        <IconSelectionContext.Provider value={{ selectedIcons, toggleIconSelection }}>
            {children}
        </IconSelectionContext.Provider>
    );
};
