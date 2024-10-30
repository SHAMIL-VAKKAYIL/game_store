import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { useEffect, useState } from "react"
import { fetchGames } from "../store/slices/gameSlice"
import { FaStar } from "react-icons/fa";
import LoadingComp from "./LoadingComp";
import { Link } from "react-router-dom";

function GamecardComp() {
    const dispatch = useDispatch<AppDispatch>()
    const [loading, setloading] = useState(true)
    const games = useSelector((state: RootState) => state.games.game)


    useEffect(() => {
        const loaded = async () => {
            setloading(true)
            await dispatch(fetchGames())
            setloading(false)
        }
        loaded()
    }, [dispatch])
    console.log(games);


    interface Igames {
        id: number;
        name: string;
        released?: string;
        background_image?: string;
        short_screenshots?: string[];
        rating?: number

    }
    const Trendinggames = games.slice(0, 10)
    const populargames = games.slice(10, 20)

    const trendgameList = Trendinggames?.map((item: Igames) => {
        return (
            <Link to={`Details/${item.name}`}>
                <div key={item.id} className=" ">
                    <div className="gap-5 w-60">
                        <img src={item.background_image} alt="" className="w-64 h-72 object-cover hover:scale-110 transition-all" />
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
            </Link>
        )
    })
    const populargameList = populargames?.map((item: Igames) => {
        return (
            <div key={item.id} className=" ">
                <div className="gap-5 w-60">
                    <img src={item.background_image} alt="" className="w-64 h-72 object-cover hover:scale-110 transition-all" />
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
            {loading ? <LoadingComp /> : <div>
                <h3 className="flex font-bld text-2xl text-btn ">Trendings</h3>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
                    {trendgameList}
                </div>
                <h3 className="flex font-bld text-2xl text-btn ">Popluar</h3>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
                    {populargameList}
                </div>
            </div>}
        </>
    )
}

export default GamecardComp
