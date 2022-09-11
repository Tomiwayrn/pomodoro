import ProgressBar from "./progress";
import settingsIcon from "../src/assets/icon-settings.svg";
import logo from '../src/assets/logo.svg'
import Modal from "./modal";
import React from "react";
import { SettingsContext } from "./SettingsContext";
import ActiveBtns from "./ActiveBtns";


 



export default function Pomodoro (){
    const[showModal, setShowModal] = React.useState(false)
    const {settings} = React.useContext(SettingsContext)

    // default state
    const Default = {
        work: 25,
        short:5,
        long:1,
        active: 'work',
        color: '#F87070',
        font:  "'Kumbh Sans' , sans-serif "
    }

    const [newTimer, setNewTimer] = React.useState(Default)

    
    const[isplaying, setIsPlaying] = React.useState(false)

    // toggle showing settings

   function handleSettings(){
        setIsPlaying(false)
        setShowModal((prev)=> !prev)
    }
   
    // set styles based on usersettings
    const styles =
     {'--clr': settings?settings.color: "",

    fontFamily : settings?settings.font: ''
} 
  
  return( 
     <>
   { 
   showModal && 
   <Modal newTimer={newTimer} setNewTimer={setNewTimer} removeModal={setShowModal}/>
   }
    <main style={styles}>
        <img src={logo} alt="logo" />
        <ActiveBtns isplaying ={isplaying}
        setIsPlaying={()=>setIsPlaying(false)} newTimer={newTimer} setNewTimer={(param)=> setNewTimer(param)} />

        <ProgressBar  
        newTimer={newTimer} 
        setNewTimer={setNewTimer}
        isplaying ={isplaying}
        setIsPlaying={setIsPlaying}
        setShowModal={setShowModal}
        />

        <button className="settings" onClick={handleSettings}><img src={settingsIcon}alt="setting"></img></button>
        
    </main>
    </>)
}