import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export function ProductForm( { products, setProducts } ) {
    let [ formData, setFormData ] = useState( {
        name: '',
        price: ''
    } );


    const changeHandler = ( e ) => {
        setFormData( {
            ...formData,
            [ e.target.name ]: e.target.value
        } )

    }

    const submitHandler = ( e ) => {
        e.preventDefault()
        setProducts( [ ...products, formData ] )
        setFormData( {
            name: '',
            price: ''
        } )
    }
    return (
        <div className='container mt-5'>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text"
                        name="name"

                        value={formData.name}
                        onChange={changeHandler}
                        placeholder="Enter Product Name" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        name="price"
                        onChange={changeHandler}
                        value={formData.price}

                        type="number" placeholder="Enter Product Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Free Shipping" />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Add Product
                </Button>
            </Form>

        </div>
    )
}
