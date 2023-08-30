import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Logo.png';
import Resume from '../assets/Resume.pdf';
import { Link } from 'react-scroll';
import React, { useState } from 'react';


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }
    return (
        <div >
            <div className='text-white w-full h-[80px] fixed flex justify-between items-center px-4 bg-[rgba(0,0,0,0.3)]'>
                <img src={Logo} alt='Logo' width='80' height='80' />
                <ul className='hidden md:flex font-mono overflow-hidden divide-x-[1px] divide-[rgba(255,255,255,.4)]'>
                    <li>
                        <Link to='home' spy={true} smooth={true} offset={0} duration={500} className='hover:bg-[rgba(0,0,0,0.2)] cursor-pointer hover:underline underline-offset-4 flex h-[80px] px-5 justify-center items-center'>Home</Link>
                    </li>
                    <li>
                        <Link to='about' spy={true} smooth={true} offset={-300} duration={500} className='hover:bg-[rgba(0,0,0,0.2)] cursor-pointer hover:underline underline-offset-4 h-[80px] px-5 items-center flex justify-center'>About</Link>
                    </li>
                    <li>
                        <Link to='skills' spy={true} smooth={true} offset={-250} duration={500} className='hover:bg-[rgba(0,0,0,0.2)] cursor-pointer hover:underline underline-offset-4 h-[80px] px-5 items-center flex justify-center'>Skills</Link>
                    </li>
                    <li>
                        <Link to='projects' spy={true} smooth={true} offset={-75} duration={500} className='hover:bg-[rgba(0,0,0,0.2)] cursor-pointer hover:underline underline-offset-4 h-[80px] px-5 items-center flex justify-center'>Projects</Link>
                    </li>
                    <li>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} className='hover:bg-[rgba(0,0,0,0.2)] cursor-pointer hover:underline underline-offset-4 h-[80px] px-5 items-center flex justify-center'>Contact</Link>
                    </li>
                </ul>

                <div className='md:hidden cursor-pointer z-10'>
                    {nav ? <FaTimes onClick={handleClick} /> : <FaBars onClick={handleClick} />}
                </div>
            </div >

            {/* Mobile Menu */}
            < ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl cursor-pointer hover:underline'>
                    <Link to='home' spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>Home</Link>
                </li>
                <li className='py-6 text-4xl cursor-pointer hover:underline'>
                    <Link to='about' spy={true} smooth={true} offset={-150} duration={500} onClick={handleClick}>About</Link>
                </li>
                <li className='py-6 text-4xl cursor-pointer hover:underline'>
                    <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={handleClick}>Skills</Link>
                </li>
                <li className='py-6 text-4xl cursor-pointer hover:underline'>
                    <Link to='projects' spy={true} smooth={true} offset={-75} duration={500} onClick={handleClick}>Projects</Link>
                </li>
                <li className='py-6 text-4xl cursor-pointer hover:underline'>
                    <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={handleClick}>Contact</Link>
                </li>
            </ul >

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-white'>
                <ul className='divide-y-[1px] divide-[rgba(255,255,255,.2)]'>
                    <li className="bg-[rgba(0,0,0,.2)] w-[60px] h-[60px] flex justify-center items-center cursor-pointer px-4 hover:bg-[rgba(0,0,0,.3)]">
                        <a
                            href="https://www.linkedin.com/in/connor-henn/" target='_blank' rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='h-[60px] w-[60px] bg-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,.3)] cursor-pointer flex justify-center items-center'>
                        <a
                            href='https://github.com/hennconnor' target='_blank' rel="noopener noreferrer">
                            <FaGithub size={40} />
                        </a>
                    </li>
                    <li className="bg-[rgba(0,0,0,.2)] w-[60px] h-[60px] hover:bg-[rgba(0,0,0,.3)] flex justify-center items-center cursor-pointer px-4">
                        <a
                            href={Resume} target='_blank' rel='noopener noreferrer'>
                            <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div >
        </div >
    )
}

export default Navbar;