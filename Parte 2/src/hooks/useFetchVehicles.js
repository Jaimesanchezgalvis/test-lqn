import { useEffect, useState } from "react"
import { getVehicles } from "../helpers/getVehicles";

export const useFetchVehicles = () => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

useEffect(()=>{
    getVehicles()
        .then(data => {
            setstate({
                data: data,
                loading:false
            });
        })

},[]);

    return state;
}