import React from "react";
import { Link } from 'react-router-dom';








const OrganizationHome = () => {


    return (

        <div className='org-page'>
        <button><Link to='/addCampaign'>Add Campaign</Link></button>
        <button><Link to='/editCampaign'>Edit Campaign</Link></button>
        </div>
    )
}




export default OrganizationHome