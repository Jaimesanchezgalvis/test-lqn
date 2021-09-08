import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { PeopleCard } from './PeopleCard';

export const GetPeopleByName = () => {

    const { id } = useParams();
    const [images, setImages] = useState([]);


    useEffect(() => {
        info();
    }, [])

    const name = id.toLocaleLowerCase();
    const resultado = images && images.filter(hero => hero.name.toLocaleLowerCase().includes(name))

    const info = async () => {
        const url = 'https://swapi.dev/api/people/'
        const resp = await fetch(url);
        const { results } = await resp.json();

        const people = results.map(data => {
            return {
                name: data.name,
                birth_year: data.birth_year,
                eye_color: data.eye_color,
                gender: data.gender,
                hair_color: data.hair_color,
                height: data.height,
                mass: data.mass, 
                skin_color: data.skin_color,
                homeworld: data.homeworld,
                films: data.films,
                species: data.species,
                starships: data.starships,
                vehicles: data.vehicles,
                created: data.created,
                edited: data.edited,
                id: data.id,
            }
        })
        setImages(people)
    }

    return (
        <div className="container">
            {
                resultado && resultado.map(data => (
                    <PeopleCard
                        key={data.name}
                        {...data} />
                ))
            }
        </div>
    )
}
