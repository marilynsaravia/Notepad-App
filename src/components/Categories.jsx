import notes from '../data/notes.json';

const Categories = () => {
  // Predefined color classes for Tailwind 4
  const colorClasses = {
    "green": "bg-green-300",
    "blue": "bg-blue-300",
    "yellow": "bg-yellow-300",
    "violet": "bg-violet-300",
    "rose": "bg-rose-300",
    "fuchsia": "bg-fuchsia-300" 
  };

  // Extract each category with its first matching color
  const categoryColors = {};
  notes.forEach(note => {
    if (note.category && !categoryColors[note.category]) {
      categoryColors[note.category] = note.color || "gray-200";
    }
  });

  // Get unique categories
  const uniqueCategories = Object.keys(categoryColors);

  return (
    <div className="w-full min-h-[60px] flex flex-wrap gap-2 justify-center items-center px-2 sm:px-4 md:px-12 py-2">
      {uniqueCategories.length > 0 && uniqueCategories.map((category, index) => (
        <div
          key={index}
          className="flex items-center bg-white dark:bg-gray-700 dark:text-gray-300 rounded-sm"
        >
          <div
            className={`${colorClasses[categoryColors[category]] || "bg-gray-200"} w-8 h-full flex items-center justify-center rounded-bl-sm rounded-tl-sm text-2xl font-mono dark:text-gray-700`}
          >
            #
          </div>
          <div className="px-2">
            <p className="text-base capitalize whitespace-nowrap">{category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
