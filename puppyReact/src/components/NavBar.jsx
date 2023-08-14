import React, { useState } from "react";
import { addNewPlayer } from "../AjaxHelpers/puppies";
import { fetchAllPlayers } from "../AjaxHelpers/puppies";
import styles from "../css/NavBar.module.css";

export default function NavBar({ players, setPlayers }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // New state for search


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDog = await addNewPlayer({ name, breed });
    const allPlayers = await fetchAllPlayers();
    setPlayers(allPlayers);
    console.log(newDog);

    // Clear input fields after submission
    setName("");
    setBreed("");
  };

  const handleSearch = () => {
    const filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPlayers(filteredPlayers);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className={styles.label}>Breed:</label>
      <input
        type="text"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <button className={styles.btn} type="submit">
        Submit
      </button>

     
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search players by name..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className={styles.btn} onClick={handleSearch}>
          Search
        </button>
      </div>



    </form>
  );
}
