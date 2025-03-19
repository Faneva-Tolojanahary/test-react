import { useState } from "react";

export default function CrudApp() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = input;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, input]);
    }
    setInput("");
  };

  const handleEdit = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Nos tâches </h2>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 flex-1  focus:outline-none  border-b"
          placeholder="Ajouter un élément"
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
          {editIndex !== null ? "Modifier" : "Ajouter"}
        </button>
      </form>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
            <span>{item}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className=" text-blue-300 px-2 py-1 rounded-md cursor-pointer"
              >
                <i className="fas fa-edit"></i>
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-300 px-2 py-1 rounded-md cursor-pointer"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
