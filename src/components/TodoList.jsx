import { useState } from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';


const TodoList = ({ todoList, deleteTodo, toggle, edit }) => {
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const startEditing = (id, currentText) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const saveEdit = (id) => {
    if (editingText.trim() !== "") {
      edit(id, editingText);
    }
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div>
        
      {todoList.map((item) => (
        <div key={item.id} className="flex items-center my-3 gap-3">
          <div className="flex-1 flex items-start gap-2">
        <img
            onClick={() => toggle(item.id)}
            src={item.isComplete ? tick : not_tick}
            alt=""
            className="w-7 cursor-pointer"
            />
            {editingId === item.id ? (
            <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="p-1 border rounded"
            />
            ) : (
            <p
                className={`text-[17px] ${item.isComplete ? "line-through text-gray-500" : "text-slate-700"}`}
            >
                {item.text}
            </p>
            )}
        </div>


          {editingId === item.id ? (
            <button onClick={() => saveEdit(item.id)} className="bg-green-600 text-white px-2 rounded text-sm">
              Save
            </button>
          ) : (
            <button
              onClick={() => startEditing(item.id, item.text)}
              className="bg-blue-700 text-white px-2 rounded text-sm focus:outline-none focus:ring-0"
            >
              Edit
            </button>
          )}

          <img
            onClick={() => deleteTodo(item.id)}
            // src="/delete.png"
            // alt="delete"
            // className="w-4 cursor-pointer"
          />
          {/* <img src={item.isComplete ? tick : not_tick} alt="" className="w-7" /> */}
          <img
            src={delete_icon}
            alt="delete"
            className="w-4 cursor-pointer"
            onClick={() => deleteTodo(item.id)}
          />


         
        </div>
      ))}
    </div>
  );
};

export default TodoList;
