import React from 'react'

export function Movie( props ) {
    let { movie } = props
    return (
        <div className="col col-sm-4 mb-3 col-md-3">
            <div className='card'>
                <img src="./3.jpg" alt="" />
                <div className="card-body">
                    <h4>{movie.name}</h4>
                    <p>{movie.desc}</p>
                    <button className='btn btn-success'>Add To Fav</button>
                </div>
            </div>
        </div>
    )
}
