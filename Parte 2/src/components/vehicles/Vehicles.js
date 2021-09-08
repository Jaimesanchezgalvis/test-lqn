import React, { useEffect, useState } from 'react'
import { GridVehicles } from './GridVehicles';

export const Vehicles = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        info();
    }, [])


    const info = async () => {
        const url = 'https://swapi.dev/api/vehicles/'
        const resp = await fetch(url);
        const { results } = await resp.json();
        console.log("🚀 ~ file: Vehicles.js ~ line 17 ~ info ~ results", results)


        const vehicles = results.map(data => {
            return {
                name: data.name,
                consumables: data.consumables,
                manufacturer: data.manufacturer,
                max_atmosphering_speed: data.max_atmosphering_speed,
                passengers: data.passengers,
            }
        })
        setImages(vehicles)
    }

    return (
        <div className="container card-grid">
            {
                images.map(data => (
                    <GridVehicles
                        key={data.name}
                        {...data} />
                ))
            }
        </div>

    )
}
