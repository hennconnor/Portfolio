import PlusExpPic from '../assets/ProjectPictures/PlusExp.png';
import FAQPic from '../assets/ProjectPictures/desktop-design.jpg';
import ResponsiveLayoutsPic from '../assets/ProjectPictures/Template Sample.png';

const Projects = () => {
    return (
        <div name='projects' className='mb-64'>
            <div className='flex flex-col justify-center items-center'>
                <p className=' text-white text-5xl mb-10 underline underline-offset-2'>Projects</p>
                <div className='flex flex-wrap justify-evenly gap-10 text-black'>
                    <div className='project__card'>
                        <p className='text-lg'>Conquering Responsive Layouts - Final Challenge</p>
                        <img className='border-2 border-black m-2' src={ResponsiveLayoutsPic} alt='Responsive Layouts Project' />
                        <p className='p-5 text-center'>
                            Final Challenge for a Responsive Layouts course I took.  Starting from pdf template I used a mobile first approach and incorporated several breakpoints.  Created a responsive site that looks great on mobile and desktop.
                        </p>
                        <a className='project__card-btn' href='https://github.com/hennconnor/Responsive-Course-Final-Challenge' target='_blank' rel='noopener noreferrer'>Source Code</a>
                        <a className='my-2 project__card-btn' href='https://henn-responsive-final.netlify.app/' target='_blank' rel='noopener noreferrer'>Live Demo</a>
                    </div>

                    <div className='project__card'>
                        <p className='text-lg'>Plus Exp</p>
                        <img className='border-2 border-black m-2' src={PlusExpPic} alt='Plus Exp Project' />
                        <p className='p-5 text-center'>
                            Created a gamified daily task planner where users gain experience points for completing tasks.
                            Experience points are used to increase user's level with the goal to increase incentives and make the process of completing daily tasks more enjoyable.
                        </p>
                        <a className='project__card-btn' href='https://github.com/hennconnor/PlusExp' target='_blank' rel='noopener noreferrer'>Source Code</a>
                        <a className='my-2 project__card-btn' href=' https://www.loom.com/share/da5e1f9b808c48148f4f182f2965b9e4?sid=d57d85a0-c89a-4cc7-a31f-b2a45eb2f552' target='_blank' rel='noopener noreferrer'>Video Demo</a>
                    </div>

                    <div className='project__card'>
                        <p className='text-lg'>FAQ Accordion</p>
                        <img className='border-2 border-black m-2' src={FAQPic} alt='FAQ Accordion Project' />
                        <p className='p-5 text-center'>
                            Used a prompt where I was given a design of an FAQ Accordion that I was tasked with recreating as accurately as possible.
                            I used HTML/CSS and Vanilla JavaScript for the project.
                            Project features a responsive layout for both desktop and mobile.
                        </p>
                        <a className='project__card-btn' href='https://github.com/hennconnor/faq-accordion-main' target='_blank' rel='noopener noreferrer'>Source Code</a>
                        <a className='my-2 project__card-btn' href='https://faqaccordionhenn.netlify.app/' target='_blank' rel='noopener noreferrer'>Live Demo</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;