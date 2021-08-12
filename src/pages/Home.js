import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms'


export default function Home() {

  

    return (
        <>
        <Hero>
            <Banner 
            title ='luxurious rooms'
            subtitle = 'deluxe apartments starting from $299.99'>

            <Link to ='/rooms' className = 'btn-primary'>
                get started
            </Link>

            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>

        </>
    )
}



