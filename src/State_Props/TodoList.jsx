import { useState } from "react";

function ToDoList({ initialTasks = [] }) {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState("");
    const [priority, setPriority] = useState("Moyenne");
    const [search, setSearch] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
            const task = {
                id: Date.now(),
                name: newTask,
                priority: priority,
                completed: false
            };
            setTasks([...tasks, task]);
            setNewTask("");
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Changer l'état d'une tâche
    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    // Filtrer les tâches pour la recherche
    const filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <div style={styles.container}>
            <h1>Todo List</h1>
            
            {/* Formulaire d'ajout */}
            <div style={styles.form}>
                <input
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Entrez une nouvelle tâche"
                    style={styles.input}
                />
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    style={styles.select}
                >
                    <option value="Haute">Haute</option>
                    <option value="Moyenne">Moyenne</option>
                    <option value="Basse">Basse</option>
                </select>
                <button onClick={addTask} style={styles.addButton}>
                    Ajouter
                </button>
            </div>

            {/* Recherche */}
            <div style={styles.search}>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Rechercher une tâche"
                    style={styles.input}
                />
            </div>

            <div style={styles.stats}>
                <p>Total: {totalTasks}</p>
                <p>Terminées: {completedTasks}</p>
            </div>

            {/* Liste des tâches */}
            <div>
                <h3>Tâches :</h3>
                {filteredTasks.map(task => (
                    <div key={task.id} style={{
                        ...styles.task,
                        textDecoration: task.completed ? 'line-through' : 'none',
                        opacity: task.completed ? 0.6 : 1
                    }}>
                        <div style={styles.taskInfo}>
                            <span>{task.name} - {task.priority}</span>
                            <span style={styles.status}>
                                {task.completed ? "Terminé" : "En cours"}
                            </span>
                        </div>
                        
                        <div style={styles.buttons}>
                            <button
                                onClick={() => toggleTask(task.id)}
                                style={task.completed ? styles.undoButton : styles.completeButton}
                            >
                                {task.completed ? "Annuler" : "Terminer"}
                            </button>
                            <button
                                onClick={() => deleteTask(task.id)}
                                style={styles.deleteButton}
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



// Styles CSS
const styles = {
    container: {
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    },
    form: {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px'
    },
    search: {
        marginBottom: '20px'
    },
    input: {
        flex: 1,
        padding: '8px',
        fontSize: '16px'
    },
    select: {
        padding: '8px',
        fontSize: '16px'
    },
    addButton: {
        padding: '8px 16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
    },
    stats: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        padding: '10px',
        backgroundColor: '#f0f0f0'
    },
    task: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: 'white',
        border: '1px solid #ddd'
    },
    taskInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
    },
    status: {
        fontSize: '14px',
        color: '#666'
    },
    buttons: {
        display: 'flex',
        gap: '5px'
    },
    completeButton: {
        padding: '5px 10px',
        backgroundColor: '#2196F3',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
    },
    undoButton: {
        padding: '5px 10px',
        backgroundColor: '#FF9800',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
    },
    deleteButton: {
        padding: '5px 10px',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
    }
};

// Exemple d'utilisation avec des tâches initiales
export default function App() {
    const tasksInitiales = [
        { id: 1, name: "Finaliser le projet React", priority: "Haute", completed: false },
        { id: 2, name: "Préparer le repas", priority: "Moyenne", completed: false },
        { id: 3, name: "Aller courir", priority: "Basse", completed: false }
    ];

    return <ToDoList initialTasks={tasksInitiales} />;
}