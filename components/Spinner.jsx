import React from 'react'

function Spinner() {
    return (
        <>
            <div className="text-center text-danger d-flex align-items-center justify-content-center" style={{zIndex:900000}}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner
