
import './intro.css'
import profileImg from '/assets/profile-1.png'
import hireMeImg from '/assets/suitcase.png'
import resume from '/assets/Suraj_Kamble_Resume.pdf'

type Props = {}

export default function Intro({}: Props) {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className='introName'> Suraj</span> <br/> Software Developer</span>
            <p className='introPara'>I am a skilled Frontend developer with 2+ years of experience <br/> in creating visually appealing and user friendly websites.</p>
            <a href={resume} download><button className="btn" style={{ cursor : 'pointer'}} title='Download Resume'><img src={ hireMeImg } alt='hirelogo' className='hireMe'/>Hire me</button></a>
        </div>
        <img src={profileImg} alt="profileImg" className='bg'/>
    </section>
  )
}