import { configureStore } from "@reduxjs/toolkit";
import wishlistreducer from "./slices/wishlistslice";
import gamereducer from "./slices/gameSlice";
import genrereducer from './slices/genreSlice'

export const store= configureStore({
    reducer:{
        wishlist:wishlistreducer,
        games:gamereducer,
        genre:genrereducer,
    }
})
export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch