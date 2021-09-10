import React from 'react'
import { useHistory  } from 'react-router-dom'

export const PlanetCard = ({
    birth_year,
    name,
    created,
    edited,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    skin_color,
}) => {
    const history = useHistory();
    return (
        <div className="card border-dark mb-3 mt-3 " >
            <div className="card-header">Name: {name}</div>
            <div className="card-body text-dark">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text">
                    Birth Year: {birth_year} <br />
                    Created: {created} <br />
                    Edited: {edited} <br />
                    Eye Color: {eye_color} <br />
                    Gender: {gender} <br />
                    Hair color: {hair_color} <br />
                    Height: {height} <br />
                    Mass: {mass} <br />
                    Skin color: {skin_color} <br />
                </p>
            </div>
            <button
            className="btn btn-outline-dark"
                onClick={() => history.goBack()}
            >Back</button>
        </div>
    )
}
