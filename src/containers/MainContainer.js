import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
	state={
		allstocks: [],
		portStocks: [],
		filterByAlpha: false,
		filterByPrice: false,
		currentCategory: "all"
	}

	componentDidMount(){
		fetch("http://localhost:3000/stocks")
			.then(response=>response.json())
			.then(allstocksdata=>{
				console.log("current category filter", this.state.currentCategory === null)
				return this.setState({
					allstocks: allstocksdata
				})
			})
	}

	handleClickOnStock=(event, stockObj)=>{
		event.preventDefault();
		if(!this.state.portStocks.includes(stockObj)){
			return this.setState({
				portStocks: [...this.state.portStocks, stockObj]
			})
		}
	}

	handleClickPortfolio=(event, stockObj)=>{
		event.preventDefault();
		console.log("hit click port")
		let updatedPort = this.state.portStocks.filter((stock)=>{
			return stock !== stockObj
		})
		return this.setState({
			portStocks:  updatedPort
		})
	}

	applySortByAlpha=()=>{
		const sortedStocks= this.state.allstocks.sort((a, b)=>{
			return a.name.localeCompare(b.name)
		})
		
		return this.setState({
			allstocks: sortedStocks
		}, console.log("applied sorted by alpha"))
	}

	applySortByPrice=()=>{
		
		const sortedStocks=this.state.allstocks.sort((a,b)=>{
			return a.price-b.price
		})
		return this.setState({
			allstocks: sortedStocks
		}, console.log("applied sorted by price"))

	}

	handleAlphaChecked=(event)=>{
		console.log("hit radio checked", event.target)
		return this.state.filterByAlpha==="checked" && event.target.name!=="alpha"  ? 
			this.setState({ filterByAlpha: false, filterByPrice: "checked"},this.applySortByPrice) 
			:
			this.setState({ filterByAlpha: "checked", filterByPrice: false }, this.applySortByAlpha)
	}

	handleCategorySelect=(event)=>{
		console.log("hit category select", event.target.value)
		 this.setState({
			currentCategory: event.target.value
		})
	}
	
	render() {
		const handleFilterByCategory=()=>{

			if(this.state.currentCategory === "all") {
				return this.state.allstocks
			} else {
				return this.state.allstocks.filter((stockObj)=>{
					return stockObj.type === this.state.currentCategory
				})
			}

		}
	return (
		<div>
			<SearchBar 
				key="searchbar" 
				alphaIsChecked={this.state.filterByAlpha}
				priceIsChecked={this.state.filterByPrice}
				handleAlphaChecked={ this.handleAlphaChecked }
				handleCategorySelect={ this.handleCategorySelect } />

			<div className="row">
			<div className="col-8">

				<StockContainer 
					key="stockscontainer" 
					allstocks={handleFilterByCategory()  }
					handleClickOnStock={ this.handleClickOnStock }  />
			</div>
			<div className="col-4">
				<PortfolioContainer 
					key="portfoliocontainer" 
					portStocks={ this.state.portStocks }
					handleClickPortfolio={ this.handleClickPortfolio } />
			</div>
			</div>
		</div>
	);
	}

}

export default MainContainer;
