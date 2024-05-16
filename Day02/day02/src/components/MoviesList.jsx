import React from 'react'
import { Movie } from './Movie'

export function MoviesList() {
    let movies = [
        {
            id: 1,
            name: "Over The Moon",
            desc: "lorem Text "
        },
        {
            id: 2,
            name: "The Sun",
            desc: "lorem Text "
        },
        {
            id: 3,
            name: "The Earth",
            desc: "lorem Text "
        },
        {
            id: 4,
            name: "The Elephant",
            desc: "lorem Text "
        },
    ]
    return (
        <div className='bg-dark p-5 text-light text-center'>
            <div className="container">
                <h1 className='text-warning mb-4'>Movies List</h1>
                <div className="row">
                    {movies.map( ( movie ) =>
                        <Movie key={movie.id} movie={movie} />
                    )}
                </div>
            </div>
        </div>
    )
}
