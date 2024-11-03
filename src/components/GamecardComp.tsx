import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { useEffect, useState } from "react"
import { fetchGames } from "../store/slices/gameSlice"
import LoadingComp from "./LoadingComp";
import { addToWhislist, removeFromWhislist } from "../store/slices/wishlistslice";
import Gamecard from "./Gamecard";
import { FaHeart, FaRegHeart } from "react-icons/fa";





interface Isearch {
    searchItem: string
}


function GamecardComp({ searchItem }: Isearch) {

    const dispatch = useDispatch<AppDispatch>()

    const [loading, setloading] = useState(true)

    const games = useSelector((state: RootState) => state.games.game)
    const whishlist = useSelector((state: RootState) => state.wishlist.game)


    useEffect(() => {
        const loaded = async () => {
            setloading(true)
            await dispatch(fetchGames())
            setloading(false)
        }
        loaded()
    }, [dispatch])



    interface Igames {
        id: number;
        name: string;
        background_image?: string;
        rating?: number

    }


    const filterdGameList = games.filter((game: Igames) => {
        return game.name.toLowerCase().includes(searchItem.toLowerCase())

    })

    const toogleWhislist = (game: Igames) => {
        if (whishlist.find((item: Igames) => item.id === game.id)) {
            dispatch(removeFromWhislist(game))
        } else {
            dispatch(addToWhislist(game))
        }
    }

    const gameList = filterdGameList?.map((item: Igames) => {
        const isInWhislist = whishlist.some((game: Igames) => game.id === item.id)

        return (
            <div key={item.id} className="relative overflow-hidden group">
                <Gamecard
                    gameId={item.id}
                    gameImage={item.background_image}
                    gameName={item.name}
                    gameRating={item.rating}
                    compo={<div className=" md:w-10 md:h-10 w-6 h-6  flex items-center justify-center rounded-full bg-white absolute md:right-4 md:top-4 top-2 right-2 shadow-md -translate-y-20  group-hover:translate-y-0  transition-transform duration-300 overflow-hidden " onClick={() => toogleWhislist(item)}>
                        {isInWhislist ? <FaHeart className="bg-transparent ml-[.5px] transition-transform duration-300 translate-y-0" size={36} color="#FF5722" onClick={() => dispatch(removeFromWhislist(item))} /> :
                            <FaRegHeart className="bg-transparent ml-[.5px] transition-transform duration-300" size={36} onClick={() => dispatch(addToWhislist(item))} />}
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
                            <h3 className="flex font-bold text-2xl text-btn font-bld">Games</h3>
                            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-3">
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
