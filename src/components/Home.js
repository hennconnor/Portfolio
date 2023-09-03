import PhotoSelf from '../assets/Self-Portrait.jpeg';

const Home = () => {
    return (
        <div name='home'>
            <div className='text-black max-w-[1000px] mb-32 mt-[70px] h-screen mx-auto flex-wrap flex justify-center items-center px-8 font-poppins animate-[fadein_2s]'>
                <div className='text-white mx-auto p-20  flex flex-col justify-center justify-items-center items-center whitespace-nowrap'>
                    <h1 className='text-8xl'><span className='underline-offset-8 underline'>Hello!</span>👋</h1>
                    <p className='text-2xl'>My name is </p>
                    <h1 className='text-4xl font-extrabold'>Connor Henn</h1>
                    <p className='text-2xl'>I am a</p>
                    <h1 className='text-4xl text-center'>Full-Stack Software Engineer</h1>
                    <p className='text-2xl'>Based out of</p>
                    <p className='text-4xl text-center'>Seattle, Washington 📍</p>
                </div>
                <img src={PhotoSelf} alt='Self' className='w-[40%] max-w-[225px] max-h-[225px] min-w-[180px] min-h-[180px] rounded-full border-2 border-white' />
            </div>

        </div>
    )
}

export default Home;