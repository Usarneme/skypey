import React, { Component } from 'react'

const Chat = ({ message }) => {
  const { text, is_user_msg } = message
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  )
}

class Chats extends Component {
  constructor(props) {
    super(props)
    this.chatsRef = React.createRef()
  }

  // helper method to scroll to the bottom of the chats window
  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight
  }
  // lifecycle methods to ensure we start at the bottom (most current) message
  componentDidMount() {
    this.scrollToBottom()
  }
  componentDidUpdate() {
    this.scrollToBottom()
  }

  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    )
  }
}

export default Chats