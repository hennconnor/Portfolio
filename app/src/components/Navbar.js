import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineMailOpen } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Logo.png';
import Resume from '../assets/Resume.pdf';
import { Link } from 'react-scroll';


const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white'>
            <img src={Logo} alt='Logo' width='80' height='80' />
            <ul className='hidden md:flex font-mono'>
                <li>
                    <Link to='home' spy={true} smooth={true} offset={10} duration={500} className='hover:bg-[#1c355c] hover:underline underline-offset-4 duration-300 p-5 flex justify-center'>Home</Link>
                </li>
                <li>
                    <Link to='about' spy={true} smooth={true} offset={-150} duration={500} className='hover:bg-[#1c355c] hover:underline underline-offset-4 duration-300 p-5 flex justify-center'>About</Link>
                </li>
                <li>
                    <Link to='skills' spy={true} smooth={true} offset={-150} duration={500} className='hover:bg-[#1c355c] hover:underline underline-offset-4 duration-300 p-5 flex justify-center'>Skills</Link>
                </li>
                <li>
                    <Link to='projects' spy={true} smooth={true} offset={-150} duration={500} className='hover:bg-[#1c355c] hover:underline underline-offset-4 duration-300 p-5 flex justify-center'>Projects</Link>
                </li>
                <li className='hover:bg-[#1c355c] hover:underline underline-offset-4 duration-300 p-5 flex justify-center'>Contact</li>
            </ul>

            <div className='md:hidden'>
                <FaBars />
            </div>
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className="bg-blue-400 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a className='flex justify-between items-center w-full'
                            href="https://www.linkedin.com/in/connor-henn/" target='_blank' rel="noopener noreferrer">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='bg-green-400 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full'
                            href='https://github.com/hennconnor' target='_blank' rel="noopener noreferrer">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='bg-red-400 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full'
                            href='' target='_blank' rel="noopener noreferrer">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='bg-purple-400 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full'
                            href={Resume} target='_blank'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;