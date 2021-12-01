import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import Navbar from './components/sections/Navbar';
import About from './components/sections/About';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import Projects from './components/sections/Projects';
import './App.css'

export default function App() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState('About');

  const pageRender = () => {
    switch(currentPage) {
        case 'About': {
            return(<About loading = {loading}/>);
        }
        case 'Projects': {
            return(<Projects loading = {loading}/>);
        }
        case 'Contact': {
            return(<Contact loading = {loading}/>);
        }
        case 'Resume': {
            return(<Resume loading = {loading}/>);
        }
        default: {
            console.log("Page Not Rendering");
            break;
        }
    }
  } 

    const handlePageChange = (page) => setCurrentPage(page);


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

  return (
    <div className="App">
      <Loader loading = {loading} />
      <Navbar loading = {loading} currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header loading = {loading} />
      {pageRender()}
      <Footer loading ={loading} />
    </div>
  );
}