import React from 'react'

export const GridStartShips = ({ name, consumables, created, length, passengers}) => {

    return (
        <div className="card-body m-2">
            <h4>Name: {name}</h4>
            <p>Consumables: {consumables}</p>
            <p>Created: {created}</p>
            <p>Length: {length}</p>
            <p>Passengers : {passengers}</p>
        </div>
    )
}
