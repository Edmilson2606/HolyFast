import { useState } from 'react'
import { Link } from 'react-router-dom'

// CSS
import './Header.css'

// ASSETS
import Logo from '../../assets/logo.svg'

// CONTEXT
import { useAppContext } from '../../contexts/AppContext'

// COMPONENTS
import Button from '../Button/Button'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const { translate } = useAppContext()

    return (
        <header className="container header">
            
            <Link to="/"><img src={Logo} alt="Logo" /></Link>
            
            {/* <section className="header-nav">
                <nav className={`${isOpen ? 'open' : ''}`}>
                    <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>
                        X
                    </Button>
                    <ul>
                        <li><Link to="/">{translate('menu.home')}</Link></li>
                        <li><Link to="/fasting">{translate('menu.fasting')}</Link></li>
                        <li><Link to="/devotional">{translate('menu.devotional')}</Link></li>
                        <li><Link to="/contact">{translate('menu.contact')}</Link></li>
                    </ul>
                </nav>
            </section>

            <section className="mobile-menu">
                <Button buttonStyle="secondary" onClick={toggleMenu}>
                    Menu
                </Button>
            </section> */}

        </header>
    )
}

export default Header;