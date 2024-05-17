import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link, useLoaderData } from 'react-router-dom'


import { deleteBook, getAllBooks } from '../api/bookApi'
export function Books() {


    const { data } = useLoaderData();

    let [ books, setBooks ] = useState( data )
    let [ isError, setIsError ] = useState( false )


    // useEffect( () => {
    //     const fetchData = async () => {

    //         try {
    //             const response = await getAllBooks()
    //             setBooks( response.data )
    //         } catch ( error ) {
    //             setIsError( true )
    //             console.log( error )
    //         }
    //     }

    //     fetchData();


    // }, [] )



    const deleteHandler = async ( bookId ) => {
        const response = await deleteBook( bookId )
        console.log( response.data )
        const newList = books.filter( book => book.id != bookId )
        setBooks( [ ...newList ] )

    }
    return (
        <div className=' p-5 text-center'>
            <div className="container"></div>
            <h1 className='text-muted mb-4'>Our Books</h1>

            <div className='d-flex p-3'>
                <Link to='/books/0/edit' >
                    <i className="fs-1 bi bi-plus-circle-fill text-success"></i>
                </Link>
            </div>

            {isError ? <h1 className='alert alert-danger'>Can't load Books</h1> :

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books && books.map( book => {
                            return (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>
                                        {book.desc}
                                    </td>
                                    <td>
                                        <Link to={`/books/${book.id}`}>
                                            <i className="fs-2 mx-1 text-warning bi bi-eye-fill"></i>
                                        </Link>
                                        <i onClick={() => deleteHandler( book.id )} className="fs-2 mx-1 text-danger bi bi-trash3-fill"></i>
                                        <Link to={`/books/${book.id}/edit`}>
                                            <i className="fs-2 mx-1 text-info bi bi-pencil-square"></i>
                                        </Link>
                                    </td>
                                </tr>

                            )
                        } )}

                    </tbody>
                </Table>}
        </div>
    )
}
