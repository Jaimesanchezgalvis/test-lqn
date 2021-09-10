import React from 'react'
import { useFetchFilms } from '../../hooks/useFetchFilms';
import { GridFilms } from './GridFilms';
import "animate.css"

export const Films = () => {

    const { data, loading } = useFetchFilms();

    return (
        <div className="container card-grid animate__animated animate__zoomIn">
            {loading && <p>Loading...</p>}
            {
                data.map(data => (
                    <GridFilms
                        key={data.name}
                        {...data} />
                ))
            }
        </div>

    )
}
