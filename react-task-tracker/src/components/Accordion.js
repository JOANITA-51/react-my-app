import { useState } from "react"
const Accordion = () => {
    const [isToggled, setIsToggled]= useState(false ) //false enables sth to be hidden
    const showMe =  isToggled? <h3>show me</h3> :null
    return (
        <div>
        { showMe
            // isToggled? <h3>show me</h3> :null
        /* {isToggled && 
           <h3>show me</h3> 
        } */}
           <button 
           onClick = {()=> setIsToggled(!isToggled)}
           >Toggle</button>
        </div>
    )
}

export default Accordion
