import React from 'react'
import { useParams } from 'react-router'
import { useFetchPeople } from '../../hooks/useFetchPeople';
import { PeopleCard } from './PeopleCard';

export const GetPeopleByName = () => {

    const { id } = useParams();

    const { data, loading } = useFetchPeople();

    const name = id.toLocaleLowerCase();
    const resultado = data && data.filter(hero => hero.name.toLocaleLowerCase().includes(name))

    return (
        <div className="container">
            {loading && <p>Loading...</p>}
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
