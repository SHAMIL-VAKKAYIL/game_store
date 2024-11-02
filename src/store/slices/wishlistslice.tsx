import { createSlice } from "@reduxjs/toolkit";


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
        reducers:{
            addToWhislist(state,action){
                const newItem = action.payload
                const ExistingItem=state.game.find(game=>game.id == newItem.id)
                if(!ExistingItem){
                    state.game.push({
                        ...newItem
                    })
                }
            },
            removeFromWhislist(state,action){
                const item=action.payload
                const ExistingItem=state.game.find(game=>game.id == item.id)
                if(ExistingItem){
                    state.game=state.game.filter(game=>game.id !== item.id)
                }
            }
        },
})

export const {addToWhislist,removeFromWhislist}=wishlistSlice.actions
export default wishlistSlice.reducer