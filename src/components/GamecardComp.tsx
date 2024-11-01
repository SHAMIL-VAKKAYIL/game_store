import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { useEffect, useState } from "react"
import { fetchGames } from "../store/slices/gameSlice"
import { FaStar } from "react-icons/fa";
import LoadingComp from "./LoadingComp";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { addToWhislist, removeFromWhislist } from "../store/slices/wishlistslice";





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
        released?: string;
        background_image?: string;
        short_screenshots?: string[];
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
            <div key={item.id} className=" ">
                <div className="gap-5 w-60  ">
                    <div className="relative overflow-hidden group ">
                        <img src={item.background_image} alt="" className="w-64 h-72 object-cover rounded-lg" />
                        <div className=" w-10 h-10  flex items-center justify-center rounded-full bg-white absolute right-4 top-4 shadow-md -translate-y-20  group-hover:translate-y-0  transition-transform duration-300 overflow-hidden " onClick={() => toogleWhislist(item)}>
                            {isInWhislist ? <FaHeart className="bg-transparent ml-[.5px] transition-transform duration-300 translate-y-0" size={36} color="#FF5722" onClick={() => dispatch(removeFromWhislist(item))} /> :
                                <FaRegHeart className="bg-transparent ml-[.5px] transition-transform duration-300" size={36} onClick={() => dispatch(addToWhislist(item))} />}


                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-white font-med">{item.name.split('').slice(0, 20).join('')}</h3>
                        <div className="flex  justify-end ">
                            <div className="bg-secondry items-center flex rounded-md">
                                <p className="text-white font-normal bg-secondry text-sm">{item.rating}</p>
                                <FaStar color="#FF5722" size={22} className="bg-secondry" />
                            </div>
                        </div>
                    </div>


                </div>
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
                            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
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
