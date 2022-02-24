import React from 'react'
//import { trollface } from '../image/troll-face.png'
import meme from '../images/troll-face.png';

export const Navbar = () => {
    return (
        <nav className="navbar text-center">

            <h3> <img src={meme} alt='troll' />Meme Generator</h3>

            <h4>React Course - Project 3</h4>

        </nav>
    )
}
