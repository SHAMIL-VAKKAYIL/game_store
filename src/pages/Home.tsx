import Searchbar from "../components/Searchbar"
import whislist from "../assets/icon/wishlist.png"
import GenreComp from "../components/GenreComp"
import GamecardComp from "../components/GamecardComp"
import { useState } from "react"
function Home() {


    const [searchTerm, setsearchTerm] = useState<string>('')

    const handelSearch = (term: string) => {
        setsearchTerm(term)
    }
    console.log(searchTerm);
    
    return (

        <div>
            {/* navbar */}
            <div className="flex justify-between items-center ">
                <div>
                    <h3 className="font-bld text-btn text-2xl">G-store</h3>
                </div>
                <div className="w-[65%]">
                    <Searchbar onSearch={handelSearch} />
                </div>
                <div>
                    <img src={whislist} alt="wishList" className="w-10" />
                </div>
            </div>
            {/* hero section */}

            <div>

            </div>
            <div className="flex flex-col justify-center items-center gap-y-16">

                <GamecardComp searchItem={searchTerm} />
                <GenreComp />
            </div>
        </div>
    )
}

export default Home
