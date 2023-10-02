import '../css/nav.css'
import propic from '../assets/img/propic_v4.png'
import email_ico from '../assets/img/email.png'

const Nav = () => {
    return (
        <div className='outer'>
            <div className='inner'>
                <img className='propic' src={propic} alt="Profile Picture" />
                {/* <span>Ghelonico Maligaya</span> */}
                <div className='links'>
                    <div className='link'><a href='/'>Home</a></div>
                    <div className='link'><a href='#'>About</a></div>
                    <div className='link'><a href='#'>Projects</a></div>
                </div>
            </div>
            <div className='contact'>
                <span ><img className='email-ico' src={email_ico} /> </span>
                <a href='#'>Contact Me</a>
            </div>
        </div>
    )
}

export default Nav;