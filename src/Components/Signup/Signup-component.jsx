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
                            <label for="username">username:</label>
                            <input type="text" placeholder="username" id="username" name="username" />
                        </div>
                        <div className="input-div">
                            <label for="email">email:</label>
                            <input type="email" placeholder="email" id="email" name="email" />
                        </div>
                        <div className="input-div">
                            <label for="password">password:</label>
                            <input type="password" placeholder="password" name="password" />
                        </div>
                        <div className="input-div">
                            <label for="confirm">confirm:</label>
                            <input type="password" placeholder="confirm" />
                        </div>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>

    );
}

export default Signup;
