import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react"; // Import useState and useEffect

import "./App.css";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import { fetchAllPlayers } from "./AjaxHelpers/puppies";


function App() {

  const [players, setPlayers] = useState([]); // Initialize players array

  useEffect(() => {
    // Fetch players once when the app starts
    async function fetchPlayers() {
      const allPlayers = await fetchAllPlayers();
      setPlayers(allPlayers);
    }
    fetchPlayers();
  }, []);
  

  return (
    <div className="container">
      <h1>The Puppy Bowl</h1>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPlayers players={players} setPlayers={setPlayers} />} />

        <Route path="/:id" element={<SinglePlayer />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;