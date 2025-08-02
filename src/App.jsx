import Navbar from './components/Navbar'
import Notes from './components/Notes'
import Footer from './components/Footer'

function App() {

  return (
    <div className='w-full h-screen flex flex-col p-3 font-sans'> 
      <Navbar/>
      <Notes/>
      <Footer/>
    </div>
  )
}

export default App
