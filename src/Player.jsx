import { useState } from "react";

export default function ({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  let playerName = <span className="player-name">{name}</span>;
  //let clickBtn = "Edit";

  if (isEditing) {
    playerName = <input type="text" required />;
    //clickBtn = "Save"
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
