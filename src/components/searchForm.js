import React from "react";



export default function SearchForm(props) {


  
    
  const handleChange = event => {
      props.setSearchTerm(event.target.value);
      
  };
  
  

  return (
    <section className="search-form">
      
      
      <form>
        
         <input
          type="text"
          placeholder="Search by Name"
          value={props.searchTerm}
          onChange={handleChange}
        />
        
</form>
    
    </section>
  );
}
