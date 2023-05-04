import PhotoSelf from '../assets/Self-Portrait.jpeg';

const Home = () => {
    return (
        <div name='home'>
            <div className='max-w-[1000px] mb-64 mt-[70px] h-screen mx-auto flex-row flex justify-content justify-items-center items-center px-8'>
                <div className='mx-auto px-2  flex flex-col justify-center justify-items-center items-center h-full'>
                    <h1 className='lg:text-8xl text-6xl'>Hello!</h1>
                    <p className='lg:text-2xl text-xl text-gray-400'>My name is </p>
                    <h1 className='text-4xl font-bold'>Connor Henn</h1>
                    <p className='text-2xl text-gray-400'>I am a</p>
                    <h1 className='text-4xl text-center'>Full-Stack Software Engineer</h1>
                    <p className='text-2xl text-gray-400'>Based out of</p>
                    <p className='text-4xl text-center'>Seattle, Washington 📍</p>
                </div>
                <img src={PhotoSelf} alt='Self' className='w-[33%] max-w-[200px] max-h-[200px] rounded-full border-2' />
            </div>

        </div>
    )
}

export default Home;