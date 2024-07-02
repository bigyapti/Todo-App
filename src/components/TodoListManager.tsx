import React, { useState } from 'react';

const TodoListManager = () => {
    const currTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    const [content, setContent] = useState("");
    const [todos, setTodos] = useState<string[]>([]);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      if(content.trim()!==""){
      setTodos([...todos,content]);
      setContent("");
      }
    }

    const handleDelete = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className='c min-h-screen flex flex-col items-center p-8'>
            <h1 className='text-6xl font-bold m-4'>{currTime}</h1>
            <h2 className='text-3xl mb-8'>Ready to get started?</h2>
            <form onSubmit={handleSubmit} className='flex items-center mb-4'>
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter activity.."
                    className="bg-gray-200 border-2 border-gray-300 rounded-md text-sm p-2 focus:outline-none focus:border-blue-400"
                />
                <button type="submit" className="ml-2 bg-blue-600 text-white rounded-md px-4 py-2 text-sm focus:outline-none hover:bg-blue-600">Add Todo</button>
            </form>
            <ul className="w-full max-w-md">
                {todos.map((todo, index) => (
                    <li key={index} className="flex items-center justify-between bg-white rounded-md shadow-md p-4 mb-2">
                        <div className="text-lg"> {todo}</div>
                        <button onClick={() => handleDelete(index)} className="bg-red-600 text-white rounded-md px-3 py-1 text-sm focus:outline-none hover:bg-red-600">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoListManager;
