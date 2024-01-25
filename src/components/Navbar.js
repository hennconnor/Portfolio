import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Logo.png';
import Resume from '../assets/Resume.pdf';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';



const Navbar = () => {

    const [nav, setNav] = useState(false);

    useEffect(() => { document.body.style.overflow = nav ? 'hidden' : 'unset' }, [nav])



    const handleClick = () => {
        setNav(!nav);
    }
    return (
        <div>
            <div className='text-white w-full h-[80px] top-0 left-0 fixed flex justify-between items-center bg-[rgba(0,0,0,0.3)]'>
                <img src={Logo} alt='Logo' width='80' height='80' />
                <ul className='hidden md:flex font-mono overflow-hidden divide-x-[1px] divide-[rgba(255,255,255,.4)]'>
                    <li>
                        <Link to='home' spy={true} smooth={true} offset={-200} duration={500} className='hover:bg-[rgba(0,0,0,0.2)] cursor-pointer hover:underline underline-offset-4 flex h-[80px] px-5 justify-center items-center'>Home</Link>
                    </li>
                    <li>
                        <Link to='about' spy={true} smooth={true} offset={-200} duration={500} className='hover:bg-[rgba(0,0,0,0.2)] cursor-pointer hover:underline underline-offset-4 h-[80px] px-5 items-center flex justify-center'>About</Link>
                    </li>
                    <li>
                        <Link to='skills' spy={true} smooth={true} offset={-160} duration={500} className='hover:bg-[rgba(0,0,0,0.2)] cursor-pointer hover:underline underline-offset-4 h-[80px] px-5 items-center flex justify-center'>Skills</Link>
                    </li>
                    <li>
                        <Link to='projects' spy={true} smooth={true} offset={-125} duration={500} className='hover:bg-[rgba(0,0,0,0.2)] cursor-pointer hover:underline underline-offset-4 h-[80px] px-5 items-center flex justify-center'>Projects</Link>
                    </li>
                    <li>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} className='hover:bg-[rgba(0,0,0,0.2)] cursor-pointer hover:underline underline-offset-4 h-[80px] px-5 items-center flex justify-center'>Contact</Link>
                    </li>
                </ul>
                <FaBars className='md:hidden cursor-pointer mr-5' size={18} onClick={handleClick} />
            </div >

            {/* Mobile Menu */}
            < ul className={!nav ? 'hidden' : 'fixed overflow-hidden top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.7)] backdrop-blur-md flex flex-col justify-center text-white items-center'}>
                <li><FaTimes size={20} className='absolute top-0 right-0 m-5 cursor-pointer' onClick={handleClick} /></li>
                <li className='py-6 text-4xl cursor-pointer hover:underline'>
                    <Link to='home' spy={true} smooth={true} offset={-110} duration={500} onClick={handleClick}>Home</Link>
                </li>
                <li className='py-6 text-4xl cursor-pointer hover:underline'>
                    <Link to='about' spy={true} smooth={true} offset={-130} duration={500} onClick={handleClick}>About</Link>
                </li>
                <li className='py-6 text-4xl cursor-pointer hover:underline'>
                    <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={handleClick}>Skills</Link>
                </li>
                <li className='py-6 text-4xl cursor-pointer hover:underline'>
                    <Link to='projects' spy={true} smooth={true} offset={-100} duration={500} onClick={handleClick}>Projects</Link>
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