import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBooksById } from '../api/bookApi';

export function BookDetails() {

    let [ book, setBook ] = useState( {} );
    const { id } = useParams();

    useEffect( () => {

        const fetchData = async () => {
            try {
                const response = await getBooksById( id )
                setBook( response.data )
            } catch ( error ) {
                console.log( error )
            }

        }
        fetchData();
    }, [] )


    return (
        <div className='bg-dark p-5 text-center text-light'>
            <h1> Book Details</h1>
            <p className='lead '>{book.id} : {book.title}</p>
            <p className='lead '>{book.desc}</p>
            <Link className='btn btn-outline-primary' to='/books'>Back To Books</Link>
        </div>
    )
}
