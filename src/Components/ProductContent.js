import React, {Component} from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Image, Carousel } from 'react-bootstrap';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';



class ProductContent extends Component {

	constructor(props){
		super(props);
		console.log("ProductContent init");
		this.state = {
			dialogOpen: false
		}
		this.renderModelContent = this.renderModelContent.bind(this);
		this.renderImageCarouselItem = this.renderImageCarouselItem.bind(this);
		// console.log(props);
	}

	handleDialogOpen = () => {
    	this.setState({dialogOpen: true});
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

  	renderImageCarouselItem = (dir, img, index, prodName) => {
  		return (
  			<Carousel.Item>
      			<Image src={dir + img.imageUrl} alt={prodName} responsive />
      		</Carousel.Item>
  		);
  	}

	render(){
		const {prod} = this.props;
		const {model} = this.props.prod.items[0];
		const {imgList} = this.props.prod.productRelativeImageUrl;

		console.log(prod);
		console.log("the imgList=");
		console.log(imgList);
		// console.log("in product content render");
		// console.log(prod);
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
					<Carousel wrap={false} interval={90000000}>
						{this.props.prod.productRelativeImageUrl.map((img, index) => (
							this.renderImageCarouselItem(prod.imageDirectory, img, index, prod.name) 
						))}
  					</Carousel>
					{/*<Image src={prod.imageDirectory + prod.productRelativeImageUrl[0].imageUrl} alt={prod.name} responsive /> */}
    			</CardMedia>
    			<CardTitle title={prod.name} subtitle={prod.name_ch} />
			    <CardText>
			    	
			    	<Table selectable={false}>
			    		<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
			    			
				    		<TableRow>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>適用車款</TableHeaderColumn>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>Suitable Model</TableHeaderColumn>
				    			{/*
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>購買數量<br/>(MPQ.)<br/>組/Set</TableHeaderColumn>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[0].qty}</TableHeaderColumn>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[1].qty}</TableHeaderColumn>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[2].qty}</TableHeaderColumn>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[3].qty}</TableHeaderColumn>
				    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[4].qty}</TableHeaderColumn>
				    			*/}
				    		</TableRow>

			    		</TableHeader>
			    		<TableBody displayRowCheckbox={false}>
			    			<TableRow>
			    				<TableRowColumn style={tdStyle}>
									{model.map((theModel, index) => (
										this.renderModelContent(theModel, "ch")
									))}
			    				</TableRowColumn>
			    				<TableRowColumn style={tdStyle}>
			    					{model.map((theModel, index) => (
										this.renderModelContent(theModel, "en")
									))}
			    				</TableRowColumn>
			    				{/*
			    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>單價<br/>(U/P)</TableRowColumn>
			    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[0].unitPrice}</TableRowColumn>
			    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[1].unitPrice}</TableRowColumn>
			    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[2].unitPrice}</TableRowColumn>
			    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[3].unitPrice}</TableRowColumn>
			    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[4].unitPrice}</TableRowColumn>
			    				*/}
			    			</TableRow>
			    		</TableBody>
			    	</Table>
			    	<br/>
			    	<RaisedButton label="詳細內容 Details" onTouchTap={this.handleDialogOpen} />
			    	
			    </CardText>   
  			</Card>
	        <Dialog
	          title="詳細內容 Details"
	          actions={actions}
	          modal={true}
	          contentStyle={dialogContentStyle} 
	          open={this.state.dialogOpen}
	        >
	        	售價/批發價, 台幣計價, 不含運費: <br/>
			    Retail/Wholesale price, charged in NTD, and shipping fee is not included: <br/>
				<Table selectable={false}>
		    		<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
			    		<TableRow>
			    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>購買數量<br/>(MPQ.)<br/>組/Set</TableHeaderColumn>
			    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[0].qty}</TableHeaderColumn>
			    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[1].qty}</TableHeaderColumn>
			    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[2].qty}</TableHeaderColumn>
			    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[3].qty}</TableHeaderColumn>
			    			<TableHeaderColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[4].qty}</TableHeaderColumn>
			    		</TableRow>
		    		</TableHeader>
		    		<TableBody displayRowCheckbox={false} >
		    			<TableRow>
		    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>單價<br/>(U/P)</TableRowColumn>
		    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[0].unitPrice}</TableRowColumn>
		    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[1].unitPrice}</TableRowColumn>
		    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[2].unitPrice}</TableRowColumn>
		    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[3].unitPrice}</TableRowColumn>
		    				<TableRowColumn style={{paddingLeft:'6px', paddingRight:'6px'}}>{prod.price[4].unitPrice}</TableRowColumn>
		    			</TableRow>
		    		</TableBody>
		    	</Table>

	        </Dialog>



  			</div>
		);
	};
}

export default ProductContent;