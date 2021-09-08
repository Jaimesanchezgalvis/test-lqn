import React, { useEffect, useState } from 'react'
import { GridStartShips } from './GridStartShips';

export const Startships = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        info();
    }, [])


    const info = async () => {
        const url = 'https://swapi.dev/api/starships/'
        const resp = await fetch(url);
        const { results } = await resp.json();


        const startships = results.map(data => {
            return {
                name: data.name,
                consumables: data.consumables,
                created: data.created,
                length: data.length,
                passengers: data.passengers,
            }
        })
        setImages(startships)
    }

    return (
        <div className="container card-grid">
            {
                images.map(data => (
                    <GridStartShips
                        key={data.name}
                        {...data} />
                ))
            }
        </div>

    )
}
