import React, { useEffect, useState } from "react";
import { fetchAllPlayers } from "../AjaxHelpers/puppies";
import PlayerCard from "./PlayerCard";
import NavBar from "./NavBar";
import styles from "../css/AllPlayers.module.css";

export default function AllPlayers({ players, setPlayers }) {
    useEffect(() => {
        // Fetch players once when the component mounts
        async function getAllPlayers() {
          const allPlayers = await fetchAllPlayers();
          setPlayers(allPlayers);
        }
        getAllPlayers();
      }, [setPlayers]);

  return (
    <div className={styles.container}>
      <NavBar players={players} setPlayers={setPlayers} />
      {players.map((player) => {
        return <PlayerCard key={player.id} player={player} />;
      })}
    </div>
  );
}
