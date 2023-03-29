import ProjectPic from '../assets/Project1.jpeg';

const Projects = () => {
    return (
        <div name='projects' className="bg-[#0d1e39] w-full h-screen">
            <div className='text-white flex flex-col w-max-[1000px] mx-[100px] justify-start h-full px-8'>
                <p className='text-[50px]'>Projects</p>
                <div className='flex flex-row justify-evenly'>
                    <div className='bg-[#0a192f] w-80 h-96 shadow-lg shadow-black'>
                        <p>Project 1</p>
                        <img src={ProjectPic} alt='project 1' />
                        <p>Project Description</p>
                        <button className='border-2 p-2'>Demo</button>
                        <button className='border-2 p-2'>Source Code</button>
                    </div>

                    <div className='bg-[#0a192f] w-80 h-96 shadow-lg shadow-black'>
                        <p>Project 2</p>
                        <img src={ProjectPic} alt='project 1' />
                        <p>Project Description</p>
                        <button className='border-2 p-2'>Demo</button>
                        <button className='border-2 p-2'>Source Code</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;