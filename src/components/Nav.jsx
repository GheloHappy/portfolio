import '../css/nav.css'
import propic from '../assets/img/propic.jpg'

const Nav = () => {
    return (
        <div className='outer'>
            <div className='inner'>
                <img className='propic' src={propic} alt="Profile Picture" />
            </div>
        </div>
    )
}

export default Nav;