import React from 'react'
import { getGifs } from '../helpers/getGifs'
// import PropTypes from 'prop-types'
// import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = () => {

    const nombre = getGifs();
    console.log("🚀 ~ file: GifGrid.js ~ line 11 ~ GifGrid ~ gifs", nombre)


    

    // const { results: images, loading } = useFetchGifs(category);
    
    return (
        <>
            {/* <h3>{category}</h3> */}

            {/* {loading && <p>'cargando...'</p>} */}

            <div className="card-grid">
                {
                    nombre.map(img =>
                        <GifGridItem
                            key={img.name}
                            {...img} 
                            />
                    )}
            </div>
        </>
    )
}

// GifGrid.propTypes = {
//     category: PropTypes.string.isRequired
// }