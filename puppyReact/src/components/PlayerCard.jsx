import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/PlayerCard.module.css";

export default function PlayerCard({ player }) {
  const navigate = useNavigate();
  return (
    <div key={player.id} className={styles.container}>
      <h2 className={styles.name}>
        {player.name} {player.id}
      </h2>
      {/* <h3>{player.imageUrl}</h3> */}
      <img
        className={styles.pupPic}
        src={player.imageUrl}
        alt="picture of player"
      />
      <button className="btn" onClick={() => navigate(`${player.id}`)}>
        See Details
      </button>
    </div>
  );
}