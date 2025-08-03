import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Notes from './components/Notes'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-gray-50 dark:bg-gray-800 w-full h-screen flex flex-col p-3 font-sans'> 
      <Navbar />
      <Categories />
      <Notes />
      <Footer />
    </div>
  );
}

export default App
