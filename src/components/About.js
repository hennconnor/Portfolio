import { BsArrowDownCircle } from 'react-icons/bs';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <div name='about' className="bg-[#0d1e39] font-mono">
            <div className='text-white flex flex-col w-max-[1000px] mx-24 justify-start px-8'>
                <h1 className='text-5xl'>About</h1>
                <p className='text-l'>
                    Hello, my name is Connor. I'm a full stack software engineer from Seattle, WA.
                    I am experienced with JavaScript, React, Ruby, Rails, HTML and CSS.
                    Past experiences, pre-coding include experience working in Banking as well as the Hospitality sector.
                    In my free time, I enjoy making music, socializing and going to the gym.
                    I love how coding feels like a never ending journey, with always a new mountain or obstacle to overcome.
                    I find the process of everyday surpassing new challenges incredibly rewarding.
                    I look forward to the future challenges and opportunities of growth this field will present and feel excited about both contributing to a new company, as well as my future personal development.
                </p>
                <Link className='self-center justify-self-end font-mono flex items-center max-w-[200px] max-h-[100px] text-xl border-2 px-2 py-2 my-2 cursor-pointer hover:bg-[#1c355c]' to='skills' spy={true} smooth={true} offset={-150} duration={500}>View Skills<BsArrowDownCircle /></Link>
            </div >


        </div >
    )

}

export default About;