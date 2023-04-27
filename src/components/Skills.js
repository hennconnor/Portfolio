import { BsArrowDownCircle } from 'react-icons/bs';
import { Link } from 'react-scroll';

import JSLogo from '../assets/Icons/JS.png';
import CSSLogo from '../assets/Icons/CSS.png';
import HTMLLogo from '../assets/Icons/html.png';
import ReactLogo from '../assets/Icons/React.png';
import GitLogo from '../assets/Icons/git.png';
import RailsLogo from '../assets/Icons/Rails.png';

const Skills = () => {
    return (
        <div name='skills' className="bg-[#0d1e39] font-mono">
            <div className='text-white flex flex-col justify-center items-center w-max-[1000px] h-full'>
                <p className='text-5xl'>Skills</p>
                <ul className='flex flex-row flex-wrap justify-center items-center'>
                    <li className='bg-[#0a192f] w-36 h-36 shadow-lg shadow-black flex flex-col justify-center items-center mx-2 my-2'>
                        <p>JavaScript</p>
                        <img src={JSLogo} alt='JavaScript Logo' height='50px' width='60px' />
                    </li>
                    <li className='bg-[#0a192f] shadow-lg shadow-black w-36 h-36 flex flex-col justify-center items-center mx-2 my-2'>
                        <p>HTML</p>
                        <img src={HTMLLogo} alt='HTML Logo' height='50px' width='50px' />
                    </li>
                    <li className='bg-[#0a192f] shadow-lg shadow-black w-36 h-36 flex flex-col justify-center items-center mx-2 my-2'>
                        <p>CSS</p>
                        <img src={CSSLogo} alt='CSS Logo' height='75px' width='75px' />
                    </li>
                    <li className='bg-[#0a192f] shadow-lg shadow-black w-36 h-36 flex flex-col justify-center items-center mx-2 my-2'>
                        <p>React</p>
                        <img src={ReactLogo} alt='React Logo' height='75px' width='75px' />
                    </li>
                    <li className='bg-[#0a192f] shadow-lg shadow-black w-36 h-36 flex flex-col justify-center items-center mx-2 my-2'>
                        <p>Ruby on Rails</p>
                        <img src={RailsLogo} alt='Rails Logo' height='75px' width='75px' />
                    </li>
                    <li className='bg-[#0a192f] shadow-lg shadow-black w-36 h-36 flex flex-col justify-center items-center mx-2 my-2'>
                        <p>Git</p>
                        <img src={GitLogo} alt='Git Logo' height='75px' width='75px' />
                    </li>
                </ul>
                <Link className='self-center justify-self-end font-mono flex items-center max-w-[200px] max-h-[100px] text-xl border-2 px-2 py-2 my-2 cursor-pointer hover:bg-[#1c355c]' to='projects' spy={true} smooth={true} offset={-150} duration={500} >View Projects<BsArrowDownCircle /></Link>
            </div>

        </div>
    )
}

export default Skills;