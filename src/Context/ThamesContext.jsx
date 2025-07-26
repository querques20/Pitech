import { createContext, useState } from "react";

export const themeProvider = createContext("light");

export function themeProvider({ children }){
    const [theme, setTheme] = useState("light");

const toggleTheme = () => 
setTheme(prev => {prev === "light" ? "dark" : "light"});
return (
    <themeProvider.Provider value={{ theme, toggleTheme }}>
        {children}
    </themeProvider.Provider>
);


}