import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';


function Header() {

    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {

        if (currentPage === 'About') return <About />;

        if (currentPage === 'Portfolio') return <Portfolio />;

        return <Contact />;
    }


    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <header className='container-fluid d-flex flex-column bg-primary text-white'>
            <div className="row d-flex flex-row">
                <h1 className='col'>Portfolio</h1>
                <nav className='col navbar d-flex flex-wrap text-right'>
                    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                </nav>
            </div>
            <div>
                {renderPage()}
            </div>
        </header>
    );
}

export default Header;