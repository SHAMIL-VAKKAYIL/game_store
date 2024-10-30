import { FiSearch } from "react-icons/fi";

function Searchbar() {
    return (
        <div>
            <form action="">
                <div className="bg-secondry p-3 flex justify-between rounded-full items-center">
                    <input className="w-full bg-transparent outline-none text-white font-normal h-full " type="text" name="" id="" placeholder="Search Games" />
                    <button type="submit" className="bg-secondry"><FiSearch color="#FFCC00" className="bg-transparent hover:scale-105 transition-all duration-150" size={32} /></button>
                </div>
            </form>
        </div>
    )
}

export default Searchbar
