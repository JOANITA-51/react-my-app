const AddTask = () => {
    return (
        <form className='add-form'>
            <div className = 'form-control'>
                <label>Tasks</label>
                <input type = 'text' placeholder='Add Task'/>

            </div>
            <div className = 'form-control'>
                <label>Day & Time</label>
                <input type = 'text' placeholder='Add Day & Time'/>

            </div>
            <div className = 'form-control'>
                <label>Set Reminder</label>
                <input type = 'checkbox' />

            </div>
            <input type = 'submit' value= 'save task'/>
        </form>
        
    )
}

export default AddTask
