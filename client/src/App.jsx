import React from 'react'

import Sidebar from './components/sidebar/Sidebar'
import ChatInput from './components/chat/ChatInput'
import ChatHeader from './components/chat/ChatHeader'
import ChatWindow from './components/chat/ChatWindow'

/**
 * ------------------------------------------------------------------------------------------------
 * App
 * ------------------------------------------------------------------------------------------------
 * 
 * This component is used to display the main app. It displays the app in a container.
 * 
 * @returns {JSX.Element}
 */
function App() {

  return (

    <div className="bg-gray-900 text-white min-h-screen flex">
      {/* TODO: Sidebar */}
      <Sidebar />

      {/* TODO: ChatContainer */}
      <main className="flex h-screen flex-1 flex-col overflow-hidden">
  
        {/* TODO: ChatHeader */}
        <ChatHeader />

        {/* TODO: ChatWindow */}
        <ChatWindow />

        {/* TODO: ChatInput */}
        <ChatInput />
      </main>
    </div>
  )
}

export default App
