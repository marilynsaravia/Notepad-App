import notes from '../data/notes.json';

const Notes = () => {
  return (
    <div className="w-full grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 sm:px-6 lg:px-12 gap-4 mt-12">

      {/* Card reserved for adding a new note */}
      <div className="w-full max-w-sm h-[400px] bg-violet-400 rounded-2xl shadow-sm hover:bg-violet-300 active:bg-violet-300 mx-auto">
        <button className="w-full h-full cursor-pointer bg-transparent flex justify-center items-center text-6xl text-white font-mono">
          +
        </button>
      </div>

      {/* Render the rest of the notes */}
      {notes.map((note) => (
        <div
          key={note.id}
          className={`w-full max-w-sm h-[400px] bg-${note.color} rounded-2xl shadow-sm p-6 flex flex-col justify-between mx-auto`}
        >
          <div>
            <h2 className="text-2xl font-semibold">{note.title}</h2>
            <p className="mt-4 text-base">{note.description}</p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Notes;
