import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movie',
    initialState:{
        nowPlayingMovies: null,
        trailerVideos: null,
        popularMovies: null,
        topRated:null,
        seriesTop: null,
        
        
        
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTrailerVideos:(state,action)=>{
            state.trailerVideos = action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated = action.payload;
        },
        addSeriesTop:(state,action)=>{
            state.seriesTop = action.payload;
        },
        
       
    }
})

export const {addNowPlayingMovies,addTrailerVideos,addPopularMovies,addTopRated,addSeriesTop} = movieSlice.actions;
export default movieSlice.reducer;