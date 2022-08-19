import { configureStore } from "@reduxjs/toolkit";
import themeRedurce from "./features/ThemeSlice";

const themeStored=configureStore<any>({
    reducer:{
        theme:themeRedurce,
    },
})

export type RootState = ReturnType<typeof themeStored.getState>
export type AppDispatch = typeof themeStored.dispatch

export {themeStored};