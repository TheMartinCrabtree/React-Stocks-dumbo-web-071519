import React from 'react';

const SearchBar = (props) => {

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input 
          type="radio" 
          name="alpha"
          value={ props.alphaIsChecked } 
          checked={ props.alphaIsChecked } 
          onChange={(event)=>props.handleAlphaChecked(event )}/>
        Alphabetically
      </label>
      <label>
        <input 
          type="radio" 
          name="price"
          value={ props.priceIsChecked }
          checked={ props.priceIsChecked } 
          onChange={(event)=>props.handleAlphaChecked(event )}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={ props.handleCategorySelect }>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
