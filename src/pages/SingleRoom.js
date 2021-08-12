import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultBcg from '../images/room-5.jpeg';
import Banner from '../components/Banner';
import { RoomContext } from '../context';
import Styles from '../components/styledHero'

export default class SingleRoom extends Component {

    constructor(props){
        super(props);
        this.state= {
            slug : this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;

    render() {

        const {getRoom } = this.context;
        const room = getRoom(this.state.slug);
        
        if (!room){       
            return (
                <div className="error">
                    <h3>no room found</h3>
                    <Link to ='/rooms' className = 'btn-primary'>
                        back to rooms
                    </Link>
                </div>
        )
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images} = room
        const [MainImg,...defaultImg] = images
        return (
            <>
                <Styles img ={MainImg|| this.state.defaultBcg}>
                    <Banner title ={`${name} room`}>
                        <Link to = '/rooms' className ='btn-primary'>
                            back to rooms
                        </Link>
                    </Banner>
                </Styles>
                <section className="single-room">
                    <div className="single-room-images">
                        {
                            defaultImg.map((items,i)=>{
                                return <img key ={i} src = {items} alt ={name}/>
                            })
                        }
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className= "info">
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : {size}m&sup3;</h6>
                            <h6>Max capacity : 
                                {
                                    capacity >1 ? `${capacity} people` : `${capacity} person`
                                }
                            </h6>
                            <h6>
                                {
                                    pets ? 'Pets allowed' : 'No pets allowed'
                                }
                            </h6>
                            <h6>
                                {
                                    breakfast && 'Free breakfast included !'
                                }
                            </h6>
                        </article>

                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {
                            extras.map((items,index)=>{
                                return <ul key = {index}>&bull; {items}</ul>
                            })
                        }
                    </ul>
                </section>
            </>
        )
        
    }
}

