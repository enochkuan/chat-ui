import React from "react";
import ReactDOM from "react-dom";
import styles from "../textBox.scss";

// socket.emit('message', {
//   avatar: this.prop.permAvatar,
//   username: this.prop.permUsername,
//   message: this.state.message
// })

class TextBox extends React.Component {
  constructor(){
    super()
    this.state = {message: ""}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    this.setState({ message: e.target.value })
  }
  handleSubmit(e){
    e.preventDefault(); //this prevents empty messages from sending
      this.addtoList()
    this.setState({
      message: ""
    });
  }

  render(){
    return(

      <div className = "textbox-all">
          <form onSubmit = {this.handleSubmit} className = "textbox-middle">
            <button className="button" onclick="{this.handleSubmit}"> S E N D </button>
              <input
                className = "input"
                value = {this.state.message}
                onChange = {this.handleChange}
                placeholder = "Type Message..."
                type = "text"
                size = "100"/>
          </form>
      </div>
    )
  }
}

export default TextBox
