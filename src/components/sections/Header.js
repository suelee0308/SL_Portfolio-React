import React from "react";
import "../styles/Header.css";
import boba from '../styles/images/boba.png'
import golf from '../styles/images/golf.png'
import coke from '../styles/images/coke.png'
import prague from '../styles/images/pragueclass.jpeg'
import climbing from '../styles/images/climbing.jpeg'
import greece from '../styles/images/greece.jpeg'

export default function Header () {

    const randomFacts = [
        {
            image: {boba},
            fact: "My go-to boba order: milk tea, half sugar, less ice, with boba."
        },
        {
            image: {golf},
            fact: "The most famous person I've seen in person is Tiger Woods."
        },
        {
            image: {coke},
            fact: "I don't drink Diet Coke, Coke Zero nor any other variation of Coke. I only drink the real thing."
        },
        {
            image: {prague},
            fact: 'I studied abroad in Prague, Czech Republic for a semester. (Photo taken from my classroom)'
        },
        {
            image: {climbing},
            fact: 'I like to climb complicated rocks.'
        },
        {
            image: {greece},
            fact: "My favorite place I've traveled to is Athens, Greece (the art history nerd in me)."
        },
    ]

    return (
        <div className="Header">
            {randomFacts.map((randomFact) =>
               <div className="randomFacts">
               <img src={randomFact.image} alt='random'/>
               <h1>
                   {randomFact.fact}
               </h1>
           </div>
            )}
        </div>
    )
}