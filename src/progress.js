import React from "react"
import { SettingsContext } from "./SettingsContext"

export default function ProgressBar ({newTimer, setNewTimer, isplaying, setIsPlaying, setShowModal}){

    
     const current = newTimer.active
     const {settings} = React.useContext(SettingsContext)
    const[seconds, setSeconds] = React.useState()   
    
    const [oldTime, setOldTime] = React.useState({})
       
    

    React.useEffect(()=>{
        setSeconds((newTimer[current]) * 60)
      
    },  [ current, settings]);


    // old time is constant and determines progress
    React.useEffect(()=>{
        // settings isnt defined? then use default

        setOldTime(settings ==={}?settings[current]:newTimer[current])
    
    }, [current])


   
       
         // set stroke offset

        const styles = {
        '--num': Math.floor(((seconds / 60) /oldTime) * 100) || 0
       } 
          
 

    Timer()

    function hadleClick(){
      setIsPlaying(prev=> !prev)
    };

        function Timer(){
            (seconds > 0 && isplaying)  && setTimeout(() => {
                 setSeconds(prev=> prev - 1)
                 setNewTimer(
                    {
                        ...newTimer,
                        [current]: ((seconds - 1) / 60).toFixed(2) 
                    }
                    )
            }, 1000);

             if (seconds === 1){
                setIsPlaying(false)
             }   
        };
      
        let secondsLeft = Math.floor(seconds % 60)
             if(secondsLeft < 10){
                 secondsLeft = '0' + secondsLeft
             }

    const minutes = Math.floor(seconds / 60)


   return (<>
    <div className="progress-container" >
    
        <div className="percent"  >
        <div className="progress-value">
        <h2>{minutes}:{secondsLeft}</h2>

       { seconds > 0 && <button onClick={hadleClick} className="start-btn">
            {isplaying?'pause':'start'}    
        </button>}

        {/* set new button when time remaining is zero */}
        {seconds ===0 && 
        <button 
        onClick={()=> setShowModal(true)}
        className="start-btn">
            set new    
        </button>
        }    
    </div>
       <svg >           
          <circle style={styles}  cx={'110'} cy={'110'} r={'100'}>             
                </circle>
        </svg>
            
        </div>
    </div>
    </>)
}