import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  
	render() {
		
		const populateStocks=()=>{
			return this.props.allstocks.map((stockObj)=>{
				return (<Stock 
					key={stockObj.ticker} 
					stockObj={ stockObj}
					handleClickOnStock={ this.props.handleClickOnStock }  />)
			})
		}

		return (
			<div>
				<h2>Stocks</h2>
				{ populateStocks() }
			</div>
		);
  }

}

export default StockContainer;
