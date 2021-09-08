import React from 'react'

export const GridSpecies = ({ name, average_height, average_lifespan, classification, language}) => {

    return (
        <div className="card-body m-2">
            <h4>Name: {name}</h4>
            <p>Average height: {average_height}</p>
            <p>Average lifespan: {average_lifespan}</p>
            <p>Classification: {classification}</p>
            <p>Language : {language}</p>
        </div>
    )
}
