import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { fetchGenres } from "../store/slices/genreSlice"

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



    interface IgenreGame {
        id: number;
        name: string;
    }
    interface Igenre {
        id: number;
        name: string;
        games: IgenreGame[]
    }

    console.log(Genre);

    const navigate = useNavigate()
    const gameDetails = (id:number) => {
        navigate(`/Details/${id}`)
    }


    const Games = Genre?.map((item: Igenre) => {
        if (name == item.name) {

            return (
                <div key={item.id} className=" w-[100%] ">
                    <div>
                        <h1 className="font-bld text-btn md:text-2xl text-lg ">{item.name}</h1>
                    </div>
                    <div>
                        {item.games.map((gameItems) => (
                            <div key={gameItems.id}>
                                <div>
                                    <div className="w-[100%]">
                                        <h3 className="text-white md:text-base text-sm font-med hover:tracking-widest hover:text-btn transition-all " onClick={()=>gameDetails(gameItems.id)}>{gameItems.name}</h3>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }

        // all category

        if (name == 'all') {
            return (
                <div key={item.id} className="w-[100%] ">
                    <div>
                        <h1 className="font-bld text-btn md:text-2xl text-lg">{item.name}</h1>
                    </div>
                    <div>
                        {item.games.map((gameItems) => (
                            <div key={gameItems.id}>
                                <div>
                                    <div className="w-[100%]">
                                        <h3 className="text-white md:text-base text-sm font-med hover:tracking-widest hover:text-btn transition-all " onClick={()=>gameDetails(gameItems.id)}>{gameItems.name}</h3>

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
            {loading ? '' : <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 ">
                {Games}
            </div>}
        </div>
    )
}

export default Category
