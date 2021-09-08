import React, { useEffect, useState } from 'react'
import { GridPlanets } from './GridPlanets';

export const Planets = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        info();
    }, [])


    const info = async () => {
        const url = 'https://swapi.dev/api/planets/'
        const resp = await fetch(url);
        const { results } = await resp.json();
        

        const planets = results.map(data => {
            return {
                name: data.name,
                climate: data.climate,
                diameter: data.diameter,
                gravity: data.gravity,
                rotation_period: data.rotation_period,
            }
        })
        setImages(planets)
    }

    return (
        <div className="container card-grid">
            {
                images.map(data => (
                    <GridPlanets
                        key={data.name}
                        {...data} />
                ))
            }
        </div>

    )
}
