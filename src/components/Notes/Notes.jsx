import { useState } from "react";
import notesData from '../../data/notes.json';
import AddNote from './AddNote';

const Notes = ({ searchTerm, selectedCategory }) => {
  const [notes, setNotes] = useState(notesData);

  const colorClasses = {
    "green": "bg-green-300",
    "blue": "bg-blue-300",
    "yellow": "bg-yellow-300",
    "violet": "bg-violet-300",
    "rose": "bg-rose-300",
    "fuchsia": "bg-fuchsia-300"
  };

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? note.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const handleAddNote = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
  };

  return (
    <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 sm:px-6 lg:px-12 gap-4 mt-12">
      <AddNote onAdd={handleAddNote} />

      {filteredNotes.map((note) => (
        <div
          key={note.id}
          className={`${colorClasses[note.color] || 'bg-gray-200'} rounded-2xl shadow-sm p-6 flex flex-col justify-between h-[300px]`}
        >
          <div>
            <h2 className="text-3xl font-semibold">{note.title}</h2>
            <p className="mt-4 text-base whitespace-pre-line">{note.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notes;
