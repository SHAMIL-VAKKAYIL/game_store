// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosCreate } from "../../service/api";

// const API_KEY = import.meta.env.VITE_API_KEY


// export const fetchgenreGame = createAsyncThunk('genreGames/fetchgenreGame' ,async (id:any) => {
//     const response = await axiosCreate.get(`/genres/${id}?key=${API_KEY}`)
//     return response.data
    
// })

// interface IgenreGame {
//     id: number;
//     name: string;
//     released: string;
//     background_image: string;
//     short_screenshots: string[];
//     rating: number
// }

// interface genreGamesState {
//     game: IgenreGame[],
//     status: 'idle' | 'loading' | 'succeeded' | 'failed',
//     error: string | null
// }

// const initialState: genreGamesState = {
//     game: [],
//     status: 'idle',
//     error: null
// }

// const genregamesSlice = createSlice({
//     name: 'genreGames',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchgenreGame.pending, (state) => {
//                 state.status = "loading"

//             })
//             .addCase(fetchgenreGame.fulfilled, (state, action) => {
//                 state.game = action.payload
//                 state.status="succeeded"
//             })
//             .addCase(fetchgenreGame.rejected,(state)=>{
//                 state.status="failed"
//             })
//     }
// })
// export default genregamesSlice.reducer