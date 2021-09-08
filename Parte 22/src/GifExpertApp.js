import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = ({ defaultCategories = ['One Punch'] }) => {
    const [categories, setCategories] = useState(defaultCategories)

    // const handleAdd = ()=>{
    //     setCategories(['HunterXhunter',...categories]);
    // }
    const hello = () => {
        console.log("hello")
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={setCategories}
                nuevaprop={hello}
            />
            {/* linea de division */}
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
