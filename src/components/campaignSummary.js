import React, { useEffect, useState } from "react";
import CampaignCard from './campaignCards';
import axios from 'axios';

import SearchForm from "./searchForm";





export default function CampaignSummary() {
  // TODO: Add useState to track data from useEffect
  const [campaign, setCampaign] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
   
    
      axios.get('https://bw-save-the-animals.herokuapp.com/campaigns/')
      .then(res => {
        console.log(res)
        setCampaign(res);
        
      })
      .catch(error => {
        console.error(error,'not displaying!!!')
      })
    
  }, [setCampaign]);
  ////////////////////////useEffect for campaign ^ and use effect for search below

  
  useEffect(() => {
      const results = campaign.filter(element =>
          element.title.toLowerCase().includes(searchTerm));
          setSearchResults(results);
  }, [searchTerm]);



  return (
    <section className="campaign-list">

    
      <SearchForm setSearchTerm={setSearchTerm} serchTerm={searchTerm} />
      

      {searchTerm?searchResults.map(e => (
        <CampaignCard key={e.id} camp={e} />
         )):campaign.map(e => (
           <CampaignCard key={e.id} camp={e} />
         ))}

      

    </section>
  );
}

