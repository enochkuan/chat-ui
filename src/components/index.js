
//This is your top level React component, you may change everything

import React from 'react'
import logo from '../assets/spotim-logo.jpg'
import MessageList from './messageList.js'
import TextBox from './textBox.js'
import {Container, Image} from 'semantic-ui-react'
import styled from 'styled-components';
import io from "socket.io-client";

const Logo = styled.div`
      img{
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
        border-radius: 25%;
      }
`;

class App extends React.Component {
  constructor(props){
    super(props)
    var usernameHold = prompt("Choose a username less than 10 characters", "enoch")
    while(usernameHold == "" ||
        usernameHold === null ||
        usernameHold.length > 10 ){
      alert("You need a username less than 10 characters")
      var usernameHold = prompt("Choose a username less than 10 characters", "enoch")
        }

      this.state = {
        messages:[],
        username: usernameHold,
        message: "",
        }

        // permUsername: usernameHold,
        // permAvatar:"",

    this.addtoList = this.addtoList.bind(this)
  }

    //this takes data from socket
    // socket.on('message', function(data){
    //   addMessage(data)
    // })
    // addtoList(data){
    //   this.setState(data)
    //   var text = this.state.message
    //   return this.state
    // }

    addtoList(){
      this.setState(state => {
          const list = [this.props.message, ...this.state.messages];
       return this.state.messages
    })
    this.setState({messages: list})
  }

  //text looks like {avatar:"...",username:"...",text:"..."'}


  render() {
    return(
    <div>
      <Container className={'spotim-header'}>

        <div className={'spotim-title'}>
            <div className = "title1"> Spot.IM </div>
            <div className = "title2"> webChat </div>
        </div>

        <div className = "logo">
          <Logo>
            <Image size={'tiny'} src={logo}/>
          </Logo>
        </div>

      </Container>
      <div className = "lower-control">
        <MessageList
          messages = {this.state.messages}
          username = {this.state.username}
          />
        <TextBox
          message = {this.state.message}
        />
      </div>
    </div>
  )}
}
export default App;
