import React, { useState} from "react";
import { Link } from "react-router-dom";
import "../Join/Join.css";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="joinForm">
      <div className="joinInner">
        <header>
          <h1>
            FalcoN <p>Chat</p>
          </h1>
        </header>
        <h1>Create Room</h1>
        <input
          placeholder="Name"
          className="joinName"
          type="text"
          maxLength="10"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="Room"
          className="joinRoom"
          type="text"
          maxLength="10"
          onChange={(event) => setRoom(event.target.value)}
        />
        <Link
          className="joinSubmit"
          onClick={(event) =>
            !name || !room
              ? (event.preventDefault(), alert("Enter name and room"))
              : null
          }
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="joinSubmit_button" type="submit">
            Create
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
