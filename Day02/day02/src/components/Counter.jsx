import { useEffect, useState } from "react"


export function Counter() {
    /** 
     * useEffect
     *  no second args --> inital render , call after update any state found in this component
     *  [] --> Only Once
     * [stateName] --> Inital Render -- didUpdate
     * 
     * 
     */
    let [ count, setCount ] = useState( 0 );
    let [ title, setTitle ] = useState( `Counter App  ${count}` );
    let [ products, setProducts ] = useState( [] );

    useEffect( () => {
        // connect with API 
    }, [] )
    useEffect( () => {

        setTitle( "Welcome" )
        return () => {
            // search
            console.log( "when this is fun will be called" )
        }
    }, [ count ] )

    const increase = () => {
        console.log( "Called" )
        setCount( count + 1 )
    }
    const decrease = () => {
        setCount( count - 1 )
    }

    return (
        <div className="bg-dark text-light p-5 text-center">
            {console.log( "1-Render " )}
            <div className="container">
                <h1 className="text-warning mb-3">{title}</h1>
                <p className="lead ">Count : {count}</p>
                {( count < 0 ) && <p className="alert alert-danger">Count Value Less Than Zero</p>}
                <div>
                    <button onClick={increase} className="btn btn-success mx-3">+</button>
                    <button onClick={decrease} className="btn btn-danger">-</button>
                </div>
                <button onClick={() => setTitle( "New Title" )} className="btn btn-outline-primary mt-4">Change Title</button>
            </div>

        </div>
    )
}






// function useArr( params ) {

//     return [ params, function () { params='ali' }, 40 ]
// }
// let [ x, y ] = useArr( "mona" )
// y()
