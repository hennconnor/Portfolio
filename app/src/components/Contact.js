const Contact = () => {
    return (
        <div name='contact' className="bg-[#0d1e39] w-full h-screen flex flex-col text-white justify-center items-center">
            <h1 className='text-[50px]'>Contact</h1>
            <p className='my-2'>Submit the form to send me a message</p>
            <form className='flex flex-col justify-evenly max-w-[600px] w-full text-black' action='https://getform.io/f/cb6288aa-aa41-4da0-a612-e3f677d74712' method="POST">
                <input className='p-2' placeholder='Name'></input>
                <input className='my-2 p-2' placeholder='Email'></input>
                <input type="hidden" name="_gotcha"></input>
                <textarea className='p-2' placeholder="Message" rows='7'></textarea>
                <button className='my-2 p-2 border-2 text-white' type='submit'>Send Message</button>

            </form>
        </div >
    )
}

export default Contact;