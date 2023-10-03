import '../css/nav2.css'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import propic from '../assets/img/propic_v4.png'
import flag from '../assets/img/ph.png'
import email_ico from '../assets/img/email.png'

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        // <div className='outer'>
        //     <div className='inner'>
        //         <img className='propic' src={propic} alt="Profile Picture" />
        //         <span><img className='flag' src={flag} alt="flag"/></span>
        //         <div className="menu" onClick={() => {
        //             setMenuOpen(!menuOpen)
        //         }}>
        //             <span></span>
        //             <span></span>
        //             <span></span>
        //         </div>
        //         <div className={menuOpen ? "open" : ""} >
        //             <div className='links' >
        //                 <div className='link'><a href='/'>Home</a></div>
        //                 <div className='link'><a href='#'>About</a></div>
        //                 <div className='link'><a href='#'>Projects</a></div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='contact'>
        //         <span ><img className='email-ico' src={email_ico} /> </span>
        //         <a href='#'>Contact Me</a>
        //     </div>
        // </div>
        <nav>
            < div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                {/* <li>
                    <img className='propic' src={propic} alt="Profile Picture" />
                </li> */}
            </ul>
        </nav>
    )
}

export default Nav;