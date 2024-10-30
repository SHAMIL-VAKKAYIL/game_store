import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { useEffect, useState } from "react"
import { fetchGenres } from "../store/slices/genreSlice"
import { Link } from "react-router-dom"

function GenreComp() {
  const dispatch = useDispatch<AppDispatch>()
  const [loading, setloading] = useState(true)

  const Genre = useSelector((state: RootState) => state.genre.genre || [])

  useEffect(() => {
    const loaded = async () => {
      setloading(true)
      await dispatch(fetchGenres())
      setloading(false)
    }
    loaded()
  }, [dispatch])

  type Igenre = {
    id: number;
    name: string;
    image_background: string
  }



  const genreItem = Genre?.map((item: Igenre) => {
    return (
      <Link to={`/genre/${item.name}`}>
        <div key={item.id} className="flex-col flex w-44  h-72 justify-center items-center overflow-hidden">
          <img src={item.image_background} alt="" className=" w-full h-full rounded-lg  object-cover hover:scale-90 transition-all" />
          <h1 className="text-white   transition-all duration-300 w-full rounded-md font-med cursor-pointer">{item.name}</h1>
        </div>
      </Link>

    )
  })
  return (
    <div className="flex flex-col items-center justify-center"> 
      {loading ? '' :
        <div className="">
          <h3 className="font-bld text-btn text-2xl">Serch by category</h3>
          <div className=" gap-3 w-full grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 items-center justify-center">
            {genreItem}
            <Link to={`/genre/all`}>
              <div className="flex-col flex w-44 h-72 justify-center items-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1640301133815-4bec64fca33f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=" w-full h-full rounded-lg  object-cover hover:scale-90 transition-all" />
                <h1 className="text-white   transition-all duration-300 w-full font-med cursor-pointer">All Category</h1>
              </div>
            </Link>
          </div>
        </div>}
    </div>
  )
}

export default GenreComp
