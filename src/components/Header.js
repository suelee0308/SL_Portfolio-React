import React from 'react';
import './styles/Header.css'
import image from './styles/images/Sandwich.png'



export default function Loader() {

    return (
        <div className="Loader">
            <header>
                Sue Lee
            </header>
            <img src={image} className="Header-img"alt="sandwich"></img>
        </div>
    )
}