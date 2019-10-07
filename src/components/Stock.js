import React from 'react'

const Stock = (props) => (
  <div onClick={ (event)=>props.handleClickOnStock ?  
    props.handleClickOnStock(event, props.stockObj) : 
    props.handleClickPortfolio(event, props.stockObj) }  >

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{ props.stockObj.name }</h5>
        <p className="card-text">{ props.stockObj.price }</p>
      </div>
    </div>


  </div>
);

export default Stock
