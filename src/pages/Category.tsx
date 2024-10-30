import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { fetchGenres } from "../store/slices/genreSlice"
import { div } from "framer-motion/client"

function Category() {

    const { name } = useParams<{ name: string }>()
    const [loading, setloading] = useState<boolean>(true)

    const dispatch = useDispatch<AppDispatch>()
    const Genre = useSelector((state: RootState) => state.genre.genre || [])

    useEffect(() => {
        if (name) {

            const loaded = async () => {
                setloading(true)
                await dispatch(fetchGenres())
                setloading(false)
            }
            loaded()
        }
    }, [dispatch, name])

    console.log(Genre);


    interface IgenreGame {
        id: number;
        name: string;
        released: string;
        background_image: string;
        short_screenshots: string[];
        rating: number
    }
    interface Igenre {
        id: number;
        name: string;
        image_background: string
        games: IgenreGame[]
    }

    const Games = Genre?.map((item: Igenre) => {
        if (name == item.name) {

            return (
                <div key={item.id} className=" w-[100%] ">
                    <div>
                        <h1 className="font-bld text-btn text-2xl ">{item.name}</h1>
                    </div>
                    <div>
                        {item.games.map((gameItems) => (
                            <div key={gameItems.id}>
                                <div>
                                    <div className="w-[100%]">
                                        <h3 className="text-white font-med hover:tracking-widest hover:text-btn transition-all ">{gameItems.name}</h3>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
        if(name=='all'){
            return (
                <div key={item.id} className="w-[100%] ">
                    <div>
                        <h1 className="font-bld text-btn text-2xl">{item.name}</h1>
                    </div>
                    <div>
                        {item.games.map((gameItems) => (
                            <div key={gameItems.id}>
                                <div>
                                    <div className="w-[100%]">
                                        <h3 className="text-white font-med hover:tracking-widest hover:text-btn transition-all">{gameItems.name}</h3>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    })

    return (
        <div className="">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
                {Games}
            </div>
        </div>
    )
}

export default Category
