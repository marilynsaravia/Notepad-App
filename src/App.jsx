import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Notes from './components/Notes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 dark:bg-gray-800 font-sans"> 
      <Navbar />
      <Categories />
      <Notes />
      <Footer />
    </div>
  );
}

export default App
