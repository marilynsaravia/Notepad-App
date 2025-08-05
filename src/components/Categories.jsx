import { useState } from 'react';
import notes from '../data/notes.json';

const Categories = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Predefined Tailwind color classes
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

  const uniqueCategories = Object.keys(categoryColors);

  const handleClick = (category) => {
    const newCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newCategory);
    if (onCategorySelect) onCategorySelect(newCategory);
  };

  return (
    <div className="w-full min-h-[60px] flex flex-wrap gap-2 justify-center items-center px-2 sm:px-4 md:px-12 py-2">
      {uniqueCategories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleClick(category)}
          className={`flex items-center rounded-sm transition cursor-pointer
            ${selectedCategory === category ? 'ring-1 ring-violet-400 shadow-md' : ''}`}
        >
          <div
            className={`${colorClasses[categoryColors[category]] || 'bg-gray-200'} 
              w-8 h-[30px] flex items-center justify-center 
              rounded-bl-sm rounded-tl-sm text-2xl font-mono dark:text-gray-700`}
          >
            #
          </div>
          <p className="px-2 h-[30px] flex items-center text-base capitalize whitespace-nowrap bg-white dark:bg-gray-700 dark:text-gray-300 rounded-tr-sm rounded-br-sm">
            {category}
          </p>
        </button>
      ))}
    </div>
  );
};

export default Categories;
