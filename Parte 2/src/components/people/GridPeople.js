import React from 'react';
import {Link} from 'react-router-dom';

export const GridPeople = ({ birth_year, name, created, edited, eye_color, id}) => {
  
    
    return (
        <div className="card-body m-2">
            <h4>Name: {name}</h4>
            <p>Birth Year: {birth_year}</p>
            <p>Created: {created}</p>
            <p>Edited: {edited}</p>
            <p>Eye Color: {eye_color}</p>
            <p>{id}</p>
            <Link to={`./people/${ name }`}

            >
                More info
            </Link>
        </div>
    )
}
