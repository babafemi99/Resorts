import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'

export default function Error() {
    return (
       <Hero>
           <Banner
           title = "error 404"
           subtitle = "page not found sorry">
               <Link to ='/' className = "btn-primary">
                   home
               </Link>
           </Banner>
       </Hero>
    )
}
