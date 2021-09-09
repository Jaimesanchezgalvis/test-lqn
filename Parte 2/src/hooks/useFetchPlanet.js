import { useEffect, useState } from "react"
import { getPlanet } from "../helpers/getPlanet";

export const useFetchPlanet = () => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

useEffect(()=>{
    getPlanet()
        .then(data => {
            setstate({
                data: data,
                loading:false
            });
        })

},[]);

    return state;
}