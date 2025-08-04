import notes from '../data/notes.json';

const Notes = () => {

  return (
    <div className="w-full h-auto grid grid-cols-5 px-12 gap-2 mt-12">

      {/* Card reserved for adding a new note */}
      <div className="w-[350px] h-[400px] bg-violet-400 rounded-2xl shadow-sm hover:bg-violet-300 active:bg-violet-300">
        <button className="w-full h-full cursor-pointer bg-transparent flex justify-center items-center text-6xl text-white font-mono">+</button>
      </div>

      {/* Render the rest of the notes */}
      {notes.map((note) => (
        <div
          key={note.id}
          className={`w-[350px] h-[400px] bg-${note.color} rounded-2xl shadow-sm p-6 flex flex-col justify-between`}
        >
          <div>
            <h2 className="text-3xl font-semibold">{note.title}</h2>
            <p className="mt-4 text-base">{note.description}</p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Notes;
