import React from "react"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"



interface Igame {
    gameId: number
    gameImage?: string
    gameName: string
    gameRating?: number
    compo: React.ReactNode 
}

function Gamecard({ gameId, gameImage, gameName, gameRating, compo }: Igame) {
    return (
        <div key={gameId} className=" ">
            <Link to={`Details/${gameId}`}>
            <div className=" flex flex-col gap-5 md:w-60 w-36 mt-3">
                <div className="relative overflow-hidden group ">
                    <img src={gameImage} alt="" className="md:w-64 md:h-72 w-36 h-40 object-cover rounded-lg" />
                    {compo}
                </div>
                <div className="">
                    <h3 className="text-white font-med text-xs sm:text-sm md:text-base">{gameName.split('').slice(0, 20).join('')}</h3>
                    <div className="flex  justify-end ">
                        <div className="bg-secondry items-center flex rounded-md justify-center">
                            <p className="text-white font-normal bg-secondry md:text-sm text-xs">{gameRating}</p>
                            <div className="bg-transparent hidden md:flex items-center">
                                <FaStar color="#FF5722" size={22} className="bg-secondry" />
                            </div>
                            <div className="bg-transparent  md:hidden items-center flex">
                                <FaStar color="#FF5722" size={18} className="bg-secondry" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Link>

        </div>
    )
}

export default Gamecard
