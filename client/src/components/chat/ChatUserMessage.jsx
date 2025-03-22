import React from 'react'

/**
 * ------------------------------------------------------------------------------------------------
 * ChatUserMessage
 * ------------------------------------------------------------------------------------------------
 * 
 * This component is used to display a message from the user. It displays the user's message in a 
 * message bubble.
 * 
 * @returns {JSX.Element}
 */
function ChatUserMessage() {

  return (
    <div className="flex items-start justify-end space-x-3">
        <div className="max-w-lg rounded-lg bg-blue-600 p-3 text-white">
            <p>What are utility-first CSS frameworks?</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 font-bold">U</div>
    </div>
  )
}

export default ChatUserMessage
