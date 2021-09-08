import React, { useEffect, useState } from 'react'
import { GridFilms } from './GridFilms';

export const Films = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        info();
    }, [])


    const info = async () => {
        const url = 'https://swapi.dev/api/films/'
        const resp = await fetch(url);
        const { results } = await resp.json();

        const films = results.map(data => {
            return {
                title: data.title,
                producer: data.producer,
                created: data.created,
                opening_crawl: data.opening_crawl,
            }
        })
        setImages(films)
    }

    return (
        <div className="container card-grid">
            {
                images.map(data => (
                    <GridFilms
                        key={data.name}
                        {...data} />
                ))
            }
        </div>

    )
}
