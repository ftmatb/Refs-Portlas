import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  // function handleClick() {
  //   setEnteredPlayerName(playerName.current.value);
  //   playerName.current.value = ""; // Clear the input field after setting the name
  // }

  function handleClick() {
    const name = playerName.current.value.trim(); // trim spaces
    if (name === "") {
      setEnteredPlayerName(null); // reset to fallback
    } else {
      setEnteredPlayerName(name);
    }
    playerName.current.value = ""; // clear input
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown player"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
