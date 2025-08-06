import { useState } from "react";
import NoteForm from "./NoteForm";

const AddNote = ({ onAdd }) => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="h-[300px]">
      {isAdding ? (
        <NoteForm
          submitLabel="Create"
          onSubmit={(newNote) => {
            onAdd(newNote);
            setIsAdding(false);
          }}
        />
      ) : (
        <div
          onClick={() => setIsAdding(true)}
          className="bg-violet-400 rounded-2xl shadow-sm hover:bg-violet-300 active:bg-violet-300 h-full flex items-center justify-center cursor-pointer"
        >
          <span className="text-6xl text-white font-mono">+</span>
        </div>
      )}
    </div>
  );
};

export default AddNote;
