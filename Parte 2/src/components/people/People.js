import React, { useEffect, useState } from 'react'
import { GridPeople } from './GridPeople';

export const People = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        info();
    }, [])

    const info = async () => {
        const url = 'https://swapi.dev/api/people/'
        const resp = await fetch(url);
        const { results } = await resp.json();
        const people = results.map(data => {
            return {
                name: data.name,
                birth_year: data.birth_year,
                created: data.created,
                edited: data.edited,
                eye_color: data.eye_color,
                id: data.id
            }
        })
        setImages(people)
    }

    return (
        <div className="container card-grid">
                {
                    images.map(data => (
                        <GridPeople
                            key={data.name}
                            {...data} />
                    ))
                }
            </div>
    )
}
