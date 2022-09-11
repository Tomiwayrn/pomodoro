import React from 'react'

    const btn = [ {name:'pomodoro', value: 'work'}, {name:'long', value: 'long'} , {name:'short', value:'short'}]


const ActiveBtns = ({newTimer,setNewTimer, setIsPlaying}) => {

  // highlight only active
  const styles =
  { background: 'none',
  color: '#D7E0FF'
  }

  //set active to the current button clicked

 function handleChange(e){
  setIsPlaying()
  setNewTimer({
    ...newTimer,
    active: e.target.value
  })
 }

 

  return (
    <>
     <div className='active-btns'>
   
    {
            btn.map((item)=>{
            return (
                <button
                onClick={(e)=>handleChange(e)
                
                }
                style={newTimer.active === item.value?{}:styles} className='active-btn'
                 key={item.value}
                 value={item.value}
                 
                > {item.name}</button>
            )
        }) }
     </div>
    </>
    
  )
}

export default ActiveBtns

