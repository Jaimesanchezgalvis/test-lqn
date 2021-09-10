import React from 'react'
import { useParams } from 'react-router'
import { useFetchPlanet } from '../../hooks/useFetchPlanet';
import { PlanetCard } from './PlanetCard';

export const GetPlanetByName = () => {

    const { id } = useParams();
    const { data, loading } = useFetchPlanet();
    const name = id.toLocaleLowerCase();
    const resultado = data && data.filter(planet => planet.name.toLocaleLowerCase().includes(name))

    return (
        <div className="container">
            {loading && <p>Loading...</p>}
            {
                resultado && resultado.map(data => (
                    <PlanetCard
                        key={data.name}
                        {...data} />
                ))
            }
        </div>
    )
}
