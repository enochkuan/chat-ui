import React from "react";
import ReactDOM from "react-dom";
import styles from "../messageList.scss";
import avatar from '../assets/enoch-avatar.jpg'
import {Image} from 'semantic-ui-react'
import styled from 'styled-components';

const Avatar = styled.div`
      img{
      }`;



class MessageList extends React.Component {
  // constructor(){
  //     super()
  // }
  // //called on button press
  // avatarUpload(){
  //   var input =  document.createElement('file')
  //   input.type = 'file'
  //   input.onClick = e => {
  //     var file = e.target.files[0]
  //     var newFile = new File(['file'], 'avatar.jpg', {type: file.type})
  //   }
  //   this.setState({
  //     avatar: "file.name",
  //     permAvatar: "file.name"
  //   })
  // }
  // <button className = "avatar-upload" onClick = "avatarUpload()">
  //     Upload a .jpg for your Avatar
  // </button>

// <Image className = "avatar" src={avatar}/>
  render() {
    return (
      <div className= "middle">
          <div className = "message-list-body">
              <ul className = "message-list">
                  {this.props.messages.map(item => (
                      <li className="text" key={item}>
                      
                      {this.props.username} &emsp;&emsp;&emsp;&emsp;{item}
                    </li>))}

              </ul>
          </div>
          <div className="side">
            <h2> Users Online </h2>
              <ul className = "users-online">

                  <Image className = "avatar" src={avatar}/>
                  {this.props.username}
              </ul>
          </div>
      </div>

    )
  }
}

export default MessageList;
