import React from 'react'

export const GridPlanets = ({ name, climate, diameter, gravity, rotation_period}) => {

    return (
        <div className="card-body m-2">
            <h4>Name: {name}</h4>
            <p>Climate: {climate}</p>
            <p>Diameter: {diameter}</p>
            <p>Gravity: {gravity}</p>
            <p>Rotation Period: {rotation_period}</p>
        </div>
    )
}
