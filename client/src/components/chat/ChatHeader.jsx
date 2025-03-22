import React from 'react'

/**
 * ------------------------------------------------------------------------------------------------
 * ChatHeader
 * ------------------------------------------------------------------------------------------------
 * 
 * This component is used to display a chat header. It displays the chat header in a container.
 * 
 * @returns {JSX.Element}
 */
function ChatHeader() {

  return (
    <header className="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-6 py-4">
        <h1 className="text-lg font-semibold">Chat Session</h1>
        <span className="text-sm text-green-400">AI is Online</span>
    </header>
  )
}

export default ChatHeader
