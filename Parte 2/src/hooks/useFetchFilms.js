import { useEffect, useState } from "react"
import { getFilms } from "../helpers/getFilms";

export const useFetchFilms = () => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

useEffect(()=>{
    getFilms()
        .then(data => {
            setstate({
                data: data,
                loading:false
            });
        })

},[]);

    return state;
}