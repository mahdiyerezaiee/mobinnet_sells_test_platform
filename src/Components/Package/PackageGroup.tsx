import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row } from "react-bootstrap";
import { RootState } from "../../Stores/store";
import { Package } from "../../Interface/interfacePackage";
import "./style/style.scss";
import PackageItem from "./packageItem";
import {fetchPackage} from "../../Reducers/packegeSlice";
import {groupByPackageType} from "../../Utils/groupByPackageType";

/**
 * group packages groupBy packageType Component
 *
 * @constructor
 */
const PackageGroup = () => {
    /** Redux hooks **/
    const state = useSelector((state: RootState) => state.Package);
    const dispatch = useDispatch();

   /** dispatches the fetchPackege action to the store **/
    useEffect(() => {
        fetchPackage(dispatch);
    }, []);


    const groupedProducts = groupByPackageType( state )

    /** Component rendering **/
    return (
        <Row className="justify-content-xl-center">
            {groupedProducts.map((item: any) =>
                item.products.map((item: Package) =>
                    state.packageDuration.hasOwnProperty(item.packageType) &&
                    Number(state.packageDuration[item.packageType]) === item.durationDays ? (
                        <PackageItem item={item} />
                    ) : !state.packageDuration.hasOwnProperty(item.packageType) &&
                    item.durationDays === 30 ? (
                        <PackageItem item={item} />
                    ) : null
                )
            )}
        </Row>
    );
};

export default PackageGroup;




