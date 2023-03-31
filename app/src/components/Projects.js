import ProjectPic from '../assets/Project1.jpeg';

import { Link } from 'react-scroll';
import { BsArrowDownCircle } from 'react-icons/bs';

const Projects = () => {
    return (
        <div name='projects' className="bg-[#0d1e39] w-full h-screen">
            <div className='text-white flex flex-col w-max-[1000px] mx-[100px] justify-start h-full px-8'>
                <p className='text-[50px]'>Projects</p>
                <div className='flex flex-row justify-evenly'>
                    <div className='flex flex-col bg-[#0a192f] w-80 h-96 shadow-lg shadow-black'>
                        <p className='font-bold'>Project 1</p>
                        <img src={ProjectPic} alt='project 1' />
                        <p>Project Description</p>
                        <button className='border-2 p-2 justify-self-center'>Demo</button>
                        <button className='border-2 p-2 justify-self-center'>Source Code</button>
                    </div>

                    <div className='bg-[#0a192f] flex flex-col w-80 h-96 shadow-lg shadow-black'>
                        <p className='font-bold'>Project 2</p>
                        <img src={ProjectPic} alt='project 1' />
                        <p>Project Description</p>
                        <button className='border-2 p-2'>Demo</button>
                        <button className='border-2 p-2'>Source Code</button>
                    </div>
                </div>
                <Link className='self-center justify-self-end font-mono flex items-center max-w-[200px] max-h-[100px] text-xl border-2 px-2 py-2 my-2 cursor-pointer hover:bg-[#1c355c]' to='contact' spy={true} smooth={true} offset={100} duration={500} >Contact Me<BsArrowDownCircle /></Link>
            </div>

        </div>
    )
}

export default Projects;