import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import Theme, { IThemeExport } from "../../../Themes/colors";


export const themeSlice=createSlice({
            name:"theme",
            initialState:Theme,
            reducers:{

            }
        })

export default themeSlice.reducer;