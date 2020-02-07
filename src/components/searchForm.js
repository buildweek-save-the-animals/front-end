import React from "react";
import styled from 'styled-components';

const SectionSearch = styled.section `
text-align:center;
padding-top:2%


`

const Input = styled.input `
width:20%;
padding:.5%;
box-shadow:inset 1px 1px 1px #000000;
`

const Form = styled.form `

`

export default function SearchForm(props) {


  
    
  const handleChange = event => {
      props.setSearchTerm(event.target.value);
      
  };
  
  

  return (
    <SectionSearch className="search-form">
      
      
      <Form>
        
         <Input
          type="text"
          placeholder="Search by Name"
          value={props.searchTerm}
          onChange={handleChange}
        />
        
</Form>
    
    </SectionSearch>
  );
}
