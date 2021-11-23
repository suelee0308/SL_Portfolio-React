import React, { useState, useEffect } from 'react';
import logo from './styles/images/Sandwich.png'
import './styles/Loader.css'
import Header from './Header'

export default function Loader() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    return (
        <div className="Loader">
            {loading ? (
                <div className="Loader-div">
                    <img src={logo} className="Loader-img" alt="sandwich"/>
                    <header className="Loader-header">
                    I appreciate a good sandwich.
                    </header>
                </div>
                )
            :
                <Header />
            }   
        </div>
    )
}