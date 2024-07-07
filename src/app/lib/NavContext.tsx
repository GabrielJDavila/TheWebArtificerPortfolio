import { createContext, useContext, useState } from "react";

type StateContextType = {
    openNav: boolean,
    setOpenNav: React.Dispatch<React.SetStateAction<boolean>>
}
export const NavContext = createContext<null | StateContextType>(null)

type NavProviderProps = {
    children: React.ReactNode
}
export const NavProvider = ({children} : NavProviderProps) => {
    const [openNav, setOpenNav] = useState(false)
    const value = {
        openNav,
        setOpenNav,
    }

    return (<NavContext.Provider value={value}>{children}</NavContext.Provider>)
}

export const useNav = () => {
    const context = useContext(NavContext)
    if(!context) {
        throw new Error("useNav must be used within a NavProvider")
    }

    return context
}