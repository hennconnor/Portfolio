import { useRef } from 'react';

const Contact = () => {

    const myRef = useRef(null);

    const resetForm = () => {
        myRef.current.reset()
    }

    return (
        <div name='contact' className="flex flex-col justify-center items-center mb-20">
            <p className='text-5xl mb-5'>Contact</p>
            <div className='flex flex-col justify-center items-center w-[85%] max-w-[400px] bg-[#0a192f] shadow-black shadow-lg p-10'>
                <h1 className='text-3xl mb-5 text-center'>Send me a Message</h1>
                <form ref={myRef} className='flex flex-col p-5 w-full text-black' action='https://getform.io/f/cb6288aa-aa41-4da0-a612-e3f677d74712' method="POST">
                    <input className='p-2' type='text' placeholder='Name' name='name' required></input>
                    <input className='my-2 p-2' type='email' placeholder='Email' name='email' required></input>
                    <input type="hidden" name="_gotcha"></input>
                    <textarea className='p-2 mb-1' placeholder="Message" rows='7' type='text' name='message' required></textarea>
                    <button className='my-2 p-2 border-2 text-white hover:shadow-zinc-400 hover:shadow-md duration-150' type='submit' onSubmit={resetForm}>Send Message</button>
                </form>
            </div>
        </div >
    )
}

export default Contact;