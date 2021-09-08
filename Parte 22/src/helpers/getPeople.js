export const getGifs = async () => {
    const url = `https://swapi.dev/api/people/`;
    const resp = await fetch(url);
    const { results } = await resp.json();
    console.log(results)
    const people = results.map( caracter => {
        return {
            name: caracter.name,
            birth_year: caracter.birth_year,
            // title: img.title,
            // url: img.images?.downsized_medium.url
        }
    })
    return people;
}