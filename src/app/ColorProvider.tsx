"use client"
import React, { createContext, useState } from 'react';

type Props = {
    children: any; initialColor: any; setColor: any;
}

// Step 1: Create the context
export const ColorProviderContext = createContext({
    color: '',
    setColor: (color: string) => { },
});


// Your existing ColorProvider component
export const ColorProvider = ({ children, initialColor , setColor }: Props) => {
    
    
    // State to hold the current color
    const [currentColor, setCurrentColor] = useState(initialColor);
    // Function to update the color
    const updateColor = (color: string) => {
        setCurrentColor(color);
        setColor(color);
    };


    // console.log(currentColor , updateColor)

    // Step 2: Provide the setColor function via the context provider
    return (
        <ColorProviderContext.Provider value={{ color: currentColor, setColor: updateColor }}>
            {children}
        </ColorProviderContext.Provider>
    );
};