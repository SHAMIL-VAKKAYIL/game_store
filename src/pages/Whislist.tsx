import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { FaStar } from 'react-icons/fa';
import { HiOutlineXMark } from 'react-icons/hi2';
import { removeFromWhislist } from '../store/slices/wishlistslice';

function Whislist() {

    const dispatch=useDispatch<AppDispatch>()
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
            <div key={item.id} className=" ">
                <div className="gap-5 w-60  ">
                    <div className="relative overflow-hidden group ">
                        <img src={item.background_image} alt="" className="w-64 h-72 object-cover rounded-lg" />
                        <div className=" w-10 h-10  flex items-center justify-center rounded-full bg-white absolute right-4 top-4 shadow-md -translate-y-20  group-hover:translate-y-0  transition-transform duration-300 overflow-hidden "onClick={()=>dispatch(removeFromWhislist(item))} >
                        <HiOutlineXMark className='bg-transparent' size={30} />

                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-white font-med">{item.name?.split('').slice(0, 20).join('')}</h3>
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
                    <p className="text-white flex font-bold text-2xl  font-bld items-center">No games found for "<p className="flex font-bold text-2xl text-btn font-bld"> Whislist is Empty</p> "</p>
                </div>
            )}
        </div>
    )
}

export default Whislist
