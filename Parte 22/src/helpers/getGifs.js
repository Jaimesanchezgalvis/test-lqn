export  const getGifs = async () => {

    const url = `https://swapi.dev/api/people/`;
    const resp = await fetch(url);
    const { results } = await resp.json();

    
    const gifs = results.map(img => {
        return {
            name:img.name
            // people: img.id,
            // title: img.title,
            // url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}
