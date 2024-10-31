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
            <form action="" onSubmit={handleSubmit}>
                <div className="bg-secondry p-3 flex justify-between rounded-full items-center">
                    <input
                        className="w-full bg-transparent outline-none text-white font-normal h-full "
                        type="text"
                        name=""
                        value={searhTerm}
                        onChange={(e) => { setsearhTerm(e.target.value) }}
                        id=""
                        placeholder="Search Games" />
                    <button type="submit" className="bg-secondry"><FiSearch color="#FFCC00" className="bg-transparent hover:scale-105 transition-all duration-150" size={32} /></button>
                </div>
            </form>
        </div>
    )
}

export default Searchbar
