import React, {Component} from 'react';
const API_KEY='AIzaSyCNiIN9uvInNmX0zhF6_091FreYktju-as';
class GoogleMap extends Component{
  componentDidMount(){
    new google.maps.Map(this.refs.map,{
      zoom:12,
      center:{
        lat:this.props.lat,
        lng: this.props.lon
      },
      key:API_KEY

    })
  }
  render(){
    return (
      <div ref='map'/>

    )

  }


}
export default GoogleMap
