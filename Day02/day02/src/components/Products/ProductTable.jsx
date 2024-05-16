import React from 'react'
import { Table } from 'react-bootstrap'

export function ProductTable( { products, setProducts } ) {
    console.log( products )
    return (
        <div className='mt-4 bg-light p-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Price Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map( ( product, index ) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><button className='btn btn-danger'>Remove</button></td>
                            </tr>
                        )
                    } )}
                </tbody>
            </Table>

        </div>
    )
}
