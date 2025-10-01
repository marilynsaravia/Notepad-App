// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes/Notes";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-50 dark:bg-gray-800 min-h-screen flex flex-col p-3 font-sans">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Notes now contains the categories bar inside */}
      <Notes searchTerm={searchTerm} />

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
