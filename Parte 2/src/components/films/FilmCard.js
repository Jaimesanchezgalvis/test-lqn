import React from 'react'
import { useHistory  } from 'react-router-dom'

export const FilmCard = ({
title,
episode_id,
opening_crawl,
director,
height,
producer,
release_date,
species,
starships,
vehicles,
characters,
planets,
created,
edited,
id,
}) => {
    const history = useHistory();
    return (
        <div className="card border-dark mb-3 mt-3 " >
            <div className="card-header">Name: {title}</div>
            <div className="card-body text-dark">
                <h5 className="card-title">Name: {title}</h5>
                <p className="card-text">
                    Episode: {episode_id} <br />
                    Opening crawl: {opening_crawl} <br />
                    Director: {director} <br />
                    Producer: {producer} <br />
                    Release date: {release_date} <br />
                    {/* Species: {species} <br /> */}
                    {/* Starships: {starships} <br /> */}
                    {/* Vehicles: {vehicles} <br /> */}
                    {/* Characters: {characters} <br /> */}
                    Created: {created} <br />
                    Edited: {edited} <br />
                </p>
            </div>
            <button
            className="btn btn-outline-dark"
                onClick={() => history.goBack()}
            >Back</button>
        </div>
    )
}
