import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { HiOutlineXMark } from 'react-icons/hi2';
import { removeFromWhislist } from '../store/slices/wishlistslice';
import Gamecard from '../components/Gamecard';

function Whislist() {

    const dispatch = useDispatch<AppDispatch>()
    const whislist = useSelector((state: RootState) => state.wishlist.game)
    interface Igames {
        id: number;
        name: string;
        released?: string;
        background_image?: string;
        short_screenshots?: string[];
        rating?: number

    }
    console.log(whislist);

    const gameList = whislist?.map((item: Igames) => {
        return (
            <div key={item.id} className="relative overflow-hidden group">

                <Gamecard
                    gameId={item.id}
                    gameImage={item.background_image}
                    gameName={item.name}
                    gameRating={item.rating}
                    compo={<div className=" md:w-10 md:h-10 w-6 h-6  flex items-center justify-center rounded-full bg-white absolute md:right-4 md:top-4 top-2 right-2 shadow-md -translate-y-20  group-hover:translate-y-0  transition-transform duration-300 overflow-hidden " onClick={() => dispatch(removeFromWhislist(item))} >
                        <HiOutlineXMark className='bg-transparent' size={30} />
                    </div>}

                />

            </div>

        )
    })
    return (
        <div>
            {gameList.length > 0 ? (
                <div>
                    <h3 className="flex font-bold text-2xl text-btn font-bld">Whishlist</h3>
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
                        {gameList}
                    </div>
                </div>
            ) : (
                <div className='flex  justify-center items-center  h-[50vh]'>
                    <p className="text-white md:flex flex-col  font-bold md:text-2xl text-lg  font-bld items-center">No games found for "<p className="flex font-bold md:text-2xl text-lg text-btn font-bld"> Whislist is Empty</p> "</p>
                </div>
            )}
        </div>
    )
}

export default Whislist
