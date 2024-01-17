import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setEditName(event.target.value);
  }

  let playerName = <span className="player-name">{editedName}</span>;
  //let clickBtn = "Edit";

  if (isEditing) {
    playerName = (
      <input type="text" required onChange={handleChange} value={editedName} />
    );
    //clickBtn = "Save"
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
