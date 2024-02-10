'use client'
import { MantineProvider, createTheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { ColorProvider } from "./ColorProvider";
import { useState, useEffect } from "react";
interface ProvidersProps {
    children: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {

    //adding loading so that the color set in the SwitchTheme Component as retrieved by useContext

    const [loading, setLoading] = useState(true);
    const [primaryColor, setPrimaryColor] = useLocalStorage({ key: 'primary-color', defaultValue: 'blue' });

    useEffect(() => {
        setLoading(false);
    }, [primaryColor]);

    if (loading) {
        return null;
    }

    const theme = createTheme({
        fontFamily: 'Open Sans, sans-serif',
        primaryColor: primaryColor,
        breakpoints: {
            xs: '30em',
            sm: '48em',
            md: '64em',
            lg: '74em',
            xl: '90em',
        },
    });
    return (
        <MantineProvider defaultColorScheme="light" theme={theme} >
            <ColorProvider initialColor={primaryColor} setColor={setPrimaryColor}>
                {children}
            </ColorProvider>
        </MantineProvider>
    )
}
