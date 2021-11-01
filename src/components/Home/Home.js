import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import More from '../More/More';
import About from '../About/About';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <More></More>
            <Footer></Footer>
        </div>
    );
};

export default Home;