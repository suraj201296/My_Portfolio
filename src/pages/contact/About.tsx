import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import JS from '/assets/javascript.png'
import HTML from '/assets/html.png'
import CSS from '/assets/css.png'
import REACT from '/assets/react.png'
import TYPESCRIPT from '/assets/ts.png'
import JQUERY from '/assets/jquery.png'
import REDUX from '/assets/redux.png'
import HOOKS from '/assets/hooks.png'
import MATERIALUI from '/assets/MUI.png'
import BOOTSTRAP from '/assets/bootstrap.png'
import JEST from '/assets/jest.png'
import JIRA from '/assets/jira.png'
import MYSQL from '/assets/mysql.png'
import POSTMAN from '/assets/postman.png'


import { useState } from 'react';

type Props = {};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function About({}: Props) {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    e.preventDefault();
    setValue(newValue);
  };

  return (
    <div id='clients'>
      <h1 className='contactPageTitle'>My Education</h1>
      {/* <p className='clientDesc'>
        I have had the opportunity to work with a diverse group of companies.
        Some of notable companies I have worked with includes
      </p> */}

      <div className='aboutMe'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Education' {...a11yProps(0)} style={{ color : 'white'}} />
          <Tab label='Skills' {...a11yProps(1)}  style={{ color : 'white'}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="education">
            <li>2020-21</li>
            <h3>Post-Graduate Diploma CDAC - ( 69% )</h3> 
            <p>Diploma In Advance Computing</p>
            <span>Sunbeam Institue pune,karad</span>
        </div>

        <div className="education">
            <li>2013-17</li>
            <h3>BE - Mechanical Engineering - ( 61% )</h3> 
            <span>Rajendra Mane College of Engineering and Technology</span>
        </div>

        <div className="education">
            <li>2011-13</li>
            <h3>HSC - ( 64% )</h3> 
            <span>Gogate College, Ratnagiri</span>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="skillsets" style={{ display : 'flex' , flexWrap : 'wrap'}} >
            <div className='skillname'>
                <img src={JS} className='skillset'/>
                <span>JavaScript</span>
            </div>
            <div className='skillname'>
                <img src={REACT} className='skillset'/>
                <span>React</span>
            </div>
            <div className='skillname'>
                <img src={HTML} className='skillset'/>
                <span>HTML</span>
            </div>
            <div className='skillname'>
                <img src={CSS} className='skillset'/>
                <span>CSS</span>
            </div>
            <div className='skillname'>
                <img src={BOOTSTRAP} className='skillset'/>
                <span>Bootstrap</span>
            </div>
            <div className='skillname'>
                <img src={REDUX} className='skillset'/>
                <span>Redux</span>
            </div>
            <div className='skillname'>
                <img src={HOOKS} className='skillset'/>
                <span>Hooks</span>
            </div>
            
            <div className='skillname'>
                <img src={TYPESCRIPT} className='skillset'/>
                <span>TypeScript</span>
            </div>
            <div className='skillname'>
                <img src={JQUERY} className='skillset'/>
                <span>jQuery</span>
            </div>
            <div className='skillname'>
                <img src={JEST} className='skillset'/>
                <span>Jest</span>
            </div>
            <div className='skillname'>
                <img src={MATERIALUI} className='skillset'/>
                <span>Material UI</span>
            </div>
            <div className='skillname'>
                <img src={JIRA} className='skillset'/>
                <span>Jira</span>
            </div>
            <div className='skillname'>
                <img src={POSTMAN} className='skillset'/>
                <span>Postman</span>
            </div>
            <div className='skillname'>
                <img src={MYSQL} className='skillset'/>
                <span>MySQL</span>
            </div>
        </div>
      </CustomTabPanel>
      </div>
    </div>
  );
}
