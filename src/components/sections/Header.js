import React, {useState} from "react";
import next from '../styles/images/next.png'
import "../styles/Header.css";


export default function Header ({loading}) {

    const [index, setIndex] = useState(0);

    const randomFacts = [
        {
            image: './images/boba.png',
            fact: "My go-to boba order: milk tea, half sugar, less ice, with boba."
        },
        {
            image: './images/golf.png',
            fact: "The most famous person I've seen in person is Tiger Woods."
        },
        {
            image: './images/coke.png',
            fact: "I don't drink Diet Coke, Coke Zero nor any other variation of Coke. I only drink the real thing."
        },
        {
            image: './images/pragueclass.jpeg',
            fact: 'I studied abroad in Prague, Czech Republic for a semester. (Photo taken from my classroom)'
        },
        {
            image: './images/climbing.jpeg',
            fact: 'I like to climb complicated rocks.'
        },
        {
            image: './images/greece.jpeg',
            fact: "My favorite place I've traveled to is Athens, Greece (the art history nerd in me)."
        },
    ]

    function changeFact() {
        if (index === randomFacts.length - 1) {
            setIndex(0)
        } else {
        let newIndex = index + 1
        setIndex(newIndex);
        }
    };

    // function setBorder() {
    //     if (randomFacts[index].image.files.name.match(/.(jpeg)$/i))
        
    // }

    return (
        <div className="Header">
            { loading ?
            <div></div>
                :
            (
            <div>    
                <div className="randomFacts" key={randomFacts[index].image}>
                    <img className='iconImg' src={randomFacts[index].image} alt='random'/>
                    
                    <h1 className='factText'>
                        {randomFacts[index].fact}
                    </h1>
                    
                    <button className='factButton' onClick={() => changeFact()}>
                    <img className='buttonImg' src={next} alt='next'/>
                    </button>
                </div>
            </div>
            )
            }
        </div>
    )
}