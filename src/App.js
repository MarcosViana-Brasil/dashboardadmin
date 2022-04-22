import { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css'

import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const openSidebar = () => {
        setSidebarOpen(true)
    }

    const closeSidebar = () => {
        setSidebarOpen(false)
    }

    return (
        <div className="container">
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            <Main />
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    )
}

export default App
