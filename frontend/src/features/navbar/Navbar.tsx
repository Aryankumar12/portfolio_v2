
const Navbar = () => {
  return (
    <>
    <div className='bg-black text-white flex justify-evenly text-center items-center py-7 '>
        <div>
            <div className="logo text-xl ">
                Aryan Kumar
            </div>

        </div>
        <div className='links'>

        <ul className="sm:flex  gap-4 justify-center text-center hidden">
            <li >Contact</li>
            <li>Resume</li>
            <li>projects</li>
            <li>Skills</li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar