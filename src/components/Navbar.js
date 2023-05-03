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
        <div className='w-full h-[80px] fixed flex justify-between items-center px-4 bg-[#0a192f]'>
            <img src={Logo} alt='Logo' width='80' height='80' />
            <ul className='hidden md:flex font-mono overflow-hidden'>
                <li>
                    <Link to='home' spy={true} smooth={true} offset={10} duration={500} className='hover:bg-[#1c355c] cursor-pointer hover:underline underline-offset-4 duration-300 p-5 flex justify-center'>Home</Link>
                </li>
                <li>
                    <Link to='about' spy={true} smooth={true} offset={-150} duration={500} className='hover:bg-[#1c355c] cursor-pointer hover:underline underline-offset-4 duration-300 p-5 flex justify-center'>About</Link>
                </li>
                <li>
                    <Link to='skills' spy={true} smooth={true} offset={-150} duration={500} className='hover:bg-[#1c355c] cursor-pointer hover:underline underline-offset-4 duration-300 p-5 flex justify-center'>Skills</Link>
                </li>
                <li>
                    <Link to='projects' spy={true} smooth={true} offset={-150} duration={500} className='hover:bg-[#1c355c] cursor-pointer hover:underline underline-offset-4 duration-300 p-5 flex justify-center'>Projects</Link>
                </li>
                <li>
                    <Link to='contact' spy={true} smooth={true} offset={100} duration={500} className='hover:bg-[#1c355c] cursor-pointer hover:underline underline-offset-4 duration-300 p-5 flex justify-center'>Contact</Link>
                </li>
            </ul>

            <div className='md:hidden cursor-pointer z-10'>
                {nav ? <FaTimes onClick={handleClick} /> : <FaBars onClick={handleClick} />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl cursor-pointer hover:underline'>
                    <Link to='home' spy={true} smooth={true} offset={10} duration={500} onClick={handleClick}>Home</Link>
                </li>
                <li className='py-6 text-4xl cursor-pointer hover:underline'>
                    <Link to='about' spy={true} smooth={true} offset={-150} duration={500} onClick={handleClick}>About</Link>
                </li>
                <li className='py-6 text-4xl cursor-pointer hover:underline'>
                    <Link to='skills' spy={true} smooth={true} offset={-150} duration={500} onClick={handleClick}>Skills</Link>
                </li>
                <li className='py-6 text-4xl cursor-pointer hover:underline'>
                    <Link to='projects' spy={true} smooth={true} offset={-150} duration={500} onClick={handleClick}>Projects</Link>
                </li>
                <li className='py-6 text-4xl cursor-pointer hover:underline'>
                    <Link to='contact' spy={true} smooth={true} offset={100} duration={500} onClick={handleClick}>Contact</Link>
                </li>
            </ul>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className="bg-blue-400 w-[160px] h-[60px] flex justify-between cursor-pointer items-center ml-[-100px] px-4 hover:ml-[-10px] duration-300">
                        <a className='flex justify-between items-center w-full'
                            href="https://www.linkedin.com/in/connor-henn/" target='_blank' rel="noopener noreferrer">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='bg-green-400 w-[160px] h-[60px] flex justify-between cursor-pointer items-center ml-[-100px] px-4 hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full'
                            href='https://github.com/hennconnor' target='_blank' rel="noopener noreferrer">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='bg-red-400 w-[160px] h-[60px] flex justify-between px-4 cursor-pointer items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full'
                            href={Resume} target='_blank' rel='noopener noreferrer'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;