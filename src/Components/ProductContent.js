import React, {Component} from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Image, Carousel, Table } from 'react-bootstrap';
// import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';

// import { browserHistory, push } from 'react-router';
		const vHeight = window.screen.height;
		const vWidth = window.screen.width;
		/*
		const tableColumnStyle = {
			paddingLeft: (vWidth >= 768 ? '15px' : '0px'),
			paddingRight: (vWidth >= 768 ? '15px' : '0px')
		}
		*/


class ProductContent extends Component {

	constructor(props){
		super(props);
		console.log("ProductContent init");
		this.state = {
			dialogOpen: false
		}
		this.renderModelContent = this.renderModelContent.bind(this);
		this.renderImageCarouselItem = this.renderImageCarouselItem.bind(this);
		this.renderDescriptionContent = this.renderDescriptionContent.bind(this);
		this.renderTableRowContent = this.renderTableRowContent.bind(this);
		this.renderPriceDescContent = this.renderPriceDescContent.bind(this);
		this.renderModelContentDetail = this.renderModelContentDetail.bind(this);
		this.renderSalePriceContent = this.renderSalePriceContent.bind(this);
		this.renderSalePriceContentDetail = this.renderSalePriceContentDetail.bind(this);
		// console.log(props);
	}

	handleDialogOpen = () => {
    	this.setState({dialogOpen: true});
    	// browserHistory.push("/contactus");

  	};
  	handleDialogClose = () => {
    	this.setState({dialogOpen: false});
  	};

  	/*
  	renderModelContent = (theModel, lang) => {
  		if(lang === "en"){
  			return (
  				<div>{theModel.m}<br/></div>
  			);
  		} else {
  			return (
  				<div>{theModel.m_ch}<br/></div>
  			);
  		}
  	}
  	*/

  	
	renderModelContentDetail = (tModel) => {
		switch(tModel.display_type){
			case "ALL" : 
				return (
					<div>{tModel.model}</div>
				);
				break;
			case "BY_TYPE" : 
				return (
					<Table striped={true} bordered={false} condensed hover={false} style={{marginBottom: '2px'}}>
  					<tbody>
  						<tr><td colspan={2}><b>{tModel.motor_system}</b></td></tr>
  						<tr><td colspan={2}>&nbsp;&nbsp;{tModel.model}</td></tr>
  					</tbody>
					</Table>
				);
			case "BY_TYPE_VENDOR" : 
				return (
					<Table striped={true} bordered={false} condensed hover={false} style={{marginBottom: '2px'}}>
						<tbody>
						<tr><td colspan={2}><b>{tModel.motor_system}</b></td></tr>
						{tModel.model.map((dModel)=>(
							<tr><td colspan={2}>&nbsp;&nbsp;<b>{dModel.vendor}</b>: {dModel.model}</td></tr>
						))}
						</tbody>
					</Table>
				);
			default : 
				return (
					<div>aa</div>
				);
		} 	
	}
  	renderModelContent = (theModel, displayModelInDetail, isDetailPage) => {
  		console.log("the isDetailPage=" + isDetailPage);
  		console.log("the displayModelInDetail=" + displayModelInDetail);
  		if(isDetailPage===false && displayModelInDetail === "true"){
  			return (
  				<div>請參閱詳細資訊</div>
  			);
  		} else if(isDetailPage===true && displayModelInDetail === "true"){
  			console.log("i am in detail page");
  			
  			return (
  				<Table>
  					<thead>
  						<tr><td colspan={2}><b>適用車款</b></td></tr>
  					</thead>
  					<tbody>
  						<tr>
  							<td colspan={2}>
  								{theModel.map((dModel, index)=>(
  									this.renderModelContentDetail(dModel)
  								))}
  							</td>
  						</tr>
  					</tbody>
  				</Table>
  			);
  			
  		} else {
  			console.log("i am in else");
  			return (
				this.renderModelContentDetail(theModel)
			);
  		}

  	}
  	renderDescriptionContent = (theDesc) => {
  		console.log(theDesc);
  		return (
  			<div>{theDesc.desc_content}<br/></div> 
  		);
  	}

  	renderImageCarouselItem = (dir, img, index, prodName) => {
  		return (
  			<Carousel.Item>
      			<Image src={dir + img.imageUrl} alt={img.imageHint} responsive />
      			<Carousel.Caption>
        			<p>{img.imageHint}</p>
      			</Carousel.Caption>
      		</Carousel.Item>
  		);
  	}

  	renderPriceDescContent = (theDesc) => {
  		console.log("in renderPriceDescContent");
  		console.log(theDesc);
  		if(theDesc !== undefined){
  			return ( 
  				<font size="-2"><br/>{theDesc}</font>
  			);
  		}
  	}

  	renderSalePriceContent = (priceObj) => {
  		console.log("in renderSalePriceContent");
  		console.log(priceObj.length);
  		if(priceObj.length >= 0){
  			switch(priceObj.length){
  				case 1 :
  					return ( 
  						this.renderSalePriceContentDetail(priceObj[0]) 
  					);
  					break;
  				default :
  					return (
  						<tr>	
	  						<Table striped={false} bordered={false} condensed hover={false} style={{marginBottom: '2px'}}>
		  						<tbody>
			  						{priceObj.map((dPrice, index)=>(
			  							this.renderSalePriceContentDetail(dPrice)
			  						))}
		  						</tbody>
	  						</Table>
  						</tr>
  					);
  					
  					break;
  			}
  		}
  	}

  	renderSalePriceContentDetail = (thePrice) => {
  		if(thePrice.item === undefined){
  			return (
  				<tr><td colspan="2">{thePrice.currencyTW} {thePrice.priceTW} 元</td></tr>
  			);
  		} else {
  			return (
  				<tr><td width="70%">{thePrice.item}</td><td>{thePrice.currencyTW} {thePrice.priceTW} 元</td></tr>
  			);
  		}
  	}

  	renderTableRowContent = (priceObj) => {
  		//{{paddingLeft:'6px', paddingRight:'6px'}}
  		let thePrice = priceObj.wholesale_price;
  		if(this.props.srcType === "Tab"){
  			return (
	  			<tr>
	  				<td>{priceObj.item} <br/>單價</td>
	  				<td>{thePrice[0].unitPrice}{thePrice[0].desc !== undefined ? thePrice[0].desc : ""}</td>
	  				<td>{thePrice[1].unitPrice}{thePrice[1].desc !== undefined ? thePrice[1].desc : ""}</td>
	  				<td>{thePrice[2].unitPrice}{thePrice[2].desc !== undefined ? thePrice[2].desc : ""}</td>
	  				<td>{thePrice[3].unitPrice}{thePrice[3].desc !== undefined ? thePrice[3].desc : ""}</td>
	  			</tr>
  			);
  		} else {
  			return (
	  			<tr>
	  				<td>{priceObj.item} <br/>單價</td>
	  				<td>{thePrice[0].unitPrice}{this.renderPriceDescContent(thePrice[0].desc)}</td>
	  				<td>{thePrice[1].unitPrice}{this.renderPriceDescContent(thePrice[1].desc)}</td>
	  				<td>{thePrice[2].unitPrice}{this.renderPriceDescContent(thePrice[2].desc)}</td>
	  				<td>{thePrice[3].unitPrice}{this.renderPriceDescContent(thePrice[3].desc)}</td>
	  			</tr>
  			);  			
  		}
  		
  		/*
  		return (
			<TableRow>
				<TableRowColumn style={tableColumnStyle}>{priceObj.item} 單價</TableRowColumn>
				<TableRowColumn style={tableColumnStyle}>{thePrice[0].unitPrice}</TableRowColumn>
				<TableRowColumn style={tableColumnStyle}>{thePrice[1].unitPrice}</TableRowColumn>
				<TableRowColumn style={tableColumnStyle}>{thePrice[2].unitPrice}</TableRowColumn>
				<TableRowColumn style={tableColumnStyle}>{thePrice[3].unitPrice}</TableRowColumn>
			</TableRow>  			
  		);
  		*/

  	}

	render(){
		const {prod} = this.props;
		// const {description} = this.props.prod.description;
		// const {model} = this.props.prod.items[0];

		// console.log("in product content render");
		// console.log(description);


		// console.log(vHeight);
		const cardStyle = {
			paddingTop: (vHeight/30),
			paddingRight: (vWidth/30),
			paddingLeft: (vWidth/30),
			height: '800px'
		}

		const dialogContentStyle = {
			width: '90%',
			maxWidth: 'none',
		};
		/*
		const tdStyle = {
			whiteSpace: "normal",
			verticalAlign: "text-top",
			paddingLeft: '6px',
			paddingRight:'6px'
		}

		const tableWidth = {
			width: (vWidth >= 768 ? '80%' : '100%')
		}
		*/


//style={{paddingLeft:'6px', paddingRight:'6px'}}
		const actions = [
      		<FlatButton label="關閉 Close" primary={true} onTouchTap={this.handleDialogClose} />,
    	];

		return (
			<div>
				<Card style={cardStyle}>
					<CardMedia>
						<Carousel wrap={true} interval={0} bsClass="carousel">
							{this.props.prod.productRelativeImageUrl.map((img, index) => (
								this.renderImageCarouselItem(prod.imageDirectory, img, index, prod.name) 
							))}
	  					</Carousel>
						{/*<Image src={prod.imageDirectory + prod.productRelativeImageUrl[0].imageUrl} alt={prod.name} responsive /> */}
	    			</CardMedia>
	    			<CardTitle title={prod.name_ch} />
				    <CardText>
				    	<Table striped bordered={false} condensed hover>
				    		<tbody>
				    			<tr><td colspan="2"><b>售價</b></td></tr>
				    		
				    			{/*<tr><td>NTD$ {prod.sale_price} 元</td></tr>*/}
				    			{this.renderSalePriceContent(prod.sale_price)}
				    		
				    			<tr><td colspan="2"><b>適用車款</b></td></tr>
				    			<tr>
				    				<td colspan="2">
										{
											prod.displayModelInDetail === "true" ? "請參閱詳細內容" : 
											prod.suitable_model.map((theModel, index)=>(
				    							this.renderModelContent(theModel, prod.displayModelInDetail, false)
				    						))
										}				    				
				    					
				    					{/* prod.suitable_model */}
				    					{/* 
										{model.map((theModel, index) => (
											this.renderModelContent(theModel, "ch")
										))}
										*/}
				    				</td>
				    			</tr>
				    			<tr><td colspan="2"><b>說明</b></td></tr>
				    			<tr>
				    				<td colspan="2">
				    					{prod.description.map((theDesc, index) => (
											this.renderDescriptionContent(theDesc)
										))}
				    				</td>
				    			</tr>
				    		</tbody>
						</Table>			 
				    	
				    	<RaisedButton label="詳細內容 Details" onTouchTap={this.handleDialogOpen} />
				    	
				    </CardText>   
	  			</Card>
		        <Dialog
		          title="詳細內容"
		          actions={actions}
		          modal={true}
		          contentStyle={dialogContentStyle} 
		          open={this.state.dialogOpen}
		          autoScrollBodyContent={true}
		        >
		        	{
		        		prod.displayModelInDetail === "true" ? 
		        			this.renderModelContent(prod.suitable_model, prod.displayModelInDetail, true) : ""
		        	}
		        	<b>批發價-台幣計價, 不含運費:</b><br/>
		        	<Table striped bordered condensed hover={false}>
		        		<thead>
		        			<tr>
		        				<td>購買<br/>組數</td>
		        				<td>10</td>
		        				<td>50</td>
		        				<td>100</td>
		        				<td>500</td>
		        			</tr>
		        		</thead>
		        		<tbody>
		        			{prod.price.map((priceObj, index)=>(
			    				this.renderTableRowContent(priceObj)
			    			))}
		        		</tbody>
		        	</Table>
		        </Dialog>
  			</div>
		);
	};
}

export default ProductContent;