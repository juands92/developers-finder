import React from 'react'
import loading from './img/loading.gif';

export default () => {
    return (
        <div>
            <img
                style={{ width: "200px", margin: "auto", display: "block" }}
                src={loading} alt="Loading" />
        </div>
    )
}
