import './skills.css'
import org from '/assets/org-logo.png'
import UIUX from '/assets/UIUX.jpeg'
import testing from '/assets/testing.jpg'
import websites from '/assets/ui-design.webp'

type Props = {}

export default function Skills({}: Props) {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <div className='skillbars'>
        <div className='skillbar' style={{ display: 'flex' , alignItems: 'center', backgroundColor: 'black'}}>
          <a href='https://griffyn.io/' target='_blank' style={{ color: 'white'}} title='link'>
            <img src={ org } alt='UIDesign' style={{ marginRight: "2rem"}}/>
          </a>
          <div className='skillBarText'>
            <p>I have been working at</p>
            <a href='https://griffyn.io/' target='_blank' style={{ color: 'white'}} title='link'><h2>Griffyn Robotech.PVT.LTD</h2></a>
            <p>as <b>Software Developer</b> since July 2021</p>
          </div>
      </div>
      </div>
      {/* <span className='skillDesc'>
      I am skilled and passionate frontend developer with experience in
        creating visually appealing and user-friendly websites. I am proficient
        in HTML, CSS, Javascript, as well as its library like React.js and css
        framework like Bootstrap. Knowledge of Testing library like Jest and
        React Testing framework which helps to develope errorless websites.
      </span> */}

      <div className='skillbars'>
        <div className='skillbar'>
          <img src={ UIUX } alt='UIDesign' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Web Development</h2>
            <p>
              Collaborated with a cross-functional team to design and implement
              responsive user interfaces using React.js, javaScript, HTML5, and
              CSS3, ensuring a seamless user experience across different devices
            </p>
          </div>
        </div>

        <div className='skillbar'>
          <img src={websites} alt='webDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>UI Design</h2>
            <p>Creating and maintaining user interface components using React Material and Bootstrap and make sure UI is responsive across various devices and screen sizes.</p>
          </div>
        </div>

        <div className='skillbar'>
          <img src={testing} alt='appDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Unit Testing</h2>
            <p>Writing tests to verify the behavior of individual React components, ensuring they render correctly, handle props/state, and interact as expected.</p>
          </div>
        </div>
      </div>
    </section>
  );
}