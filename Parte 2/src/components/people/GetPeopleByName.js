import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getPople } from '../../helpers/getPople';
import { PeopleCard } from './PeopleCard';

export const GetPeopleByName = () => {

    const { id } = useParams();
    const [images, setImages] = useState([]);

    useEffect(() => {
        getPople()
            .then(data => setImages(data))
    }, [])

    const name = id.toLocaleLowerCase();
    const resultado = images && images.filter(hero => hero.name.toLocaleLowerCase().includes(name))


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
