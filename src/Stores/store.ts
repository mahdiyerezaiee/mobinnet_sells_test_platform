import {configureStore} from "@reduxjs/toolkit";
import {PackageReducer} from "../Reducers/packegeSlice";

export const  store = configureStore({
    reducer:{
        Package: PackageReducer,

    },
    middleware: (getDefaultMiddleware:any) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch