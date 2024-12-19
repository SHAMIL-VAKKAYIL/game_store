import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { useEffect, useState } from "react"
import { fetchGames } from "../store/slices/gameSlice"
import LoadingComp from "./reusable/LoadingComp";
import { addToWhislist, removeFromWhislist } from "../store/slices/wishlistslice";
import Gamecard from "./reusable/Gamecard";
import { FaHeart, FaRegHeart } from "react-icons/fa";





interface Isearch {
    searchItem: string
    page: number
}


function GamecardComp({ searchItem, page }: Isearch) {

    interface Igames {
        id: number;
        name: string;
        background_image?: string;
        rating?: number

    }

    const dispatch = useDispatch<AppDispatch>()

    const [loading, setloading] = useState(true)

    const games = useSelector((state: RootState) => state.games.game)
    const whishlist = useSelector((state: RootState) => state.wishlist.game)


    useEffect(() => {
        const loaded = async () => {
            setloading(true)
            await dispatch(fetchGames({ page: page, pageSize: 15, searchTerm: searchItem }))
            setloading(false)
        }
        loaded()
    }, [page,searchItem])


    const toogleWhislist = (game: Igames) => {
        if (whishlist.find((item: Igames) => item.id === game.id)) {
            dispatch(removeFromWhislist(game))
        } else {
            dispatch(addToWhislist(game))
        }
    }

    const gameList = games?.map((item: Igames) => {
        const isInWhislist = whishlist.some((game: Igames) => game.id === item.id)

        return (
            <div key={item.id} className="relative overflow-hidden group">
                <Gamecard
                    gameId={item.id}
                    gameImage={item.background_image}
                    gameName={item.name}
                    gameRating={item.rating}
                    compo={<div className=" md:w-10 md:h-10 w-8 h-8  flex items-center justify-center rounded-full bg-white absolute md:right md:top-4 top-2 right-1 shadow-md -translate-y-20 group-hover:translate-y-2   transition-transform duration-300 overflow-hidden " onClick={() => toogleWhislist(item)}>
                        {isInWhislist ? <FaHeart className="bg-transparent z-10 ml-[.5px] w-5 sm:w-auto transition-transform duration-300 translate-y-0" size={36} color="#FF5722" /> :
                            <FaRegHeart className="bg-transparent z-10 w-5 ml-[.5px] sm:w-auto transition-transform duration-300" size={36} color="#000" />}
                    </div>}
                />

            </div>
        )
    })
    return (
        <>
            {loading ? (
                <LoadingComp />
            ) : (
                <div>
                    {gameList.length > 0 ? (
                        <div>
                            <h3 className="flex font-bold text-2xl text-btn font-bld mt-5">Games</h3>
                            <div className="flex flex-wrap justify-center mt-">
                                {gameList}
                            </div>
                        </div>
                    ) : (
                        <p className="text-white flex font-bold text-2xl  font-bld">No games found for "<p className="flex font-bold text-2xl text-btn font-bld">{searchItem}</p>"</p>
                    )}
                </div>
            )}
        </>
    )
}

export default GamecardComp
