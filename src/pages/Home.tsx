import Searchbar from "../components/Searchbar"
import whislist from "../assets/icon/wishlist.png"
import GenreComp from "../components/GenreComp"
import GamecardComp from "../components/GamecardComp"
import { useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
function Home() {


    const [searchTerm, setsearchTerm] = useState<string>('')

    const handelSearch = (term: string) => {
        setsearchTerm(term)
    }

    return (

        <div className=" overflow-hidden">
            {/* navbar */}
            <div className="flex justify-between items-center ">
                <div className=" flex justify-center">
                    <h3 className="font-bld text-btn text-lg md:text-2xl flex w-full">G-</h3>
                    <h3 className="font-bld text-btn text-lg md:text-2xl flex w-full">store</h3>
                </div>
                <div className="md:w-[65%]">
                    <Searchbar onSearch={handelSearch} />
                </div>
                <div>
                    <Link to='/whishlist'>
                        <img src={whislist} alt="wishList" className="md:w-10 w-8 " />
                    </Link>
                </div>

            </div>
            {/* hero section */}

            <div>

            </div>
            <div className="flex flex-col justify-center items-center gap-y-16">

                <GamecardComp searchItem={searchTerm} />
                <GenreComp />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
