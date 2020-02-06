import React from "react";







export default function CampaignCard(props) {
  return (
          <div className='card-div'>
            
        <h2>{props.camp.email}</h2>
            <ul>Campaign Details</ul>
            <li>{props.camp.first_name}</li>
            <li>{props.camp.last_name}</li>
            
        </div>

    )
  
  
        
}
