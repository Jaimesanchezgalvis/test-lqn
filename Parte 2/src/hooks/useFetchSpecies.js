import { useEffect, useState } from "react"
import { getSpecies } from "../helpers/getSpecies";

export const useFetchSpecies = () => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

useEffect(()=>{
    getSpecies()
        .then(data => {
            setstate({
                data: data,
                loading:false
            });
        })

},[]);

    return state;
}