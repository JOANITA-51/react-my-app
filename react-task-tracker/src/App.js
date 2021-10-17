import {useState} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from"./components/AddTask"
const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([ //seTasks changes any part of the state
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
//Add Task
const addTask = (task)=> {
  //creating a random id
  const id= Math.floor(Math.random()+ 100) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}
//Delete Task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=> task.id !== id))
}

//Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task)=>
      task.id === id? {...task, reminder: !task.reminder}: task)
    )  
  }
  return (
    <div className="container">
      <Header 
      onAdd={()=>setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      {/* passing a prop into add task */
        showAddTask &&   <AddTask onAdd={addTask}/>
      }
        
      {/* if there is no task left , then display a message */
      tasks.length>0?
      ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):
      ('No Tasks to show buddy!')
      }
    </div>
  );
}

export default App;
