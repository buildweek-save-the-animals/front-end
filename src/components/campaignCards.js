import React from "react";




// const Carddiv = styled.div `
// background-color:#14737D;
// margin:5%;
// border-radius: 35px

// `
// const H2card = styled.h2 `
// padding:3%;
// `

// const Licard = styled.li `
// padding:3%;

// `



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
