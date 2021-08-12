import React, { Component } from 'react'
import Title from './Title';
import { IoIosBeer, IoIosBicycle, IoIosWifi,IoMdFitness } from "react-icons/io";

export default class Services extends Component {
      state ={
        services :[
            {
                icon:<IoIosBicycle/>,
                title: 'Hiking',
                info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ipsa?'
            },
            
            {
                icon:<IoIosBeer/>,
                title: 'Bar',
                info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ipsa?'
            },
            {
                icon:<IoIosWifi/>,
                title: 'Unlimited WiFi',
                info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ipsa?'
            },
            {
                icon:<IoMdFitness/>,
                title: 'Gym',
                info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ipsa?'
            },

        ]
    }
    render() {
        return (
            <secction className="services">

            <Title title ='Services'/>
            <div className="services-center">
                {
                    this.state.services.map((item,index)=>{
                        return <article key ={index} className='service' >
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })
                }
            </div>
            </secction>
        )
    }
}
