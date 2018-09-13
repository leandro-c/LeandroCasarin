import React, { Component } from 'react'
import { gethotels} from "./../actions/hotels";
import Header from './../components/header'
import HotelCard from './../components/hotelCard'
import { connect } from "react-redux";
import hotels from './../data/data'
class HomeListHoteles extends Component {

    /* componentDidMount() {
        this.props.dispatch(gethotels());
    } */
    

  render() {
    return (
      <div>
          <Header/>
          {
            hotels.map(hotel => (
                 <div>
                     <HotelCard hotel={hotel}/>
                 </div>
            ))
        }
      </div>
    )
  }
}
export default HomeListHoteles 
/* 
 */