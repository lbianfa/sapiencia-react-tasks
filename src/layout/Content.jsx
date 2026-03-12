import { useState } from "react"
import Task from "../components/Task"

function Content() {

  const initialTasks = [
    {
      id: 1,
      title: "Viajar a Francia",
      image: "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/fwaprfznthvrcg0ntfet"
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
  ];
  const [ tasks, setTasks ] = useState(initialTasks)
  const [ search, setSearch ] = useState("")
  const [ newTitle, setNewTitle ] = useState("")
  const [ newUrl, setNewUrl ] = useState("")

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))
  }

  const handleClean = () => {
    setTasks([])
  }

  const handleSearch = () => {
    if (search == "") {
      setTasks(initialTasks)
    } else {
      setTasks(tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase())))
    }
  }

  const addNewTask = () => {
    const newTask = {
      title: newTitle,
      image: newUrl
    }

    setTasks([ newTask, ...tasks])
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

        <hr />

        <form>
          <input 
            type="text"
            placeholder="Titulo de nueva tarea"
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <br />
          <br />
          <input 
            type="text"
            placeholder="URL de la imagen"
            onChange={(e) => setNewUrl(e.target.value)}
          />
          <br />
          <br />
          <button type="button" onClick={addNewTask}>Agregar tarea</button>
        </form>

        <hr />

        <br />
        <br />
        <button onClick={handleClean}>Limpiar</button>
        <ol>
          {tasks.map(task => 
            <Task 
              key={`task-${task.id}`}
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
