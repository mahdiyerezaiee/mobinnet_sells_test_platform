import axios from "axios";
import {toast} from "react-toastify";


axios.defaults.headers.get["x-api-key"] = "PMAK-61325d70088f41003cdecd8a-dcb8940943ee694609eb0faf438043248d";

axios.interceptors.response.use(

    resp => resp, async error => {
        if ( error.response.status >= 300 ) {
            toast.error('سرور پاسخگو نیست', {
                position: "top-right",
                closeOnClick: true
            });
        }
        return Promise.reject(error);
    });
export default {
    get: axios.get,
};