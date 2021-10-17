import {useState} from 'react'
const tasks = () => {
    const [Tasks, setTasks] = useState([ //seTasks changes any part of the state
        {
            id: 1, 
            text: 'Doctors Appointment',
            day:'Feb 5th at 3:30pm',
            reminder: true, 
        } , 
        {
          id: 2, 
          text: 'Meeting at school',
          day:'Feb 6th at 5:30pm',
          reminder: true, 
      } ,
      {
          id: 3, 
          text: 'Food Shopping',
          day:'Feb 7th at 2:30pm',
          reminder: false, 
      } ,
    ])
    return (
        <>
          {Task.map((T)=>(
              <h3 key={T.id}>{T.text}</h3>
          ))}   
        </>
    )
}

export default tasks