import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosCreate } from "../../service/api";

const API_KEY = import.meta.env.VITE_API_KEY



export const fetchGames = createAsyncThunk('games/fetchGames', async ({ page = 1, pageSize = 20, searchTerm = '' }: { page?: number, pageSize?: number, searchTerm?: string }) => {
    const searchParam = searchTerm ? `&search=${encodeURIComponent(searchTerm)}`:'';
    const response = await axiosCreate.get(`games?key=${API_KEY}&page_size=${pageSize}&page=${page}${searchParam}`)
    return response.data.results
})

// Define the interface for the game data

interface Game {
    id: number;
    name: string;
    released: string;
    background_image: string;
    short_screenshots: string[];
    rating: number
}

// Define the initial state interface

interface GameState {
    game: Game[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;


}

// declare initail state

const initialState: GameState = {
    game: [],
    status: 'idle',
    error: null
}

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGames.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.game = action.payload
            })
            .addCase(fetchGames.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message || 'Failed to fetch games';
            })
    }

})

export default gamesSlice.reducer