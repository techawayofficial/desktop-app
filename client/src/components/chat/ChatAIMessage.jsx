import React from 'react'

/**
 * ------------------------------------------------------------------------------------------------
 * ChatAIMessage
 * ------------------------------------------------------------------------------------------------
 * 
 * This component is used to display a message from the AI. It displays the AI's message in a 
 * message bubble.
 * 
 * @returns {JSX.Element}
 */
function ChatAIMessage() {

  return (
    <div className="flex items-start space-x-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">AI</div>
        <div className="max-w-lg rounded-lg bg-gray-800 p-3">
            <p>Hello! How can I assist you today?</p>
        </div>
    </div>
  )

}

export default ChatAIMessage
