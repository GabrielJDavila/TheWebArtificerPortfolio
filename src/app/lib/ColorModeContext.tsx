import { createContext, useContext, useEffect, useState } from "react";

type StateContextType = {
    colorTheme: string;
    setColorTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ColorThemeContext = createContext<StateContextType | null>(null);

type ColorThemeProviderProps = {
    children: React.ReactNode;
};

export const ColorThemeProvider = ({ children }: ColorThemeProviderProps) => {
    const [colorTheme, setColorTheme] = useState<string>(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "dark";
        }
        return "dark";
    });

    useEffect(() => {
        const root = document.documentElement;
        const oldTheme = colorTheme === "dark" ? "light" : "dark";

        root.classList.remove(oldTheme);
        root.classList.add(colorTheme);

        if (typeof window !== "undefined") {
            localStorage.setItem("theme", colorTheme);
        }
    }, [colorTheme]);

    const value = { colorTheme, setColorTheme };

    return <ColorThemeContext.Provider value={value}>{children}</ColorThemeContext.Provider>;
};

export const useColorTheme = () => {
    const context = useContext(ColorThemeContext);
    if (!context) {
        throw new Error("useColorTheme must be used within a ColorThemeProvider");
    }
    return context;
};

// import { createContext, useContext, useEffect, useState } from "react";

// type StateContextType = {
//     colorTheme: string,
//     setColorTheme: React.Dispatch<React.SetStateAction<string>>
// }
// export const ColorThemeContext = createContext<null | StateContextType>(null)

// type ColorThemeProviderProps = {
//     children: React.ReactNode
// }
// export const ColorThemeProvider = ({children} : ColorThemeProviderProps) => {
//     const [colorTheme, setColorTheme] = useState<string>(() => {
//         if(typeof window !== "undefined") {
//             return localStorage.getItem("theme") | "dark"
//         }
//         return "dark"
//     })

//     const newTheme = colorTheme === "dark" ? "light" : "dark"

//     useEffect(() => {
//         const root = window.document.documentElement
        
//         document.documentElement.classList.remove(colorTheme)
//         document.documentElement.classList.add(newTheme)
//         if(typeof window !== "undefined") {
//             localStorage.setItem("theme", newTheme)
//         }
//     }, [colorTheme])

//     const value = {
//         colorTheme,
//         setColorTheme,
//     }

//     return (<ColorThemeContext.Provider value={value}>{children}</ColorThemeContext.Provider>)
// }

// export const useColorTheme = () => {
//     const context = useContext(ColorThemeContext)
//     if(!context) {
//         throw new Error("useNav must be used within a ColorThemeProvider")
//     }

//     return context
// }