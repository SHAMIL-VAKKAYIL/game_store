import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { axiosCreate } from "../../service/api";

const API_KEY=import.meta.env.VITE_API_KEY

export const fetchGenres = createAsyncThunk('genre/fetchGenres',async()=>{
    const response=await axiosCreate.get(`genres?key=${API_KEY}`)
    return response.data.results
})

interface Genre{
    id:number;
    name:string;
    slug:string;
    games_count:number;
    image_background:string
    games:[]
}
interface genreState{
    genre:Genre[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState:genreState={
    genre:[],
    status :'idle',
    error:null
}

const genreSlice=createSlice({
    name:'genre',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchGenres.pending, (state)=>{
                state.status='loading'
        })
        .addCase(fetchGenres.fulfilled,(state,action)=>{
            state.status='succeeded'
            state.genre=action.payload
        })
        .addCase(fetchGenres.rejected,(state)=>{
            state.status='failed'
        })
    }
})

export default genreSlice.reducer