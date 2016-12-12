import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


class ProductRightContent extends Component {

	constructor(props){
		super(props);
		console.log("ProductRightContent init");
	}
	render(){
	    const styles = {
	      root: {
	        display: 'flex',
	        flexWrap: 'wrap',
	        justifyContent: 'space-around',
	      },
	      gridList: {
	        // width: 600,
	        // height: 450,
	        overflowY: 'auto',
	      },
	    };

		return (
              <GridList cellHeight={180} style={styles.gridList}>
                {/*<Subheader>December</Subheader>*/}
                <Subheader>&nbsp;</Subheader>
                {this.props.data.map((prod, index) => (
                <GridTile key={'prod' + index}
                          title={prod.name}
                          subtitle={<span><b>{prod.name_ch}</b></span>}
                          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                <img src={prod.imageDirectory + prod.productRelativeImageUrl[0].imageUrl} alt={prod.name}/>
                </GridTile>
                ))}
              </GridList>
		);
	};
}
export default ProductRightContent;