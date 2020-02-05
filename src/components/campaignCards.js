import React from "react";







export default function CampaignCard(props) {
  return (
          <div className='card-div'>
            
        <h2>{props.camp.title}</h2>
            <ul>Campaign Details</ul>
            <li>{props.camp.location}</li>
            <li>{props.camp.description}</li>
            
        </div>

    )
  
  
        
}
