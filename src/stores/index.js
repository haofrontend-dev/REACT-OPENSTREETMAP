import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger'

// * IMPORT
import mapReducer from './modules/maps/mapSlice';
const logger = createLogger();

const store = configureStore({
    reducer: {
        maps: mapReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store