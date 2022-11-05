import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from './Card'
import CardData from './CardData'
// import './CardMentors.css'
const CardMentors = ({mentorData}) => {
    return (
        <>
        <div className="col-md-4 col-12 mx-auto" >
      <div className="card" >
        {/* <img src={} className="card-img-top" alt={} /> */}
        <div style={{display:'flex',justifyContent:'center', paddingTop:'5px'}}>
            <img style={{borderRadius:'50%',height:'100px',width:'100px'}} src={mentorData.picture.large}/>
          </div>
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{`${mentorData.name.title} ${mentorData.name.first} ${mentorData.name.last} (${mentorData.dob.age})`}</h5>
          <p className="card-text">
            {`Street: ${mentorData.location.street.number}, ${mentorData.location.street.name}`}<br/>
            {`City: ${mentorData.location.city}, ${mentorData.location.postcode}`}<br/>
            {`State, Country: ${mentorData.location.state}, ${mentorData.location.country}`}
          </p>
          <p className="card-text" style={{fontSize:"10px",fontStyle:'italic'}}>
            {`Cell: ${mentorData.cell}`}<br/>
            {`Phone: ${mentorData.phone}`}<br/>
            {`Email: ${mentorData.email}`}

          </p>

          <NavLink to="" className="btn btn-primary">
            Message
          </NavLink>
        </div>
      </div>
    </div></>
    )
}

export default CardMentors