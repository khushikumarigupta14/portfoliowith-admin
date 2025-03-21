// src/redux/homeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch home data from API
export const fetchHomeData = createAsyncThunk('home/fetchHomeData', async () => {
    const response = await fetch('/api/home');
    return response.json();
});

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        title: 'Welcome to My Portfolio',
        description: 'I build amazing web experiences.',
        status: 'idle',
        error: null,
    },
    reducers: {
        updateHome: (state, action) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchHomeData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.title = action.payload.title;
                state.description = action.payload.description;
            })
            .addCase(fetchHomeData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { updateHome } = homeSlice.actions;
export default homeSlice.reducer;