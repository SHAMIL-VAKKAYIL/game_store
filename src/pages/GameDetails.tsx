import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gameDetails } from '../store/slices/gameDetails'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import ReactLoading from 'react-loading';
import { addToWhislist, removeFromWhislist } from '../store/slices/wishlistslice'

function GameDetails() {
    interface IPlatform {
        id: number
        name: string
    }
    interface IStore {
        id: number
        name: string
    }

    interface IGameDetails {
        id: number
        name: string
        background_image: string
        background_image_additional: string
        description_raw: string
        released: string
        playtime: number
        rating: number
        platforms: { platform: IPlatform }[]
        stores: { store: IStore }[]
    }

    const whishlist = useSelector((state: RootState) => state.wishlist.game)

    const { id } = useParams<{ id: string }>()
    const [detail, setDetail] = useState<IGameDetails | null>(null)
    const [fulldesc, setFulldesc] = useState<boolean>(true)

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const data = await gameDetails(id)
                setDetail(data)
            } catch (error) {
                console.error('Error fetching details:', error)
            }
        }
        fetchDetails()
    }, [id])
    interface Igames {
        id: number;
        name: string;
        background_image?: string;
        rating?: number

    }

    const dispatch = useDispatch<AppDispatch>()

    const toogleWhislist = (detail: IGameDetails) => {
        if (whishlist.find((item: Igames) => item.id === detail.id)) {
            dispatch(removeFromWhislist(detail))
        } else {
            dispatch(addToWhislist(detail))
        }
    }
    const isInWhislist = whishlist.some((game: Igames) => game.id === detail?.id)


    return (
        <div className=" text-white min-h-screen relative">
            {detail ? (
                <div>
                    {/*  Slideshow */}
                    <div className=" w-full h-[70vh] relative overflow-hidden bg rounded-md">
                        <div
                            className=" absolute rounded-md w-full h-full bg-cover bg-center opacity-0 animate-slideShow"
                            style={{ backgroundImage: `url(${detail.background_image})` }}
                        ></div>
                        <div
                            className=" absolute rounded-md w-full h-full bg-cover bg-center opacity-0 animate-slideShow"
                            style={{
                                backgroundImage: `url(${detail.background_image_additional})`,
                                animationDelay: '5s',
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center  ">
                            <h1 className="text-4xl md:text-6xl font-bld text-center bg-transparent">{detail.name}</h1>
                            <div className='absolute bottom-4 sm:right-4 right-7 bg-transparent   '>
                                <div className='flex gap-3 bg-transparent   '>
                                    <div className="bg-secondry items-center flex rounded-md " onClick={() => { toogleWhislist(detail) }}>
                                        <p className="text-white font-normal text-center bg-secondry md:text-sm text-xs tracking-wider cursor-pointer">{isInWhislist ? 'Remove From Whishlist' : 'Add To Whishlist'}</p>
                                        {isInWhislist ? <FaHeart className="bg-transparent w-6 sm:w-auto z-10 ml-[.5px] transition-transform duration-300 translate-y-0" size={36} color="#FF5722" /> :
                                            <FaRegHeart className="bg-transparent w-6 sm:w-auto z-10 ml-[.5px] transition-transform duration-300" size={36} color="#fffff" />}
                                    </div>
                                    <div className="bg-secondry items-center  flex rounded-md ">
                                        <p className="text-white font-normal bg-secondry md:text-sm text-xs">{detail.rating}</p>
                                        <div className="bg-transparent  md:flex items-center">
                                            <FaStar color="#FF5722" size={20} className="bg-secondry" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Game Details */}
                    <div className="container mx-auto px-5 py-8 space-y-8">

                        <div className="flex flex-wrap gap-8 justify-between">
                            <div className="space-y-3">
                                <h2 className="text-xl sm:text-2xl  text-btn font-med tracking-wider ">Platforms</h2>
                                <div className="flex flex-wrap gap-2">
                                    {detail.platforms.map((platform) => (
                                        <span
                                            key={platform.platform.id}
                                            className="bg-secondry font-normal px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm tracking-wide"
                                        >
                                            {platform.platform.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h2 className="text-xl sm:text-2xl  text-btn font-med tracking-wider ">Available Stores</h2>
                                <div className="flex flex-wrap gap-2">
                                    {detail.stores.map((store) => (
                                        <span
                                            key={store.store.id}
                                            className="bg-secondry font-normal px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm tracking-wide"
                                        >
                                            {store.store.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-xl sm:text-2xl  text-btn font-med tracking-wider ">Description</h2>
                            <p className="leading-relaxed text-gray-300 text-sm sm:text-base">{fulldesc ?  detail.description_raw.split(' ').slice(0, 90).join(' ')  :  detail.description_raw }<span className='text-btn cursor-pointer' onClick={() => setFulldesc(!fulldesc)}> {fulldesc ? 'view more' : 'view less'} </span></p>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-5">
                            <div className="p-4 rounded-lg shadow-md">
                                <h3 className="text-xl sm:text-2xl  text-btn font-med tracking-wider ">Playtime</h3>
                                <p className="text-white text-sm sm:text-base font-normal tracking-wide">{detail.playtime} Hours</p>
                            </div>
                            <div className="p-4 rounded-lg shadow-md">
                                <h3 className="text-xl sm:text-2xl  text-btn font-med tracking-wider ">Release Date</h3>
                                <p className="text-white text-sm sm:text-base font-normal tracking-wide">{detail.released}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center min-h-screen">
                    <ReactLoading type={'cylon'} color={'#FFCC00'} height={'15%'} width={'15%'} />
                </div>
            )}
        </div>
    )
}

export default GameDetails
