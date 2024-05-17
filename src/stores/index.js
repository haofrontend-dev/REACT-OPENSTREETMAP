import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger'

const logger = createLogger();

const store = configureStore({
    reducer: {
        maps: []
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store