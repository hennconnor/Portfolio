import ProjectPic from '../assets/Project1.jpeg';
import PlusExpPic from '../assets/PlusExp.png';

const Projects = () => {
    return (
        <div name='projects' className="bg-[#0d1e39]">
            <div className='text-white flex flex-col w-max-[1000px] justify-start p-8'>
                <p className='text-5xl'>Projects</p>
                <div className='flex flex-wrap justify-evenly'>

                    <div className='bg-[#0a192f] flex flex-col max-w-[400px] shadow-lg shadow-black p-5'>
                        <p className='font-bold'>Plus Exp</p>
                        <img className='p-2' src={PlusExpPic} alt=' Plus Exp Project' />
                        <p className='justify-center p-5'>Created a gamified daily task planner where users gain experience points for completing tasks. Experience points are used to increase user's level with the goal to increase incentives and make the process of completing daily tasks more enjoyable.</p>
                        <a className='self-center justify-self-center border-2 p-3' href='https://github.com/hennconnor/PlusExp' target='_blank' rel='noopener noreferrer'>Source Code</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;