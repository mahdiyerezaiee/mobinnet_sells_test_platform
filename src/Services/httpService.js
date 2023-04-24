import axios from "axios";
import {toast} from "react-toastify";


axios.defaults.headers.get["x-api-key"] = "PMAK-61325d70088f41003cdecd8a-dcb8940943ee694609eb0faf438043248d";

axios.interceptors.response.use(

    resp => resp, async error => {
        if (error.response.status === 500) {

            console.log(error);
            if (error.response.data.error.errorCode >= 400 && error.response.data.error.errorCode <= 499) {

                toast.warning(error.response.data.error.message, {
                    position: "top-right",
                    closeOnClick: true
                });
            }
            else if(error.response.data.error.errorCode===500 && error.response.data.error.message!=="") {

                toast.error(error.response.data.error.message, {
                    position: "top-right",
                    closeOnClick: true
                });
            }
            else{
                toast.error('سرور پاسخگو نیست', {
                    position: "top-right",
                    closeOnClick: true
                });
            }


        }


        return Promise.reject(error);
    });



export default {
    get: axios.get,

};