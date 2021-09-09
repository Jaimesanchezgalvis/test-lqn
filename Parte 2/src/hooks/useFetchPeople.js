import { useEffect, useState } from "react"
import { getPople } from "../helpers/getPople";

export const useFetchPeople = () => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

useEffect(()=>{
    getPople()
        .then(data => {
            setstate({
                data: data,
                loading:false
            });
        })

},[]);

    return state;
}