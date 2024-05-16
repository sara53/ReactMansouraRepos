
export const CheckProps = ( props ) => {

    let { sayHello, newTitle, children } = props

    return (
        <div className="bg-light p-5 mb-3">
            <h1 className="bg-secondary mb-3 rounded p-3">{newTitle}</h1>
            {children}
            <button onClick={() => sayHello()} className="btn btn-success">Click</button>
        </div>
    )
}


