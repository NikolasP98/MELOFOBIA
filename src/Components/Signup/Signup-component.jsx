/*jshint esversion:9*/

import React from 'react';
import './Signup-style.scss';

function Signup() {

    return (
        <div className="signup">
            <div className="signup-main">
                <form>
                    <h1>register</h1>
                    <div className="form-main">
                        <div className="input-div">
                            <label htmlFor="username">username:</label>
                            <input type="text" placeholder="username" id="username" name="username" required={true}/>
                            <div></div>
                        </div>
                        <div className="input-div">
                            <label htmlFor="email">email:</label>
                            <input type="email" placeholder="email" id="email" name="email" required={true}/>
                            <div></div>
                        </div>
                        <div className="input-div">
                            <label htmlFor="password">password:</label>
                            <input type="password" placeholder="password" name="password" required={true}/>
                            <div></div>
                        </div>
                        <div className="input-div">
                            <label htmlFor="confirm">confirm:</label>
                            <input type="password" placeholder="confirm" required={true}/>
                            <div></div>
                        </div>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>

    );
}

export default Signup;
