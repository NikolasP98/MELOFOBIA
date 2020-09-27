import React, { useState } from 'react'
import './Error.scss'

export default function Error(props) {
    return (
        <div className={"error"}>
            <div className={"error-main"}>
                <h1 className="error-title">
                    { props.title }
                </h1>
                <p className="error-content">
                    { props.content }
                </p>
            </div>
        </div>
    )
}
