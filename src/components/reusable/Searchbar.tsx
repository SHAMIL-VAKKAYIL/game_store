import { useState } from "react";
import { FiSearch } from "react-icons/fi";



interface Isearch {
    onSearch: (term: string) => void
}

function Searchbar({onSearch}:Isearch) {


    const [searhTerm, setsearhTerm] = useState('')


    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        onSearch(searhTerm)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit} className="flex justify-center">
                <div className="bg-secondry p-2 md:p-3 w-[80%] md:w-full flex justify-between md:rounded-full rounded-md items-center">
                    <input
                        className="w-full bg-transparent outline-none text-white font-normal h-full text-xs ms:text-base "
                        type="text"
                        name=""
                        value={searhTerm}
                        onChange={(e) => { setsearhTerm(e.target.value) }}
                        id=""
                        placeholder="Search Games" />
                    <button type="submit" className="bg-secondry hidden md:flex"><FiSearch color="#FFCC00" className="bg-transparent hover:scale-105 transition-all duration-150" size={32} /></button>
                    <button type="submit" className="bg-secondry md:hidden"><FiSearch color="#FFCC00" className="bg-transparent hover:scale-105 transition-all duration-150" size={18} /></button>

                </div>
            </form>
        </div>
    )
}

export default Searchbar
