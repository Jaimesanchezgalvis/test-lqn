import React from 'react'
import { useFetchPeople } from '../../hooks/useFetchPeople';
import { GridPeople } from './GridPeople';

export const People = () => {

    const { data, loading } = useFetchPeople();
 
    return (
        <div className="container card-grid animate__animated animate__zoomIn">
            {loading && <p>Loading...</p> }
                {
                    data.map(data => (
                        <GridPeople
                            key={data.name}
                            {...data} />
                    ))
                }
            </div>
    )
}
