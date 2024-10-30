import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Define the interface for the game data
interface Game {
    id: number;
    name: string;
    released: string;
    background_image: string;
}

// Define the initial state interface
interface GameState {
    game: Game[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;


}
// declare initail state
const initialState:GameState={
    game:[],
    status :'idle',
    error:null
}


const wishlistSlice = createSlice({
    name: 'whislist',
    initialState,
        reducers:{},
        
})
export default wishlistSlice.reducer