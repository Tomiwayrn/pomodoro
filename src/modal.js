import closeIcon from '../src/assets/icon-close.svg';
import check from '../src/assets/icon-check.svg';
import React from 'react';
import  { SettingsContext } from './SettingsContext';

export default function Modal({removeModal,  newTimer, setNewTimer}){   
const {settings, set} = React.useContext(SettingsContext)
 
  
    const styles = {
        background: '#161932',
         color : 'white'}

     const font =  [ 
         {name:'font',
         value: "'Kumbh Sans' , sans-serif "}, 
         {name:'font', 
         value:"'Roboto Slab', serif"}
         ,{name:'font',
         value: "'Space Mono', monospace"}]
    


    const FontButtons = font.map(item=>{
            return(
                <button className='font-btn'
                value={item.value}
                name={'font'}
                key={item.value}
                style={newTimer.font === item.value?styles:{}}
                onClick={handleChange}
                >Aa</button>
            )
    }) 

 function handleChange(e){
    const {name, value} = e.target
    switch(name){
        case 'work':
            setNewTimer(
                {
                    ...newTimer,
                    work:  value === ''? 1: parseInt(value)

                }
            )
            break;


            case 'short':
                setNewTimer(
                    {
                        ...newTimer,
                        short: value === ''? 1: parseInt(value)
                    }
                )
                break;
                
            case 'long':
            setNewTimer(
                {
                    ...newTimer,
                    long:  (value === '')? 1: parseInt(value)

                }
            )
            break;

            case 'color':
            setNewTimer(
                {
                    ...newTimer,
                    color: value
                }
            )
            break;

            case 'font':
               
           
            setNewTimer(
                {
        
                    ...newTimer,
                    font: value.toString().slice(',')
                }
            )
            break;
    }
  console.log(newTimer)
        
 }

 set(newTimer)


 function apply() {
 setNewTimer(newTimer)
 removeModal(false)
 set(newTimer)
 
 
 }
 

    return(
        <>
            <div className="modal">
                <div className="modal-header">
                    <h4>Settings</h4>
                    <button onClick={()=> removeModal(false)} className="close" >
                        <span>
                            <img src={closeIcon} alt="close" />
                        </span>
                    </button>
                </div>
            
              <div className="form-main">
                <h4>Time (minutes)</h4>
                  <div className='form-control'>
                  <label htmlFor="work">pomodoro</label>
                    <input id="work"
                    name='work'
                    type={'number'}
                    value={newTimer.work}
                    onChange={handleChange}
                
                    />
                  </div>
                    

                   <div className='form-control'>
                   <label htmlFor="short">short break</label>
                    <input id="short"
                    name='short'
                    type={'number'}
                    onChange={handleChange} 
                    value={newTimer.short}
                    />
                 </div> 

                    <div className='form-control'>
                    <label htmlFor="long">long break</label>
                    <input id="long"
                    onChange={handleChange}
                    value={newTimer.long} 
                    name='long'
                    type={'number'}/>
                    </div>                                </div>  
                
                <div className="font">
                    <h4>font</h4>
                    <div className='font-btns'>
                    {FontButtons}         </div>
                </div>

                <div className="color">
                    <h4>color    </h4>
                   <div className='color-btns'>
                        <button
                        name='color'
                        value={'#F87070'}
                        onClick={handleChange} 
                        className="color-btn">
                        {newTimer.color === '#F87070'? 
                        <span>
                        <img src={check} alt='active' /></span>
                        : '' }
                            
                        </button>
                            
                        <button 
                        className="color-btn"
                        name='color'
                        value={'#70F3F8'}
                        onClick={handleChange}
                        >
                        {newTimer.color === '#70F3F8'? 
                        <span>
                        <img src={check} alt='active' /></span>
                        : '' }
                        </button>
                           
                         <button 
                         name='color'
                         value={'#D881F8'}
                         onClick={handleChange}
                         className="color-btn">
                        {newTimer.color === '#D881F8'? 
                        <span>
                        <img src={check} alt='active' /></span>
                        : '' }

                         </button>
                    </div> 
                    
                </div>

                    <button 
                    onClick={apply}
                    className='apply'>Apply</button>
            
                
            </div>
        </>
    )
}