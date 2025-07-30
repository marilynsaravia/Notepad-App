import { getImageNavbar } from "../utils"

const Navbar = () => {
    return(
        <div className='w-full h-[130px] flex justify-start items-center px-12'>
            <img className='w-[150px]' src={getImageNavbar('logo.png')} alt='Logotipo Notepad App'/>
        </div>
    )
};

export default Navbar