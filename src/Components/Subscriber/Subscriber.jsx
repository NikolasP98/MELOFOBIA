import React from 'react'
import './Subscriber.scss';

export default function Subscriber() {
    return (
        <div className="subscriber">
            <form>
                <h1>Like the content?</h1>
                <p>
                Never miss an update or post with weekly updates!
                </p>
                <input placeholder="Email address here!"/>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}
