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
        <div name='skills' className="bg-[#0d1e39] w-full h-screen">
            <div className='text-white flex flex-col w-max-[1000px] mx-[100px] justify-start h-full px-5'>
                <p className='text-[50px]'>Skills</p>
                <div>
                    <ul className='flex flex-row justify-center'>
                        <li className='bg-[#0a192f] max-w-[100px] max-h-[100px] px-5 flex flex-col justify-center'>
                            <p>JavaScript</p>
                            <img src={JSLogo} alt='JavaScript Logo' height='75px' width='75px' />
                        </li>
                        <li className='bg-[#0a192f] max-w-[100px] max-h-[100px] px-5 flex flex-col justify-center'>
                            <p>HTML</p>
                            <img src={HTMLLogo} alt='HTML Logo' height='75px' width='75px' />
                        </li>
                        <li className='bg-[#0a192f] max-w-[100px] max-h-[100px] px-5 flex flex-col justify-center'>
                            <p>CSS</p>
                            <img src={CSSLogo} alt='CSS Logo' height='75px' width='75px' />
                        </li>
                        <li className='bg-[#0a192f] max-w-[100px] max-h-[100px] px-5 flex flex-col justify-center'>
                            <p>React</p>
                            <img src={ReactLogo} alt='React Logo' height='75px' width='75px' />
                        </li>
                        <li className='bg-[#0a192f] max-w-[100px] max-h-[100px] px-5 flex flex-col justify-center'>
                            <p>Ruby on Rails</p>
                            <img src={RailsLogo} alt='Rails Logo' height='75px' width='75px' />
                        </li>
                        <li className='bg-[#0a192f] max-w-[100px] max-h-[100px] px-5 flex flex-col justify-center'>
                            <p>Git</p>
                            <img src={GitLogo} alt='Git Logo' height='75px' width='75px' />
                        </li>
                    </ul>
                </div>
                <Link to='projects' spy={true} smooth={true} offset={-150} duration={500} ><button className='flex justify-center max-w-[200px] max-h-[100px] text-xl border-white border-2 px-2 py-2 my-2'>View Projects<BsArrowDownCircle /></button></Link>
            </div>

        </div>
    )
}

export default Skills;