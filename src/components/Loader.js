import React from 'react';
import logo from './styles/images/Sandwich.png'
import './styles/Loader.css'
// import Portfolio from './Portfolio'

export default function Loader({loading}) {
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 5000)
    // }, [])

    return (
        <div className="Loader">
            {loading ? 
            (
                <div className="loadContent">
                    <div className="loader-div">
                        <img src={logo} className="Loader-img" alt="sandwich"/>
                        <h1 className="Loader-h1">
                        I appreciate a good sandwich.
                        </h1>
                    </div>
                </div>
                )
            :
                <div className="hidden"></div> 
            } 
        </div>
    )
}