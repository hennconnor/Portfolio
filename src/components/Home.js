import PhotoSelf from '../assets/Self-Portrait.jpeg';

const Home = () => {
    return (
        <div name='home' className='mt-52 mb-56'>
            <div className='w-4/5 max-w-[1000px] gap-12 flex flex-col md:flex-row justify-center items-center animate-[fadein_2s] mx-auto'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-5xl md:text-7xl mb-4'><span className='underline-offset-8 underline'>Hello!</span>👋</h1>
                    <p className='text-xl md:text-2xl'>My name is </p>
                    <h1 className='text-3xl md:text-4xl font-extrabold'>Connor Henn</h1>
                    <p className='text-xl md:text-2xl'>I am a</p>
                    <h1 className='text-3xl md:text-4xl text-center'>Full-Stack Software Engineer</h1>
                    <p className='text-xl md:text-2xl'>Based out of</p>
                    <p className='text-3xl md:text-4xl text-center'>Seattle, Washington 📍</p>
                </div>
                <img src={PhotoSelf} alt='Self' className='w-2/5 mt-10 max-w-[225px] max-h-[225px] min-w-[180px] rounded-full border-2 border-white' />
            </div>
        </div>

    )
}

export default Home;