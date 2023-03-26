import { BsArrowDownCircle } from 'react-icons/bs';

const Skills = () => {
    return (
        <div name='skills' className="bg-[#0d1e39] w-full h-screen">
            <div className='text-white flex flex-col w-max-[1000px] mx-[100px] justify-start h-full px-8'>
                <p className='text-[50px]'>Skills</p>
                <button className='flex justify-center max-w-[200px] max-h-[100px] text-xl border-white border-2 px-2 py-2 my-2'>View Projects<BsArrowDownCircle /></button>
            </div>

        </div>
    )
}

export default Skills;