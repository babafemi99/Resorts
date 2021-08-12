import React from 'react';
import { Link } from 'react-router-dom';
import defaultimg from '../images/room-11.jpeg'
import PropTypes from 'prop-types';

export default function Room(props) {
    const { room:{name,slug,price,images} } = props;
    return (
        <article className ='room'>
            <div className="img-container">
                <img src={ images[0] || defaultimg } alt="Image 1"/>
                <div className="price-top">
                <h6>{`$${price}`}</h6>
                <p>A Night</p>
                </div>
                <Link to = {`/rooms/${slug}`} className = 'btn-primary room-link'>
                    BOOK NOW
                </Link>
            </div>
            <p className="room-info">
                {name}
            </p>
        </article>
    )
}
 
Room.propTypes ={
    props:PropTypes.shape({
        room:{
            name : PropTypes.string.isRequired,
            slug : PropTypes.string.isRequired,
            image : PropTypes.arrayOf(PropTypes.string).isRequired,
            name : PropTypes.string.isRequired
        }
    })
}