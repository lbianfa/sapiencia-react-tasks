import { useState } from "react"
import Task from "../components/Task"

function Content() {

  // let tasks;
  const [ tasks, setTasks ] = useState([
    {
      id: 1,
      title: "Viajar a Francia",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvr8TK6ppqNvlnxum1Au65M8KuBzEZSTfMhg&s"
    },
    {
      id: 2,
      title: "Viajar a Alemania",
      image: "https://wise.com/imaginary-v2/48ccf38469303dc5723f45487e09e1af.jpg?width=1200"
    },
    {
      id: 3,
      title: "Aprender React",
      image: "https://doit-innovations.com/wp-content/uploads/2023/07/Diseno-sin-titulo-4.png"
    }
  ])
  const [ search, setSearch ] = useState("")

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))
  }

  const handleClean = () => {
    setTasks([])
  }

  const handleSearch = () => {
    setTasks(tasks.filter(task => task.title))
  }

  return <main>
      <section>
        <p>Mis tareas</p>

        <input 
          type="text" 
          placeholder="Titulo" 
          onChange={(event) => setSearch(event.target.value)} 
        />
        <button onClick={handleSearch}>Buscar</button>
        
        <br />
        <br />
        <button onClick={handleClean}>Limpiar</button>
        <ol>
          {tasks.map(task => 
            <Task 
              title={task.title} 
              url={task.image} 
              handleRemove={() => removeTask(task.id)}
            />
          )}
        </ol>
      </section>
    </main>
}

export default Content
