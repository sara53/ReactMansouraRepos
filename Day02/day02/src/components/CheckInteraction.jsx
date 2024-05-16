import React from 'react'
import { CheckProps } from './CheckProps';

const CheckInteraction = ( props ) => {
    let { getCountData, title } = props
    let count = 30;
    getCountData( count )
    return (
        <div className='bg-dark p-5 text-light text-center'>
            <h1>Check Interaction  : {title}</h1>
            <CheckProps newTitle={title} />
        </div>
    )
}

export default CheckInteraction
