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
            <div className=" flex flex-col gap-5 sm:w-60 w-36 mt-3">
                <div className="relative overflow-hidden group ">
                    <Link to={`Details/${gameId}`}>
                        <img src={gameImage} alt="" className="sm:w-64 sm:h-72 w-36 h-44 object-cover rounded-lg" />
                    </Link>
                    {compo}
                </div>
                
                    <h3 className="text-white font-med text-xs sm:text-sm md:text-base">{gameName.split('').slice(0, 20).join('')}</h3>
                    <div className="flex  justify-end ">
                        <div className="bg-secondry items-center flex rounded-md justify-center ">
                                <p className="text-white font-normal bg-secondry md:text-sm text-xs">{gameRating}</p>
                                <FaStar color="#FF5722" size={22} className="bg-secondry" />
                            
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Gamecard
