import { useRef } from 'react';

const Contact = () => {

    const myRef = useRef(null);

    const resetForm = () => {
        myRef.current.reset()
    }

    return (
        <div name='contact' className="bg-[#0d1e39] flex flex-col text-white justify-center items-center">
            <h1 className='text-5xl'>Contact</h1>
            <p className='my-2'>Submit the form to send me a message</p>
            <form ref={myRef} className='flex flex-col justify-evenly max-w-[600px] w-full text-black' action='https://getform.io/f/cb6288aa-aa41-4da0-a612-e3f677d74712' method="POST">
                <input className='p-2 focus: border-solid' type='text' placeholder='Name' name='name' required></input>
                <input className='my-2 p-2' type='email' placeholder='Email' name='email' required></input>
                <input type="hidden" name="_gotcha"></input>
                <textarea className='p-2' placeholder="Message" rows='7' type='text' name='message' required></textarea>
                <button className='my-2 p-2 border-2 text-white' type='submit' onSubmit={resetForm}>Send Message</button>
            </form>
        </div >
    )
}

export default Contact;