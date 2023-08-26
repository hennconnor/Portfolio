import PlusExpPic from '../assets/PlusExp.png';

const Projects = () => {
    return (
        <div name='projects' className='mb-64'>
            <div className='flex flex-col justify-center items-center p-8 font-inter'>
                <p className='text-5xl mb-5'>Projects</p>
                <div className='flex flex-wrap justify-evenly'>

                    <div className='bg-[#0a192f] flex flex-col max-w-[400px] shadow-lg shadow-black p-5'>
                        <p className='font-bold'>Plus Exp</p>
                        <img className='p-2' src={PlusExpPic} alt='Plus Exp Project' />
                        <p className='justify-center p-5'>Created a gamified daily task planner where users gain experience points for completing tasks. Experience points are used to increase user's level with the goal to increase incentives and make the process of completing daily tasks more enjoyable.</p>
                        <a className='min-w-[122px] self-center justify-self-center border-2 p-3 hover:shadow-zinc-400 hover:shadow-md duration-150' href='https://github.com/hennconnor/PlusExp' target='_blank' rel='noopener noreferrer'>Source Code</a>
                        <a className='my-2 min-w-[122px] self-center justify-self-center border-2 p-3 hover:shadow-zinc-400 hover:shadow-md duration-150' href=' https://www.loom.com/share/da5e1f9b808c48148f4f182f2965b9e4?sid=d57d85a0-c89a-4cc7-a31f-b2a45eb2f552' target='_blank' rel='noopener noreferrer'>Video Demo</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;