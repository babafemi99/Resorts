import React from 'react';
import RoomsList from './RoomList.js'
import RoomsFilter from './RoomFilter'
import { withRoomConsumer } from '../context';
import Loading from './Loading';

 function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms }= context 
   if (loading){
        return <Loading/>
    }
    return(
    <>                             
         <RoomsFilter rooms ={rooms} />
        <RoomsList rooms= {sortedRooms} />
    </>
    )
}

export default withRoomConsumer(RoomContainer);


// export default function RoomContainer() {
//     return (

//         <RoomConsumer>
//             {
//                 (value)=>{
//                     const { loading, sortedRooms, rooms } = value;
//                     if (loading){
//                         return <Loading/>
//                     }
//                     return(
//                         <div>
//                             Hello from room container
//                             <RoomsList rooms= {sortedRooms} />
//                             <RoomsFilter rooms ={rooms} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>

        
//     )
// }
