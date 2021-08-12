import React from 'react';
import Rooms from '../pages/Rooms';
import Room from './Room'

export default function RoomsList({rooms}) {
    if (rooms.length ===0){
        return <div className="empty-search">
            <h2>no roms found search again</h2>
        </div>
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map((items,i)=>(
                        <Room key = {i} room ={items}/>
                    ))
                }
            </div>
        </section>
    )
}
