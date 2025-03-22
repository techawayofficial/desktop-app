import React from 'react';

/**
 * ------------------------------------------------------------------------------------------------
 * Sidebar
 * -------  -----------------------------------------------------------------------------------------
 * 
 * This component is used to display a sidebar. It displays the sidebar in a container.
 * 
 * @returns {JSX.Element}
 */
const Sidebar = () => {
  return (
    <aside className="flex w-64 flex-col border-r border-gray-700 bg-gray-800">

        <div className="border-b border-gray-700 p-4">
            <h2 className="text-xl font-bold">🤖 Chat AI</h2>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto p-4">
            
            <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-left font-medium hover:bg-blue-700">+ New Chat</button>
            
            <nav className="space-y-2 text-sm">
                <p className="tracking-wide text-gray-400 uppercase">Recent</p>
                <ul className="space-y-1">
                    <li><a href="#" className="block rounded px-3 py-2 hover:bg-gray-700">TailwindCSS Overview</a></li>
                    <li><a href="#" className="block rounded px-3 py-2 hover:bg-gray-700">React Troubleshooting</a></li>
                </ul>
            </nav>
        </div>

        <div className="border-t border-gray-700 p-4">
            <button className="w-full text-left text-sm text-gray-400 hover:text-white">⚙️ Settings</button>
        </div>
    </aside>
  );
};

export default Sidebar;
