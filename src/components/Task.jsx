// props
function Task({ title, url, handleRemove }) {
    return <li>
        <p>Tarea: {title}</p>
        <img width="200" src={url} alt="" />
        <button onClick={handleRemove}>🗑️</button>
    </li>
}

export default Task
