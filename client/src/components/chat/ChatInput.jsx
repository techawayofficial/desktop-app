import React from 'react'

/**
 * ------------------------------------------------------------------------------------------------
 * ChatInput
 * ------------------------------------------------------------------------------------------------
 * 
 * This component is used to display a chat input. It displays the chat input in a form.
 * 
 * TODO: Refactor code
 * 
 * @returns {JSX.Element}
 */
function ChatInput() {

  return (
    <form className="flex items-center space-x-3 border-t border-gray-700 bg-gray-800 p-4" onsubmit="handleSubmit(event)">
        <input id="user-input" type="text" placeholder="Type your message..." className="flex-1 rounded-lg bg-gray-700 px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
        <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">Send</button>
    </form>
  )
}

export default ChatInput
