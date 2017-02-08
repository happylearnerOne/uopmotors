import React, {Component} from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Image, Carousel } from 'react-bootstrap';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';

// import { browserHistory, push } from 'react-router';



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
		// console.log(props);
	}

	handleDialogOpen = () => {
    	this.setState({dialogOpen: true});
    	// browserHistory.push("/contactus");

  	};
  	handleDialogClose = () => {
    	this.setState({dialogOpen: false});
  	};

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

  	renderTableRowContent = (priceObj) => {
  		let thePrice = priceObj.wholesale_price;
  		return (
			<TableRow>
				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{priceObj.item} 單價</TableRowColumn>
				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{thePrice[0].unitPrice}</TableRowColumn>
				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{thePrice[1].unitPrice}</TableRowColumn>
				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{thePrice[2].unitPrice}</TableRowColumn>
				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{thePrice[3].unitPrice}</TableRowColumn>
			</TableRow>  			
  		);
  	}

	render(){
		const {prod} = this.props;
		// const {description} = this.props.prod.description;
		// const {model} = this.props.prod.items[0];

		// console.log("in product content render");
		// console.log(description);
		let vHeight = window.screen.height;
		let vWidth = window.screen.width;

		// console.log(vHeight);
		const cardStyle = {
			paddingTop: (vHeight/30),
			paddingRight: (vWidth/30),
			paddingLeft: (vWidth/30),
			height: '750px'
		}

		const dialogContentStyle = {
			width: '90%',
			maxWidth: 'none',
		};

		const tdStyle = {
			whiteSpace: "normal",
			verticalAlign: "text-top",
			paddingLeft: '6px',
			paddingRight:'6px'
		}

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
			    	<Table selectable={false}>
			    		<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
				    		<TableRow>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>適用車款</TableHeaderColumn>
				    		</TableRow>
			    		</TableHeader>
			    		<TableBody displayRowCheckbox={false}>
			    			<TableRow>
			    				<TableRowColumn style={tdStyle}>
			    					{prod.suitable_model}
			    					{/* 
									{model.map((theModel, index) => (
										this.renderModelContent(theModel, "ch")
									))}
									*/}
			    				</TableRowColumn>
			    				{/*
			    				<TableRowColumn style={tdStyle}>
			    					{model.map((theModel, index) => (
										this.renderModelContent(theModel, "en")
									))}
			    				</TableRowColumn>
			    				*/}
			    			</TableRow>
			    		</TableBody>
			    	</Table>
			    	<Table selectable={false}>
			    		<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
				    		<TableRow>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>說明</TableHeaderColumn>
				    		</TableRow>
			    		</TableHeader>
			    		<TableBody displayRowCheckbox={false}>
			    			<TableRow>
			    				<TableRowColumn style={tdStyle}>
									{prod.description.map((theDesc, index) => (
										this.renderDescriptionContent(theDesc)
									))}
			    				</TableRowColumn>
			    			</TableRow>
			    		</TableBody>
			    	</Table>
			 
			    	<br/>
			    	<RaisedButton label="詳細內容 Details" onTouchTap={this.handleDialogOpen} />
			    	
			    </CardText>   
  			</Card>
	        <Dialog
	          title="批發價"
	          actions={actions}
	          modal={true}
	          contentStyle={dialogContentStyle} 
	          open={this.state.dialogOpen}
	        >
	        	台幣計價, 不含運費: <br/>
				<Table selectable={false} style={{width:'50%'}}>
		    		<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
			    		<TableRow>
			    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>購買組數</TableHeaderColumn>
			    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>10</TableHeaderColumn>
			    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>50</TableHeaderColumn>
			    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>100</TableHeaderColumn>
			    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>500</TableHeaderColumn>
			    		</TableRow>
		    		</TableHeader>
		    		<TableBody displayRowCheckbox={false} >
		    			{prod.price.map((priceObj, index)=>(
		    				this.renderTableRowContent(priceObj)
		    			))}
		    			{/*
		    			<TableRow>
		    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>單價</TableRowColumn>
		    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[0].unitPrice}</TableRowColumn>
		    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[1].unitPrice}</TableRowColumn>
		    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[2].unitPrice}</TableRowColumn>
		    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[3].unitPrice}</TableRowColumn>
		    			</TableRow>
		    		*/}
		    		</TableBody>
		    	</Table>

	        </Dialog>



  			</div>
		);
	};
}

export default ProductContent;