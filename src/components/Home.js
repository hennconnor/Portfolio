import PhotoSelf from '../assets/Self-Portrait.jpeg';

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
                </div>
                <img src={PhotoSelf} alt='Self' className='w-[33%] max-w-[250px] max-h-[250px] rounded-full border-2' />
            </div>

        </div>
    )
}

export default Home;