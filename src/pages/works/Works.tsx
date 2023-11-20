import reactImg from '/assets/imp-mobile.png';
import javascriptImg from '/assets/uvss.png';

import './works.css';

type Props = {};

export default function Works({}: Props) {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Projects</h2>
      <span className='worksDesc'>
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help buisnesses achive their goal.
      </span>
      <span className='worksDesc'>
        Following are some projects that I have worked on.
      </span>
      <div className='worksImgs'>
        <a href='https://griffyn.io/impersonator/' target='_blank'>
          <div className='project'>
            <img src={reactImg} alt='img' className='worksImg' />
            <h4>Impersonator Mobile</h4>
          </div>
        </a>
        <a href='https://griffyn.io/uluka-vehicle-surveillance-system/' target='_blank'>
          <div className='project'>
            <img src={javascriptImg} alt='img' className='worksImg' />
            <h4>UVSS</h4>
          </div>
        </a>
      </div>
      <a
        href='https://griffyn.io/'
        target='_blank'
        style={{ cursor: 'pointer' }}
      >
        <button className='worksBtn' style={{ cursor: 'pointer' }} title='Learn more about this products'>
          Learn More
        </button>
      </a>
    </section>
  );
}
