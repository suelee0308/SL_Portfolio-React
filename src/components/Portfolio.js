import React from 'react'
import './styles/Portfolio.css'
// import About from './sections/About'
// import Contact from './sections/Contact'
// import Projects from './sections/Projects'
// import Resume from './sections/Resume'
// import Header from './sections/Header'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'


export default function Portfolio() {
    // const [currentPage, setCurrentPage] = useState('About');

    // const pageRender = () => {
    //     switch(currentPage) {
    //         case 'About': {
    //             return(<About />);
    //         }
    //         case 'Projects': {
    //             return(<Projects />);
    //         }
    //         case 'Contact': {
    //             return(<Contact />);
    //         }
    //         case 'Resume': {
    //             return(<Resume />);
    //         }
    //         default: {
    //             console.log("Page Not Rendering");
    //             break;
    //         }
    //     }
    // }

    // const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="Portfolio">
            {/* <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
            <Header />
            {pageRender()} */}
            <Navbar />
            <Footer />
        </div>
    )
}