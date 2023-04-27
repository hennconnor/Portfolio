import { BsArrowDownCircle } from 'react-icons/bs';
import PhotoSelf from '../assets/Self-Portrait.jpeg';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className="bg-[#0d1e39] text-white">
            <div className='max-w-[1000px] mt-[80px] mx-auto flex-row flex justify-content justify-items-center items-center px-8'>
                <div className='max-w-[1000px] mx-auto px-2  flex flex-col justify-center justify-items-center items-center h-full'>
                    <h1 className='lg:text-8xl text-6xl'>Hello!</h1>
                    <p className='lg:text-2xl text-xl text-gray-400'>My name is </p>
                    <h1 className='text-4xl font-bold'>Connor Henn</h1>
                    <p className='text-2xl text-gray-400'>I am a</p>
                    <h1 className='text-4xl'>Full-Stack Software Engineer</h1>
                    <p className='text-2xl text-gray-400'>Based out of</p>
                    <p className='text-4xl'>Seattle, Washington 📍</p>
                    <Link className='self-center justify-self-end font-mono flex items-center max-w-[200px] max-h-[100px] text-xl border-2 px-2 py-2 my-2 cursor-pointer hover:bg-[#1c355c]' to='about' spy={true} smooth={true} offset={-150} duration={500}>View About   <BsArrowDownCircle /></Link>
                </div>
                <img src={PhotoSelf} alt='Self' className='w-[33%] max-w-[250px] max-h-[250px] rounded-full border-2' />
            </div>

        </div>
    )
}

export default Home;