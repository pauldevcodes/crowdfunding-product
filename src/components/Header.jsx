import logo from '../images/logo.svg';
import closeMenu from '../images/icon-close-menu.svg'
import hamburger from '../images/icon-hamburger.svg'
import { useState } from 'react';

const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false)

    const handleMenuClick = () => {
        setMenuIcon(!menuIcon)
    }

    return (
        <header className=' absolute w-full'>
            <div className=' mx-6 mt-8 flex items-center justify-between'>
                <div>
                    <img src={logo} alt="Company's logo" />
                </div>

                <div className=' md:hidden'>
                    {menuIcon
                        ?
                        <button onClick={handleMenuClick}>
                            <img src={closeMenu} alt="" />
                        </button>
                        :
                        <button onClick={handleMenuClick}>
                            <img src={hamburger} alt="" />
                        </button>
                    }
                </div>

                {/* <ul>
                <li>
                    
                </li>
            </ul> */}
            </div>
        </header>
    );
}

export default Header;