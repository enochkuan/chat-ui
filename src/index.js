
//This is then entry point for your app. Do as you wish.

import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components";
import io from "socket.io-client";


const app = document.getElementById('root');
ReactDOM.render((<App />),app);


// //connecting to Socket.IO chat server
// //"https://spotim-demo-chat-server.herokuapp.com"
// //Event name: spotim/chat
// const socket = io("https://spotim-demo-chat-server.herokuapp.com");
// socket.on("connect", function() {
//   console.log("connected to chat server!");
// });
// socket.on("disconnect", function() {
//   console.log("disconnected from chat server!");
// });
//
// socket.listen(3450);
// //reciving messages
// socket.on('message', function (data) {
//   ;
// });
//
// // Send the message to the server
// socket.emit('message', {
//   avatar: "????"
//   username: cookie.get("username") || "Anonymous",
//   message: message
// });
//
// // When the form is submitted
// $('form').submit(function (e) {
//   // Avoid submitting it through HTTP
//   e.preventDefault();
//
// //put inside component index
//   // Retrieve the message from the user
//   var message = (e.target).find('input').val();



  // Clear the input and focus it for a new message
//   e.target.reset();
//   $(e.target).find('input').focus();
// });
