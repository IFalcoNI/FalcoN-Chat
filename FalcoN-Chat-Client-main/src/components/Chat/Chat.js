import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "../Chat/Chat.css";
import Info from "../Info/Info";
import Input from "../input/Input";
import Messages from "../Messages/Messages";

let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const ENDPOINT = "https://falcon-chat.herokuapp.com/";
  // const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT, {
      transports: ["websocket", "polling", "flashsocket"],
    });
    setName(name);
    setRoom(room);
    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnected");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  useEffect(() => {
    socket.on("usersList", (user) => {
      setUsers([...users, user]);
      let ol = document.createElement("ol");
      let allUsers = user.users;
      allUsers.forEach((usrs) => {
        let Username = usrs.name;
        if (socket.id === usrs.id) {
          let p = document.createElement("p");
          let li = document.createElement("li");
          p.innerHTML = Username;
          li.appendChild(p);
          ol.appendChild(li);
        } else {
          let li = document.createElement("li");
          li.innerHTML = Username;
          ol.appendChild(li);
        }
      });
      let UsersInRoom = document.querySelector("#users");
      UsersInRoom.innerHTML = "";
      UsersInRoom.appendChild(ol);
    });
  }, [users]);
  return (
    <div className="chatFrame">
      <div className="chatBox">
        <Info room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
