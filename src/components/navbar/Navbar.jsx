import { useState } from 'react'
import './Navbar.scss'

const Navbar = ({ sendToParent }) => {

    const [mode, setMode] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const handleSwitchMode = () => {
        const newMode = !mode
        setMode(newMode)
        sendToParent(newMode)
    }

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }


    return (
        <nav className={`navbar-container ${mode ? "dark-mode" : ""}`}>
            <div className="logo">KopalMuhamad();</div>
            <div className="responsive" onClick={handleMenu}>
                <i className='bx bx-menu'></i>
            </div>
            <div className="wrapper-switch-mode" onClick={handleSwitchMode}>
                {mode ? <i className='bx bx-sun switch-mode'></i> : <i className='bx bx-moon switch-mode'></i>}
            </div>
            <ul className={`list ${showMenu ? "show" : ""}`}>
                <li className="list-item"><a href="#" className="link">Home</a></li>
                <li className="list-item"><a href="#" className="link">About</a></li>
                <li className="list-item"><a href="#" className="link">Projects</a></li>
                <li className="list-item"><a href="#" className="link">Portfolio</a></li>
                <li className="list-item"><a href="#" className="link">Skills</a></li>
                {mode ? <li className="list-item" onClick={handleSwitchMode} ><a href="#" className="link switch-in-nav-list"><i className='bx bx-sun'></i></a></li> :
                    <li className="list-item" onClick={handleSwitchMode} ><a href="#" className="link switch-in-nav-list"><i className='bx bx-moon'></i></a></li>
                }

            </ul>
        </nav>
    )
}

export default Navbar
