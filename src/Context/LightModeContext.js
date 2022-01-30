import React, { useContext, useState, useEffect   } from "react";

const LightModeContext = React.createContext()

export function useLightMode(){
    return useContext(LightModeContext)
}

export function LightModeProvider({ children }){

    const [lightMode, setLightMode] = useState(searchCookie('lightmode'))

    function setCookie(name, value, days) {
        var validate = ''
        if(days) {
            var date = new Date()
            date.setTime(date.getTime() + (days*24*60*60*1000))
            validate = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + validate + '; path=/'
    }

    function getCookie(name) {
        var nameCookie = name + '='
        var ca = document.cookie.split(';')
        for(var i=0; i<ca.length; i++){
            var c = ca[i];
            while(c.charAt(0) === ' ') c = c.substring(nameCookie.length, c.length)
            if(c.indexOf(nameCookie) === 0) return c.substring(nameCookie.length, c.length)
        }
        return null
    }

    function eraseCookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    }

    function searchCookie(name) {
        const value = getCookie(name)
        if( value === null ){
            setCookie('lightmode', 'sun', 30)
            return true
        }
        else{
            if(value === 'sun'){
                return true
            }else{
                return false
            }
        }
    }

    useEffect(()=>{
        eraseCookie('lightmode')
        if(lightMode === true){
            setCookie('lightmode', 'sun', 30)
        }
        else{
            setCookie('lightmode', 'moon', 30)
        }
    }, [lightMode])

    return(
        <LightModeContext.Provider
            value={{lightMode, setLightMode}}
        >
            {children}
        </LightModeContext.Provider>
    )

}