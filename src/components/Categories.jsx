import notes from '../data/notes.json';

const Categories = () => {
  // 1. Extract all categories
  const allCategories = notes.map(note => note.category).filter(Boolean);

  // 2. Remove duplicates
  const uniqueCategories = [...new Set(allCategories)];

  return (
    <div className='w-full h-[100px] flex gap-2 justify-center items-center px-12'>
      {uniqueCategories.length > 0 && uniqueCategories.map((category, index) => (
        <div
          key={index}
          className="w-auto h-[30px] flex justify-start items-center bg-white dark:bg-gray-700 dark:text-gray-300 rounded-sm"
        >
          <div className="w-8 h-full flex items-center justify-center bg-green-300 rounded-bl-sm rounded-tl-sm text-2xl font-mono dark:text-gray-700">
            #
          </div>
          <div className="w-auto">
            <p className="text-left px-2 text-base capitalize">{category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
