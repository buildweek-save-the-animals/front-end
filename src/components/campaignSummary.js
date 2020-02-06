import React, { useEffect, useState } from "react";
import CampaignCard from './campaignCards';
import SearchForm from "./searchForm";
import axios from 'axios';





export default function CampaignSummary() {
  // TODO: Add useState to track data from useEffect
  const [campaign, setCampaign] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  
  
  useEffect(() => {
   
    
      axios.get('https://reqres.in/api/users?page=2')
      .then(res => {
        console.log(res)
        setCampaign(res.data.data);
        
      })
      .catch(error => {
        console.error(error,'not displaying!!!')
      })
    
  }, [setCampaign]);
  ////////////////////////useEffect for campaign ^ and use effect for search below

  
  useEffect(() => {
      const results = campaign.filter(element =>
          element.first_name.toLowerCase().includes(searchTerm));
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

