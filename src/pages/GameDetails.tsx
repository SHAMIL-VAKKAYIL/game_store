import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gameDetails } from '../store/slices/gameDetails'

function GameDetails() {

    interface IPlatform {
        id: number;
        name: string
    }
    interface IStore{
        id:number;
        name:string
    }

    interface IGameDetails {
        id: number;
        name: string;
        background_image: string;
        background_image_additional: string;
        description_raw: string;
        released: string;
        playtime:number;
        rating: number;
        platforms: { platform: IPlatform }[];
        stores:{store:IStore}[]

    }


    const { id } = useParams<{ id: string }>()
    const [detail, setDetail] = useState<IGameDetails | null>(null)

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const data = await gameDetails(id)
                setDetail(data)

            } catch (error) {
                console.error('Error fetching movies:', error);

            }
        }
        fetchDetails()
    }, [id])


    return (
        <div>
            {detail ? (
                <div className='text-white'>
                    <h1 >{detail.name}</h1>
                    <img src={detail.background_image} alt={detail.name} />
                    <img src={detail.background_image_additional} alt={detail.name} />
                    <div>
                        {detail.platforms.map((platform) => (
                            <p key={platform.platform.id} >
                                {platform.platform.name}
                            </p>
                        ))}
                    </div>
                    <div>
                        {detail.stores.map((store) => (
                            <p key={store.store.id} >
                                {store.store.name}
                            </p>
                        ))}
                    </div>
                    <p>{detail.playtime}</p>
                    <p>{detail.description_raw}</p>
                    <p>Release Date: {detail.released}</p>
                    <p>Rating: {detail.rating}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default GameDetails
