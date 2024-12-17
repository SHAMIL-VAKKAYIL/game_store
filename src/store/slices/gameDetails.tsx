import { axiosCreate } from "../../service/api";


const API_KEY = import.meta.env.VITE_API_KEY


// platforms
interface IPlatform {
    id: number;
    name: string;
}
//stores
interface IStore {
    id: number;
    name: string
}

interface IGameDetails {
    id: number;
    name: string;
    background_image: string;
    description_raw: string;
    released: string;
    rating: number;
    platforms: { platform: IPlatform }[];
    stores: { store: IStore }[]
    playtime: number;
    background_image_additional: string;


}


export const gameDetails = async (id: string | undefined): Promise<IGameDetails> => {
    const response = await axiosCreate.get(`games/${id}?key=${API_KEY}`)
    return response.data
}
