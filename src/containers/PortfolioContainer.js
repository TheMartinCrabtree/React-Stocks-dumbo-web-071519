import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    
    const displayPortfolio=()=>{
        return this.props.portStocks.map((stockObj)=>{
          return <Stock 
            key={ stockObj.name } 
            stockObj={ stockObj }
            handleClickPortfolio={ this.props.handleClickPortfolio } />
        })
        
    }

    return (
      <div>
        <h2>My Portfolio</h2>
          { displayPortfolio()  }
      </div>
    );
  }

}

export default PortfolioContainer;
