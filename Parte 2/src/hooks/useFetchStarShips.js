import { useEffect, useState } from "react"
import { getStarships as getStarShips } from "../helpers/getStarShips";

export const useFetchStarShips = () => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

useEffect(()=>{
    getStarShips()
        .then(data => {
            setstate({
                data: data,
                loading:false
            });
        })

},[]);

    return state;
}