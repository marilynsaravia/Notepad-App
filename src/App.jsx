import { useState } from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Notes from './components/Notes/Notes';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState(null);

  const handleCategorySelect = (category) => {
    // Si se selecciona de nuevo la misma categoría, se desactiva
    setFilterCategory(prev => (prev === category ? null : category));
  };

  return (
    <div className='bg-gray-50 dark:bg-gray-800 min-h-screen flex flex-col p-3 font-sans'>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Categories selectedCategory={filterCategory} onCategorySelect={handleCategorySelect} />
      <Notes searchTerm={searchTerm} selectedCategory={filterCategory} />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
