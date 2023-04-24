import {Button, Col, Row} from "react-bootstrap";
import {Images} from "../../Configs/images";
import traffic from "../../Assets/img/traffic.svg";
import RAM from "../../Assets/img/ram.svg";
import CPU from "../../Assets/img/cpu.svg";
import SSD from "../../Assets/img/ssd.svg";
import SelectBox from "../SelectBox/SelectBox";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Stores/store";
import {setPackegeSelectId} from "../../Reducers/packegeSlice";
import {ConvertIrrToIrt} from "../../Utils/priceHandler";
import {Package} from "../../Interface/interfacePackage";

/**
 * Interface definition
 */

interface Props {
    item: Package
}

/**
 * Component definition
 *
 * @param item
 * @constructor
 */
const PackageItem: React.FC<Props> = ({item,}) => {

    /** Redux hooks **/
    const state = useSelector((state: RootState) => state.Package);
    const dispatch = useDispatch();


    /** Event handlers **/
    const handleSelectPackage = (packageId: string) => {
        dispatch(setPackegeSelectId(packageId));
    };



    /** Component rendering **/
    return (
        <Col lg={3} xl={2} md={6} sm={6} xs={12} key={item.id} className="text-center p-sm-2 p-xl-0 p-lg-2 p-md-2 m-xl-auto ">

            <div className={state.packageSelectId === item.id ? "packageItem selected" : " packageItem "}>
                <div className="px-3 py-5 mb-sm-4">
                    {item.discount ? <div className="discountPercent">  %{item.discountPercent}</div> : null}

                    <div className="bg-img">
                        <img className={item.discount? "fixedImg":""} src={Images[item.packageType]}/>
                    </div>

                    <h5>{item.packageName}</h5>
                    <Row>
                        <Col lg={12} md={12} xs={12} className={item.discount ? " ": "mb-3 "}>
                           <p className="price-notDisconut">{ item.discount ? ConvertIrrToIrt(item.price) : " "}</p>
                        </Col>
                        <Col lg={6} md={6} xs={6}>
                            <p className="price">{item.discount ? ConvertIrrToIrt(item.price - item.discount) :  ConvertIrrToIrt(item.price)}</p>
                        </Col>
                        <Col lg={6} md={6} xs={6}>
                            <p className="currency">تومان/ ماهانه</p>
                        </Col></Row>
                    <Row>
                        <Col lg={6} md={6} xs={6}>
                            <img className="float-end" src={traffic}/>
                            <span className="float-end mx-1 ">Traffic: </span>
                            <span className="float-end text-dark"> {item.trafficCapacity}  </span>
                        </Col>
                        <Col lg={6} md={6} xs={6}>
                            <img className="float-end" src={RAM}/>
                            <span className="float-end mx-1 ">RAM: </span>
                            <span className=" float-end text-dark">گیگ {item.ramCapcity}  </span>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col lg={6} md={6} xs={6}>
                            <img className="float-end" src={CPU}/>
                            <span className="float-end mx-1 ">CPU: </span>
                            <span className="float-end text-dark ">هسته {item.cpuCapacity}  </span>
                        </Col>
                        <Col lg={6} md={6} xs={6}>
                            <img className="float-end" src={SSD}/>
                            <span className="float-end mx-1 ">SSD: </span>
                            <span className="float-end text-dark ">گیگ {item.storageCapacity}  </span>
                        </Col>
                    </Row>
                    <SelectBox PackageType={item.packageType} value={item.packageType}/>
                    <Button className={state.packageSelectId === item.id ? "select-btn" : ""}
                            onClick={() => handleSelectPackage(item.id)}>
                        {state.packageSelectId === item.id ? "پرداخت" : "انتخاب"}
                        <svg className="tik" xmlns="http://www.w3.org/2000/svg" width="19.244" height="19.83"
                             viewBox="0 0 19.244 19.83">
                            <path id="Path_5481" data-name="Path 5481"
                                  d="M2909.141,3530.114c-.148-.02,5.5,7.539,5.5,7.539l9-15.087"
                                  transform="translate(-2907.136 -3519.823)" fill="none" stroke="#fff"
                                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                        </svg>
                    </Button>
                </div>
            </div>
        </Col>)
}
export default PackageItem