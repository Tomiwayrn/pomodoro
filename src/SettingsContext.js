import React from "react";

  export const SettingsContext = React.createContext()


 const SettingsContextProvider = (props) => {

    
  const [settings, setSettings] = React.useState({})

  function set (param){
    setSettings(param)
  }
  return (
    <SettingsContext.Provider value={{
        set, settings
    }}>
        {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider

