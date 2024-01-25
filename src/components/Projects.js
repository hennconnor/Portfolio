import PlusExpPic from '../assets/ProjectPictures/PlusExp.png';
import FAQPic from '../assets/ProjectPictures/desktop-design.jpg';

const Projects = () => {
    return (
        <div name='projects' className='mb-64'>
            <div className='flex flex-col justify-center items-center'>
                <p className=' text-white text-5xl mb-10 underline underline-offset-2'>Projects</p>
                <div className='flex flex-wrap justify-evenly gap-10 text-black'>
                    <div className='bg-white w-11/12 rounded-md border-2 border-gray-500 flex flex-col max-w-[450px] shadow-lg shadow-black p-3'>
                        <p className='text-lg'>Plus Exp</p>
                        <img className='border-2 border-black m-2' src={PlusExpPic} alt='Plus Exp Project' />
                        <p className='p-5 text-center'>
                            Created a gamified daily task planner where users gain experience points for completing tasks.
                            Experience points are used to increase user's level with the goal to increase incentives and make the process of completing daily tasks more enjoyable.
                        </p>
                        <a className='border-2 text-center p-3 mx-10 hover:bg-gray-100 hover:rounded-md duration-50' href='https://github.com/hennconnor/PlusExp' target='_blank' rel='noopener noreferrer'>Source Code</a>
                        <a className='my-2 border-2 text-center mx-10 p-3 hover:bg-gray-100 hover:rounded-md duration-50' href=' https://www.loom.com/share/da5e1f9b808c48148f4f182f2965b9e4?sid=d57d85a0-c89a-4cc7-a31f-b2a45eb2f552' target='_blank' rel='noopener noreferrer'>Video Demo</a>
                    </div>

                    <div className='bg-white w-11/12 rounded-md border-2 border-gray-500 shadow-lg shadow-black p-3 flex flex-col max-w-[450px]'>
                        <p className='text-lg'>FAQ Accordion</p>
                        <img className='border-2 border-black m-2' src={FAQPic} alt='FAQ Accordion Project' />
                        <p className='p-5 text-center'>
                            Used a prompt where I was given a design of an FAQ Accordion that I was tasked with recreating as accurately as possible.
                            I used HTML/CSS and Vanilla JavaScript for the project.
                            Project features a responsive layout for both desktop and mobile.
                        </p>
                        <a className='border-2 p-3 text-center mx-10 hover:bg-gray-100 hover:rounded-md duration-50' href='https://github.com/hennconnor/faq-accordion-main' target='_blank' rel='noopener noreferrer'>Source Code</a>
                        <a className='my-2 border-2 p-3 text-center mx-10 hover:bg-gray-100 hover:rounded-md duration-50' href='https://faqaccordionhenn.netlify.app/' target='_blank' rel='noopener noreferrer'>Live Demo</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;