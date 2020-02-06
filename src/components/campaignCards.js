import React from "react";







export default function CampaignCard(props) {
  return (
          <div className='card-div'>
            
        <h2>{props.camp.email}</h2>
            <ul>Campaign Details</ul>
            <h3>{props.camp.first_name}</h3>
            <h3>{props.camp.last_name}</h3>
            
        </div>

    )
  
  
        
}

// the keys would actually be :
    // title: 
    // location: 
    // description:
       
    // urgency: 
    // funding_goal: 
    // created_at: 
    // created_by: