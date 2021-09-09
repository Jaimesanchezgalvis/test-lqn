import React from 'react'
import { useParams } from 'react-router'
import { useFetchFilms } from '../../hooks/useFetchFilms';
import { FilmCard } from './FilmCard';

export const GetFilmByTitle = () => {

    const { id } = useParams();

    const { data, loading } = useFetchFilms();

    const title = id.toLocaleLowerCase();
    console.log("🚀 ~ file: GetFilmByTitle.js ~ line 13 ~ GetFilmByTitle ~ title", title)
    const resultado = data && data.filter(dat => dat.title.toLocaleLowerCase().includes(title))

    return (
        <div className="container">
            {loading && <p>Loading...</p>}
            {
                resultado && resultado.map(data => (
                    <FilmCard
                        key={data.title}
                        {...data} />
                ))
            }
        </div>
    )
}
