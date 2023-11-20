import './Navbar.css'
import Logo from '/assets/suitcase.png';
import Menu from '/assets/menu-bar.png';
import contactImg from '/assets/email.png'
import { Link } from 'react-scroll'
import { useState } from 'react';

type Props = {}

export default function Navbar({}: Props) {
  const [ showMenu , setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <Link to='intro' offset={-100}><img src={Logo} alt='logo' className='logo'/></Link>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Experience</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
        </div>
        <button className='desktopMenuBtn' onClick={ () => {
          document.getElementById('contacts')?.scrollIntoView({ behavior : 'smooth'});
        }}>
            <img src={contactImg} alt="contactImg" className="desktopMenuImg" />
            Contact me
        </button>

        <img src={Menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display : showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to='contacts' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>

        </div>
    </nav>
  )
}