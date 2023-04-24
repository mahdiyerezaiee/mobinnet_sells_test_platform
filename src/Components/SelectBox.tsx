import { selectPackegeDuration} from "../Reducers/packegeSlice";
import React, {useReducer, useState} from "react";
import {Button, ButtonGroup, Form, Nav} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Stores/store";
interface Props {
    PackageType: number
    value : any
}

const SelectBox = ({ PackageType , value}: Props) => {

    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.Package);

    // handle duration select change for a specific item
    const TypePackegeHandler = (itemId: number, event: any) => {
        dispatch(selectPackegeDuration((prevSelectedDuration: any) =>  ({
            ...prevSelectedDuration,
            [itemId]: event
        })))
    }

    return (

                <Form.Select
                    className="w-100 rounded mt-5"
                    value={state.packageDuration[value]}
                    onChange={(e: any) => TypePackegeHandler(PackageType , e.target.value)}
                >
                    <option value="30">1 ماهه</option>
                    <option value="90">3 ماهه</option>
                    <option value="180">6 ماهه</option>
                    <option value="365">1 ساله</option>
                </Form.Select>


    );
};
export default SelectBox