import { BsArrowDownCircle } from 'react-icons/bs';
import PhotoSelf from '../assets/Self-Portrait.jpeg';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className="bg-[#0d1e39] w-full h-screen text-white">
            <div className='max-w-[1000px] mx-auto h-full flex flex-row justify-content px-8'>
                <div className='max-w-[1000px] mx-auto px-2  flex flex-col justify-center h-full'>
                    <h1 className='text-[100px] text-white ml-[-100px]'>Hello!</h1>
                    <p className='text-2xl text-gray-400 ml-[-50px]'>My name is </p>
                    <h1 className='text-4xl text-white font-bold'>Connor Henn</h1>
                    <p className='text-2xl text-gray-400 ml-[50px]'>I am a</p>
                    <h1 className='text-4xl ml-[-50px]'>Full-Stack Software Engineer</h1>
                    <p className='text-2xl text-gray-400 ml-[10px]'>Based out of</p>
                    <p className='text-4xl ml-[-25px]'>Seattle, Washington 📍</p>
                    <Link className='self-center justify-self-end' to='about' spy={true} smooth={true} offset={-150} duration={500}><button className='font-mono flex items-center max-w-[200px] max-h-[100px] text-xl border-2 px-2 py-2 my-2'>View About   <BsArrowDownCircle /></button></Link>
                </div>
                <img src={PhotoSelf} alt='Self' className='w-[200px] mr-[180px] h-[200px] my-[150px] rounded-full border-2' />
            </div>

        </div>
    )
}

export default Home;