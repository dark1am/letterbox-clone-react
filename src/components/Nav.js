import logoimage from '../logo.png';
import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div class="nav">
            <nav>
                <div className="container">
            
                <div className="fulllogo">
                    <img src={logoimage} alt=""/>
                    
                    <h1>Betterboxd</h1>
                </div>

                <div className="links">
                    <ul>
                    <li><a href="">Sign in</a></li>
                    <li><a href="">Create account</a></li>
                    <li><a href="">Films</a></li>
                    <li><a href="">Lists</a></li>
                    <li><a href="">Members</a></li>
                    </ul>

                    <div className="input-search">
                    <input type="text" placeholder="Search" />
                    <a href=""><i class="fas fa-search"></i></a>
                    </div>
                </div>

                </div>
            </nav>

        </div>
    )
}

export default Nav;
