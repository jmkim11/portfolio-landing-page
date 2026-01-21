import React, { useState } from 'react';
import { Check, Plus, Trash2 } from 'lucide-react';
import './Demos.css';

const TaskAppDemo = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: '기획서 작성하기', completed: true },
        { id: 2, text: 'API 설계 검토', completed: false },
        { id: 3, text: '팀 회의 준비', completed: false },
    ]);
    const [newTask, setNewTask] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (!newTask.trim()) return;
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
        setNewTask('');
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <div className="demo-container">
            <div className="demo-header">
                <h3>업무 관리</h3>
                <p>팀 협업을 위한 태스크 매니저</p>
            </div>

            <div className="task-app">
                <form onSubmit={addTask} className="task-input-group">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="새로운 할 일 추가..."
                    />
                    <button type="submit" className="add-btn"><Plus size={18} /></button>
                </form>

                <ul className="task-list">
                    {tasks.map(task => (
                        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                            <div className="task-left" onClick={() => toggleTask(task.id)}>
                                <div className="checkbox">
                                    {task.completed && <Check size={14} />}
                                </div>
                                <span>{task.text}</span>
                            </div>
                            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                                <Trash2 size={16} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskAppDemo;
