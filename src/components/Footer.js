import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Resume from '../assets/Resume.pdf';

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center py-11 bg-[rgba(0,0,0,0.3)] font-poppins text-white'>
            <a className='hover:underline' href='https://github.com/hennconnor/Portfolio' target='_blank' rel='noopener noreferrer'>Designed and Built by Connor Henn.</a>
            <ul className='flex flex-row justify-between mt-4'>
                <li className='p-4 hover:my-[-4px] duration-150'>
                    <a className='flex justify-between items-center'
                        href="https://www.linkedin.com/in/connor-henn/" target='_blank' rel="noopener noreferrer">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='p-4 hover:my-[-4px] duration-150'>
                    <a className='flex justify-between items-center'
                        href='https://github.com/hennconnor' target='_blank' rel="noopener noreferrer">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='p-4 hover:my-[-4px] duration-150'>
                    <a className='flex justify-between items-center'
                        href={Resume} target='_blank' rel='noopener noreferrer'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;