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
            fact: "I don't drink Diet Coke, Coke Zero nor any variation of Coke. I only drink the real thing."
        },
        {
            image: './images/pragueclass.jpeg',
            fact: 'I studied abroad in Prague, Czech Republic for a semester. (photo taken from my classroom)'
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
        <div>
            { loading ?
            <div></div>
                :
            (
            <div className="Header">    
                <div className="randomFacts" key={randomFacts[index].image}>
                    <img className='iconImg' src={randomFacts[index].image} alt='random'/>
                    <section className="factSection">
                        <h2 className='factText'>
                            {randomFacts[index].fact}
                        </h2>
                        <button className='factButton' onClick={() => changeFact()}>
                        <img className='buttonImg' src={next} alt='next'/>
                        </button>
                    </section>
                </div>
            </div>
            )
            }
        </div>
    )
}