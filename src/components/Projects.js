import ProjectPic from '../assets/Project1.jpeg';
import PlusExpPic from '../assets/PlusExp.png';

import { Link } from 'react-scroll';
import { BsArrowDownCircle } from 'react-icons/bs';

const Projects = () => {
    return (
        <div name='projects' className="bg-[#0d1e39] w-full h-screen">
            <div className='text-white flex flex-col w-max-[1000px] mx-24 justify-start p-8'>
                <p className='text-5xl'>Projects</p>
                <div className='flex flex-wrap justify-evenly'>
                    <div className='flex flex-col bg-[#0a192f] max-w-[400px] shadow-lg shadow-black'>
                        <p className='font-bold'>Project 1</p>
                        <img src={ProjectPic} alt='project 1' />
                        <p>Project Description</p>
                        <button className='border-2 p-2 justify-self-center'>Demo</button>
                        <button className='border-2 p-2 justify-self-center'>Source Code</button>
                    </div>

                    <div className='bg-[#0a192f] flex flex-col max-w-[400px] shadow-lg shadow-black'>
                        <p className='font-bold'>Plus Exp</p>
                        <img src={PlusExpPic} alt='Plus Exp Project' />
                        <p>Created a gamified daily task planner where users gain experience points for completing tasks. Experience points are used to increase user's level with the goal to increase incentives and make the process of completing daily tasks more enjoyable.</p>
                        <button className='border-2 p-2'>Demo</button>
                        <a className='self-center justify-self-center border-2 p-3' href='https://github.com/hennconnor/PlusExp' target='_blank' rel='noopener noreferrer'>Source Code</a>
                    </div>
                </div>
                <Link className='self-center justify-self-end font-mono flex items-center max-w-[200px] max-h-[100px] text-xl border-2 px-2 py-2 my-2 cursor-pointer hover:bg-[#1c355c]' to='contact' spy={true} smooth={true} offset={100} duration={500} >Contact Me<BsArrowDownCircle /></Link>
            </div>

        </div>
    )
}

export default Projects;