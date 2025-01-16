// "use client"

// import { useEffect, useState } from "react";

// function FlipColorMode() {
//     const [theme, setColorTheme] = useState(
//         typeof window !== "undefined" ? localStorage.theme : "dark"
//     )
//     const colorTheme = theme === "dark" ? "light" : "dark"

//     useEffect(() => {
//         const root = window.document.documentElement

//         document.documentElement.classList.remove(colorTheme)
//         document.documentElement.classList.add(theme)

//         if(typeof window !== "undefined") {
//             localStorage.setItem("theme", theme)
//         }
//     }, [theme])
//     console.log(theme)
//     return [colorTheme, setColorTheme]
// }

// export default FlipColorMode