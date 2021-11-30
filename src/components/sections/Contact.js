import React from "react";
import "../styles/Contact.css";

export default function Contact() {
    
    return(
        <div className="Contact">
            <h1>Contact</h1>
            <form>
                <input type='text'>Name</input>
                <input type='email'>Email</input>
                <textarea>Comments/Questions</textarea>
            </form>
        </div>
    );
}