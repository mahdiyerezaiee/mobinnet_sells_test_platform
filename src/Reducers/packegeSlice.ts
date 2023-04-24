import { createSlice } from "@reduxjs/toolkit";
import {Package} from "../Interface/interfacePackage";
import {GetPackageGroupService} from "../Services/PackageGroupService";

/**
 *  Define the initial state of the package slice
 */
export const PackegeState:any = {
    packageSelectId: "",
    packageDuration:{},
    body: null
};

/**
 *  Create the package slice with reducer functions
 *
 **/

export const PackageSlice = createSlice({
    name: "Packege",
    reducers: {
        setPackege: (state: any, action: { payload: Package[] }) => {
            state.body = action.payload;
        },
        setPackegeSelectId: (state: any, action: { payload: string }) => {
            state.packageSelectId = action.payload;
        },
        selectPackegeDuration: (state: any, action: { payload: any }) => {

            state.packageDuration = action.payload(state.packageDuration);
        },

    },
    initialState: PackegeState
});

/** Define an async action to fetch the package data **/
export const fetchPackage =  async (dispatch: any) => {
    try {
        const { data, status } = await GetPackageGroupService();
        if (status === 200) {
            dispatch(setPackege(data));
        }
    } catch (error) {
        console.log(error);
    }
};

/** Export the reducer and actions **/

export const { setPackege, setPackegeSelectId,  selectPackegeDuration } = PackageSlice.actions;
export const PackageReducer = PackageSlice.reducer;
