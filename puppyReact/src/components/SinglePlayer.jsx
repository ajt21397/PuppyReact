import React from "react";
import { useState, useEffect } from "react";
import { fetchSinglePlayer, removePlayer } from "../AjaxHelpers/puppies";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../css/SinglePlayer.module.css";

export default function SinglePlayer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [player, setPlayer] = useState("");
  useEffect(() => {
    async function getDog() {
      const dogFromApi = await fetchSinglePlayer(id);

      setPlayer(dogFromApi);
    }
    getDog();
  }, []);
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>{player.name}</h4>
      <p className={styles.teamId}>Team:{player.teamId}</p>
      <p className={styles.breed}>Breed:{player.breed}</p>
      <p className={styles.status}>Status:{player.status}</p>
      <img
        className={styles.image}
        src={player.imageUrl}
        alt="Picture of player"
      />
      <button className={styles.btn} onClick={() => navigate("/")}>
        Back to players
      </button>
      <button
        className={styles.btn}
        onClick={async (e) => {
          await removePlayer(id);
          navigate("/");
        }}
      >
        Delete Player
      </button>
    </div>
  );
}