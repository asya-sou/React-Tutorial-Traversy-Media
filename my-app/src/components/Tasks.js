import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    
    return (
        //cannot use tasks.push() because state is immutable, use setTasks instead
        <>
        {tasks.map((task) => (
            <Task key = {task.id} task ={task} onDelete={onDelete} onToggle={onToggle}/>
            ))} 
        </>
    )
}

export default Tasks

/* const tasks = [
    {
        id:1,
        text: 'Pet the cat',
        day: 'June 25th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Walk the dog',
        day: 'June 25th at 3:30pm',
        reminder: false,
    }
] */
