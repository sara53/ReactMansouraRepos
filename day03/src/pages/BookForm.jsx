import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { addNewBook, editBook, getBooksById } from '../api/bookApi'
import { useNavigate, useParams } from 'react-router-dom'
export function BookForm() {
    let [ book, setBook ] = useState( {
        title: "",
        desc: ""
    } )
    const { id } = useParams();
    const navigate = useNavigate();



    useEffect( () => {
        if ( id != 0 ) {
            const fetchData = async () => {
                const response = await getBooksById( id )
                setBook( response.data )
            }
            fetchData()
        }
    }, [] )

    const changeHandler = ( e ) => {
        setBook( {
            ...book,
            [ e.target.name ]: e.target.value
        } )
    }
    const submitHandler = async ( e ) => {
        e.preventDefault()
        try {
            if ( id == 0 ) {

                const response = await addNewBook( book )
                navigate( '/books' )

            } else {

                const response = await editBook( book, id )
                navigate( '/books' )

            }
        } catch ( error ) {
            console.log( error )
        }
    }
    return (
        <div className='container mt-3'>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        placeholder="Enter Book Title"
                        type="text"
                        name="title"
                        value={book.title}
                        onChange={changeHandler}

                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Description"
                        name="desc"
                        onChange={changeHandler}
                        value={book.desc}

                    />
                </Form.Group>

                <Button variant="dark" type="submit">
                    {id == 0 ? "Add New Book" : 'Edit Book'}
                </Button>
            </Form>
        </div>
    )
}
