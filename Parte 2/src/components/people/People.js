import React, { useEffect, useState } from 'react'
import { getPople } from '../../helpers/getPople';
import { GridPeople } from './GridPeople';

export const People = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
    getPople()
    .then( data => setImages(data)   )
    }, [])

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
