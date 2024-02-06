import JSLogo from '../assets/Icons/JS.png';
import CSSLogo from '../assets/Icons/CSS.png';
import HTMLLogo from '../assets/Icons/html.png';
import ReactLogo from '../assets/Icons/React.png';
import GitLogo from '../assets/Icons/git.png';
import RailsLogo from '../assets/Icons/Rails.png';
import TypescriptLogo from '../assets/Icons/Typescript.png';
import TailwindLogo from '../assets/Icons/Tailwind.png';


const Skills = () => {
    return (
        <div name='skills'>
            <div className='flex flex-col justify-center items-center mb-64'>
                <p className='text-5xl mb-10 underline underline-offset-2 text-white'>Skills</p>
                <ul className='flex flex-row flex-wrap justify-center items-center font-mono max-w-[680px] text-black'>
                    <li className='skill__card'>
                        <p>JavaScript</p>
                        <img src={JSLogo} alt='JavaScript Logo' height='50px' width='60px' />
                    </li>
                    <li className='skill__card'>
                        <p>HTML</p>
                        <img src={HTMLLogo} alt='HTML Logo' height='50px' width='50px' />
                    </li>
                    <li className='skill__card'>
                        <p>CSS</p>
                        <img src={CSSLogo} alt='CSS Logo' height='75px' width='75px' />
                    </li>
                    <li className='skill__card'>
                        <p>React</p>
                        <img src={ReactLogo} alt='React Logo' height='75px' width='75px' />
                    </li>
                    <li className='skill__card'>
                        <p>Tailwind</p>
                        <img src={TailwindLogo} alt='Tailwind Logo' height='75px' width='75px' />
                    </li>
                    <li className='skill__card'>
                        <p>Typescript</p>
                        <img src={TypescriptLogo} alt='Typescript Logo' height='75px' width='75px' />
                    </li>
                    <li className='skill__card'>
                        <p>Ruby on Rails</p>
                        <img src={RailsLogo} alt='Rails Logo' height='75px' width='75px' />
                    </li>
                    <li className='skill__card'>
                        <p>Git</p>
                        <img src={GitLogo} alt='Git Logo' height='75px' width='75px' />
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Skills;