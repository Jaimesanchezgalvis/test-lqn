import React from 'react'

export const GridVehicles = ({ name, consumables, manufacturer, max_atmosphering_speed, passengers}) => {

    return (
        <div className="card-body m-2">
            <h4>Name: {name}</h4>
            <p>Consumables: {consumables}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Max atmosphering Speed: {max_atmosphering_speed}</p>
            <p>Passengers : {passengers}</p>
        </div>
    )
}
