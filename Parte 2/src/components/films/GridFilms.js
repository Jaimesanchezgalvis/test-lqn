import React from 'react'

export const GridFilms = ({ title, producer, created, edited, opening_crawl}) => {

    return (
        <div className="card-body m-2">
            <h4>Title: {title}</h4>
            <p>Producer: {producer}</p>
            <p>Created: {created}</p>
            <p>Edited: {edited}</p>
            <p>Opening Crawl: {opening_crawl}</p>
        </div>
    )
}