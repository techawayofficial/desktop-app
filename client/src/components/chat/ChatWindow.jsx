import React from 'react'
import ChatUserMessage from './ChatUserMessage'
import ChatAIMessage from './ChatAIMessage'

/**
 * ------------------------------------------------------------------------------------------------
 * ChatWindow 
 * ------------------------------------------------------------------------------------------------
 * 
 * This component is used to display a chat window. It displays the chat window in a container.
 * 
 * @returns {JSX.Element}
 */
function ChatWindow() {

  return (
    <div id="chat-window" className="flex-1 space-y-6 overflow-y-auto bg-gray-950 p-6">  
        {/* TODO: ChatAIMessage */}
        <ChatAIMessage />

        {/* TODO: ChatUserMessage */}
        <ChatUserMessage />
    </div>
  )
}

export default ChatWindow
