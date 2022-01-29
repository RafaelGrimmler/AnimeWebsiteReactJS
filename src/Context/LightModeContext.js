import React, { useContext, useState  } from "react";

const LightModeContext = React.createContext()

export function useLightMode(){
    return useContext(LightModeContext)
}

export function LightModeProvider({ children }){

    const [lightMode, setLightMode] = useState(true)

    return(
        <LightModeContext.Provider
            value={{lightMode, setLightMode}}
        >
            {children}
        </LightModeContext.Provider>
    )

}