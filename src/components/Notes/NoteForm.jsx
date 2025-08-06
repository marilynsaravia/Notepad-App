import { useState } from "react";

const NoteForm = ({ onSubmit, initialData = {}, submitLabel }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [category, setCategory] = useState(initialData.category || "");
  const [color, setColor] = useState(initialData.color || "violet");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, description, category, color });
  };

  const colors = ["yellow", "blue", "rose", "violet", "green", "fuchsia"];

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-700 p-5 rounded-2xl shadow-sm w-full h-[300px] flex flex-col justify-between"
    >
      {/* Title */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border  border-violet-400 rounded text-sm bg-white dark:bg-gray-600 dark:text-white focus:outline-none"
      />

      {/* Description */}
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded  border-violet-400 text-sm resize-none h-20 mt-2 bg-white dark:bg-gray-600 dark:text-white focus:outline-none"
      />

      {/* Category + Color picker */}
      <div className="w-full flex items-center gap-2 mt-2">
        <div className=" flex items-center gap-2 bg-violet-400 pl-2 rounded">
          <span className="text-xl font-mono text-white">#</span>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-1/2 p-1 border border-violet-400 rounded-r-sm text-sm flex-1 bg-white dark:bg-gray-600 dark:text-white focus:outline-none"
          />
        </div>

        <div className="flex gap-2">
          {colors.map((c) => (
            <button
              type="button"
              key={c}
              onClick={() => setColor(c)}
              className={`w-5 h-5 rounded-full cursor-pointer bg-${c}-300 border-2 ${
                color === c ? "border-violet-500" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-3 bg-violet-400 text-white py-2 rounded hover:bg-violet-300 cursor-pointer"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default NoteForm;