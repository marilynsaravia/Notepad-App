import { getImageNavbar } from "../utils"
import { FaMoon, FaSun } from "react-icons/fa"

const Navbar = () => {
    
    return(
        <div className='w-full h-[130px] flex justify-between items-center px-12'>
            <img className='w-[150px]' src={getImageNavbar('logo.png')} alt='Notepad App Logo'/>
             <div className="flex items-center w-auto">
                <input
                type="text"
                placeholder="Search for title"
                className="w-[500px] px-4 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-violet-400"
                />
            </div>
            <div className="flex items-center">
                <label htmlFor="theme-toggle" className="flex items-center cursor-pointer">
                    <div className="relative">
                    <input type="checkbox" id="theme-toggle" className="sr-only"/>
                    <div className="w-10 h-5 bg-gray-100 rounded-full shadow-inner"></div>
                    <div className="dot absolute left-0 top-0 bg-violet-500 w-5 h-5 rounded-full transition"></div>
                    </div>
                    <span className="ml-3 text-sm text-gray-700 dark:text-gray-200">
                        <FaMoon className="inline-block text-xl dark:hidden"/>
                        <FaSun className="hidden dark:inline-block text-xl"/>
                    </span>
                </label>
            </div>
        </div>
    )
}

export default Navbar