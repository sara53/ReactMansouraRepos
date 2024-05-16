import React, { useEffect, useState } from 'react'
import { Login } from './Login'

export default function CheckUseEffect() {
    let [ show, setShow ] = useState( false );
    const toggle = () => {
        setShow( !show )
    }

    return (
        <div className='bg-dark text-light text-center p-5'>
            {console.log( "Render From useEffect Parent Comp" )}
            <h1>Use Effect</h1>
            <button onClick={toggle} className='mb-4 btn btn-danger'>Toggle Comp</button>
            {show && <Login />}
            <p className='lead bg-secondary p-3 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quasi facilis enim recusandae, atque similique ipsam fugiat labore maxime odit, accusamus fugit corrupti quo alias? Animi praesentium corporis placeat neque.</p>
        </div>
    )
}
