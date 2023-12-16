import { useRef } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {

    const myRef = useRef(null);

    const resetForm = () => {
        myRef.current.reset()
    }

    return (
        <div name='contact' className="flex flex-col justify-center items-center mb-20 font-poppins">

            <div className='flex flex-col justify-center items-center max-h-[600px] min-w-[370px] mx-1 max-w-[800px] bg-white rounded-md border-2 border-gray-500 shadow-black shadow-lg  px-5 py-4'>
                <h1 className='text-3xl text-center mb-5'>Let's Connect!</h1>
                <div className='flex justify-center items-center bg-gray-200 rounded-full w-[100px] h-[100px] text-black mb-2'><FaEnvelope size={40} /></div>
                <form ref={myRef} className='flex flex-col p-2 w-full text-black' action='https://getform.io/f/cb6288aa-aa41-4da0-a612-e3f677d74712' method="POST">
                    <input className='p-2 border-gray-300 border-solid border-2' type='text' placeholder='Name' name='name' required></input>
                    <input className='my-2 p-2 border-gray-300 border-solid border-2' type='email' placeholder='Email' name='email' required></input>
                    <input type="hidden" name="_gotcha"></input>
                    <textarea className='p-2 mb-1 border-gray-300 border-solid border-2' placeholder="Message" rows='7' type='text' name='message' required></textarea>
                    <button className='mt-2 p-2 border-2 hover:bg-gray-100 hover:rounded-md duration-50' type='submit' onSubmit={resetForm}>Send Message</button>
                </form>
            </div>
        </div >
    )
}

export default Contact;