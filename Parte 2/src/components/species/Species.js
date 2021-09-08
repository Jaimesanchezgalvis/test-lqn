import React, { useEffect, useState } from 'react'
import { GridSpecies } from './GridSpecies';

export const Species = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        info();
    }, [])


    const info = async () => {
        const url = 'https://swapi.dev/api/species/'
        const resp = await fetch(url);
        const { results } = await resp.json();


        const species = results.map(data => {
            return {
                name: data.name,
                average_height: data.average_height,
                average_lifespan: data.average_lifespan,
                classification: data.classification,
                language: data.language,
            }
        })
        setImages(species)
    }

    return (
        <div className="container card-grid">
            {
                images.map(data => (
                    <GridSpecies
                        key={data.name}
                        {...data} />
                ))
            }
        </div>

    )
}
