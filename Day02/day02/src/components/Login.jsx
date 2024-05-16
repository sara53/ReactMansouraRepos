import React, { useEffect } from 'react'

export function Login() {
    useEffect( () => {
        console.log( "Welcome From Effect From Login" )
        return () => {
            console.log( "Welcome Clean up" )
        }
    }, [] )
    return (
        <div className='alert alert-secondary'>
            <h1>Login</h1>
            <button className='btn btn-success mt-4'>Login</button>
        </div>
    )
}
