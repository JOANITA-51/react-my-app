import {useState, useEffect } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from"./components/AddTask"
import Footer from "./components/Footer"
const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([ ])//seTasks changes any part of the state

  //used when you want smth to happen when the page loads
  useEffect(()=>{
    //Use async because it calls fetch tasks which returns a promise
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch ('http://localhost:5000/tasks')
    const data = await res.json() //gives us the json data
    return data
  }

    // Fetch Tasks
    const fetchTask = async (id) => {
      const res = await fetch (`http://localhost:5000/tasks/${id}`)
      const data = await res.json() //gives us the json data
      return data
    }

//Add Task
const addTask = async (task)=> {
  const res = await fetch ('http://localhost:5000/tasks',{
    method: 'POST',
    headers:{
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()
  setTasks([...tasks, data]) //take in all that is in the tasks and pass it on to the data created

  //creating a random id
  // const id= Math.floor(Math.random()+ 100) + 1
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])

}

//Delete Task
const deleteTask = async(id) =>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'DELETE'
  })
  setTasks(tasks.filter((task)=> task.id !== id))
}

//Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)  //getting the task
    const updatedTask = {...taskToToggle, reminder:!taskToToggle.reminder} //putting the new task into a variable

    const res = await fetch (`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task)=>
      task.id === id? {...task, reminder: data.reminder}: task)
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
      <Footer/>
    </div>
  );
}

export default App;
