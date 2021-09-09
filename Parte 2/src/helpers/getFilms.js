export const getFilms = async () => {
    const url = 'https://swapi.dev/api/films/'
    const resp = await fetch(url);
    const { results } = await resp.json();

    const people = results.map(data => {
        return {
            title: data.title,
            episode_id: data.episode_id,
            opening_crawl: data.opening_crawl,
            director: data.director,
            height: data.height,
            producer: data.producer,
            release_date: data.release_date,
            species: data.species,
            starships: data.starships,
            vehicles: data.vehicles,
            characters: data.characters,
            planets: data.planets,
            created: data.created,
            edited: data.edited,
            id: data.id,
        }
    })
     return people
}