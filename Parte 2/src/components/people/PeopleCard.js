import React from 'react'

export const PeopleCard = ({
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

    return (
        <div className="card border-dark mb-3 mt-3 " >
            <div class="card-header">Name: {name}</div>
            <div class="card-body text-dark">
                <h5 class="card-title">Name: {name}</h5>
                <p class="card-text">
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
        </div>
    )
}
