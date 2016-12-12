import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// import Productlg from './Productlg.js';
// import Productsm from './Productsm.js';
// import myProd from '../myProd.js';
import { Grid, Row, Col } from 'react-bootstrap';
import {List, ListItem, makeSelectable} from 'material-ui/List';
// import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
// import ContentInbox from 'material-ui/svg-icons/content/inbox';
// import ContentDrafts from 'material-ui/svg-icons/content/drafts';
// import ContentSend from 'material-ui/svg-icons/content/send';
import NavigationArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
// import ToggleStar from 'material-ui/svg-icons/toggle/star';
// import Subheader from 'material-ui/Subheader';
// import Toggle from 'material-ui/Toggle';
import myProduct from '../data/productTest';

// import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import ProductLeftList from './ProductLeftList';
import ProductRightContent from './ProductRightContent';

// const myProd = 
// [
//   {
//     "id": 1,
//     "name": "ZUMA 125 BWS 125 Headlight Cover American Vision",
//     "name_ch" : "BWS 125 美規小盾牌",
//     "nameImageUrl": "styles/image/product/plastic-cover/zuma-125-upper-cover/product.jpg",
//     "bestSellerUS" : "N",
//     "bestSellerTW" : "N", 
//     "orderSeq" : "1",
//     "productImageUrl": "1.jpg",   
//     "catalog" : "Plastic-Cover/Covers",
//     "imageDirectory" : "styles/image/product/plastic-cover/zuma-125-upper-cover/",    
//     "productRelativeImageUrl" : [
//       {
//         "imageNo" : "1",
//         "imageUrl" : "1.jpg" 
//       },
//       {
//         "imageNo" : "2",
//         "imageUrl" : "2.jpg" 
//       },
//       {
//         "imageNo" : "3",
//         "imageUrl" : "3.jpg" 
//       },
//       {
//         "imageNo" : "4",
//         "imageUrl" : "4.jpg" 
//       },        
//       {
//         "imageNo" : "5",
//         "imageUrl" : "5.jpg" 
//       }             
//     ],
//     "items": [
//       {
//         "itemNo": "",
//         "manufactory": "YAMAHA",
//         "manufactory_ch": "YAMAHA",
//         "model" : [
//           {
//             "m" : "ZUMA 125",   
//             "m_ch" : "BW’S 125 改美規雙大燈"
//           },
//           {
//             "m" : "BWS 125"           
//           }
//         ],
//         "color" : [
//           {
//             "color" : "Black / Transparent",
//             "color_ch" : "不透明純黑 / 透明燻黑"
//           }
//         ]     
//       }
//     ]
//   },
//   {
//     "id": 2,
//     "name": "BWS 125 Black Headlight Cover With Pilot Light",
//     "name_ch" : "BWS 125不透明亮黑小盾牌+小燈",
//     "nameImageUrl": "styles/image/product/plastic-cover/bws-black-headlight-cover/product.jpg",
//     "productImageUrl": "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-1.jpg", 
//     "bestSellerUS" : "Y",
//     "bestSellerTW" : "Y",     
//     "orderSeq" : "1", 
//     "catalog" : "Plastic-Cover/Covers",
//     "imageDirectory" : "styles/image/product/plastic-cover/bws-black-headlight-cover/", 
//     "productRelativeImageUrl" : [
//       {
//         "imageNo" : "1",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-1.jpg" 
//       },
//       {
//         "imageNo" : "2",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-2.jpg" 
//       },
//       {
//         "imageNo" : "3",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-3.jpg" 
//       },
//       {
//         "imageNo" : "4",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-4.jpg" 
//       },
//       {
//         "imageNo" : "5",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-5.jpg" 
//       },
//       {
//         "imageNo" : "6",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-6.jpg" 
//       },
//       {
//         "imageNo" : "7",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-7.jpg" 
//       },
//       {
//         "imageNo" : "8",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-8.jpg" 
//       }                     
//     ],    
//     "items": [
//       {
//         "itemNo": "",
//         "manufactory": "YAMAHA",
//         "manufactory_ch": "YAMAHA",
//         "model" : [
//           {
//             "m" : "BWS 125",
//             "m_ch" : "BWS 125"
//           },
//           {
//             "m" : "BWS X 125",
//             "m_ch" : "BWS X 125"
//           }
//         ],
//         "color" : [
//           {           
//             "Cover" : "Black",
//             "Cover_ch" : "不透明亮黑",
//             "PilotReflectiveSurface" : "Sliver / Black",
//             "PilotReflectiveSurface_ch" : "電鍍銀 / 黑",
//             "PilotLightCover" : "Clear / Green / Red / Yellow / Blue",
//             "PilotLightCover_ch" : "全透明 / 透明綠 / 透明紅 / 透明黃 / 透明藍"        
//           }
//         ]
//       }
//     ]
//   },
//   {
//     "id": 3,
//     "name": "BWS Transparent Headlight Cover With Polit Light",
//     "name_ch" : "BWS 125透明燻黑小盾牌+小燈",
//     "nameImageUrl": "styles/image/product/plastic-cover/bws-transparent-headlight-cover/product.jpg",
//     "productImageUrl": "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-1.jpg",   
//     "catalog" : "Plastic-Cover/Covers",
//     "bestSellerUS" : "Y",
//     "bestSellerTW" : "Y", 
//     "orderSeq" : "1",     
//     "imageDirectory" : "styles/image/product/plastic-cover/bws-transparent-headlight-cover/",
//     "productRelativeImageUrl" : [
//       {
//         "imageNo" : "1",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-1.jpg" 
//       },
//       {
//         "imageNo" : "2",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-2.jpg" 
//       },
//       {
//         "imageNo" : "3",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-3.jpg" 
//       },
//       {
//         "imageNo" : "4",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-4.jpg" 
//       },
//       {
//         "imageNo" : "5",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-5.jpg" 
//       },
//       {
//         "imageNo" : "6",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-6.jpg" 
//       },
//       {
//         "imageNo" : "7",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-7.jpg" 
//       },
//       {
//         "imageNo" : "8",
//         "imageUrl" : "YAMAHA BWS BW'S BWS X ZUMA BWS 125 BW'S X 125 大B 美規小盾牌+小燈-8.jpg" 
//       }                             
//     ],    
//     "items": [
//       {
//         "itemNo": "",
//         "manufactory": "YAMAHA",
//         "manufactory_ch": "YAMAHA",
//         "model" : [
//           {
//             "m" : "BWS 125",
//             "m_ch" : "BWS 125"
//           },
//           {
//             "m" : "BWS X 125",
//             "m_ch" : "BWS 125"
//           }
//         ],
//         "color" : [
//           {
//             "Cover" : "Transparent",
//             "Cover_ch" : "透明燻黑",
//             "PilotReflectiveSurface" : "Sliver / Black",
//             "PilotReflectiveSurface_ch" : "電鍍銀/燻黑",
//             "PilotLightCover" : "Clear / Green / Red / Yellow / Blue",
//             "PilotLightCover_ch" : "全透明 / 透明綠 / 透明紅 / 透明黃 / 透明藍"                                  
//           }
//         ]
//       }
//     ]
//   },
//   {
//     "id": 4,
//     "name": "Cooling Fan Cover With Changeable Bedge",
//     "name_ch" : "透明風扇蓋+電鍍飾蓋",
//     "nameImageUrl": "styles/image/product/plastic-cover/cooling-fan-cover-w-changeable-bedge/product.jpg",
//     "productImageUrl": "YAMAHA ZUMA 125 BWS 125 CYGNUS GTR SYM JET POWER EVO GR Z1 KYMCO RACING G5 G6 雷霆 大B 捷豹-1.jpg",  
//     "bestSellerUS" : "Y",
//     "bestSellerTW" : "Y",   
//     "orderSeq" : "1",   
//     "catalog" : "Plastic-Cover/Covers",
//     "imageDirectory" : "styles/image/product/plastic-cover/cooling-fan-cover-w-changeable-bedge/",
//     "productRelativeImageUrl" : [
//       {
//         "imageNo" : "1",
//         "imageUrl" : "YAMAHA ZUMA 125 BWS 125 CYGNUS GTR SYM JET POWER EVO GR Z1 KYMCO RACING G5 G6 雷霆 大B 捷豹-1.jpg" 
//       },
//       {
//         "imageNo" : "2",
//         "imageUrl" : "YAMAHA ZUMA 125 BWS 125 CYGNUS GTR SYM JET POWER EVO GR Z1 KYMCO RACING G5 G6 雷霆 大B 捷豹-2.jpg" 
//       },
//       {
//         "imageNo" : "3",
//         "imageUrl" : "YAMAHA ZUMA 125 BWS 125 CYGNUS GTR SYM JET POWER EVO GR Z1 KYMCO RACING G5 G6 雷霆 大B 捷豹-3.jpg" 
//       },
//       {
//         "imageNo" : "4",
//         "imageUrl" : "YAMAHA ZUMA 125 BWS 125 CYGNUS GTR SYM JET POWER EVO GR Z1 KYMCO RACING G5 G6 雷霆 大B 捷豹-4.jpg" 
//       }                     
//     ],    
//     "items": [
//       {
//         "itemNo": "",
//         "manufactory": "YAMAHA / KYMCO / SYM",
//         "manufactory_ch": "YAMAHA / KYMCO / SYM",
//         "model" : [
//           {
//             "m" : "BWS 125 / CYGNUS / GTR / RAY",
//             "m_ch" : "BWS 125 / 勁戰全車系 / GTR/銳"
//           },
//           {
//             "m" : "RACING 125 150 / G5 / G6",
//             "m_ch" : "雷霆 125 150 / G5/G6/超5"
//           },
//           {
//             "m" : "JET POWER / GR / Z1 / GT 125 EVO",
//             "m_ch" : "捷豹 / GR/Z1 / GT 125 EVO"
//           }
//         ],
//         "color" : [
//           {
//             "FanCover" : "Transparent",
//             "FanCover_ch" : "透明燻黑",
//             "Decoration" : "Rainbow Chrome",
//             "Decoration_ch" : "彩鈦電鍍"
//           }
//         ]
//       }
//     ]
//   },
//   {
//     "id": 5,
//     "name": "Cooling Fan Cover Decoration",
//     "name_ch" : "彩鈦電鍍風扇飾蓋",
//     "nameImageUrl": "styles/image/product/plastic-cover/cooling-fan-cover-bedge/product.jpg",
//     "productImageUrl": "1.jpg",   
//     "bestSellerUS" : "N",
//     "bestSellerTW" : "N",   
//     "orderSeq" : "1",   
//     "catalog" : "Plastic-Cover/Covers",
//     "imageDirectory" : "styles/image/product/plastic-cover/cooling-fan-cover-bedge/",
//     "productRelativeImageUrl" : [
//       {
//         "imageNo" : "1",
//         "imageUrl" : "bws125 zuma125 BWS 125 ZUMA 125  cygnus GTR RAY cooling fan cover decoration-1.jpg" 
//       },
//       {
//         "imageNo" : "2",
//         "imageUrl" : "uopmotors bws125 zuma125 BWS 125 ZUMA 125  cygnus GTR RAY cooling fan cover decoration-2.jpg" 
//       },
//       {
//         "imageNo" : "3",
//         "imageUrl" : "uopmotors bws125 zuma125 BWS 125 ZUMA 125  cygnus GTR RAY cooling fan cover decoration-3.jpg" 
//       },
//       {
//         "imageNo" : "4",
//         "imageUrl" : "uopmotors bws125 zuma125 BWS 125 ZUMA 125  cygnus GTR RAY cooling fan cover decoration-4.jpg" 
//       },
//       {
//         "imageNo" : "5",
//         "imageUrl" : "bws125 zuma125 BWS 125 ZUMA 125  cygnus GTR RAY cooling fan cover decoration-5.jpg"
//       }                     
//     ],    
//     "items": [
//       {
//         "itemNo": "",
//         "manufactory": "YAMAHA / KYMCO / SYM",
//         "manufactory_ch": "YAMAHA / KYMCO / SYM",
//         "model" : [
//           {
//             "m" : "BWS 125 / CYGNUS / GTR / RAY",
//             "m_ch" : "BWS 125/勁戰全車系/GTR/銳"
//           }
//         ],
//         "color" : [
//           {
//             "color" : "Rainbow Chrome",
//             "color_ch" : "彩鈦電鍍"
//           }
//         ]
//       }
//     ]
//   }
//   ];

class ProductLayout extends Component {
	constructor(props){
		super(props);
		console.log("Product init");
		this.state = {
      products: myProduct,
      filterProd: [], 
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleNestedListToggle = this.handleNestedListToggle.bind(this);
    // this.handleListClick = this.handleListClick.bind(this);
    this.filterProd = this.filterProd.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
	}	

  componentWillMount = () => {
    console.log("product will mount");

    this.setState({filterProd: this.filterProd('Best-Seller', this.state.products)});
  }
  componentDidMount = () => {
    console.log("product did mount");
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  handleListClick_ = (catalog, event, index) => {
    // console.log((this.refs.BestSeller).style);
    // ReactDOM.findDOMNode(this.refs.BestSeller).style = {
    //   backgroundColor: "red" 
    // }
    var theFilterProd = this.filterProd(catalog, this.state.products);
    
    if(theFilterProd.length >= 0){
      console.log("size is greater");
      this.setState({filterProd: theFilterProd});
    }
    console.log(this.state);
  }

  var theVariable = "";

  handleListClick = (catalog) => {
    console.log(catalog);
  }


  filterProd = (catalog, prods) => {
    let filterResult = [];
    if(catalog === 'Best-Seller'){
      filterResult = prods.filter((prod) => {
        // console.log(prod);
        return prod.bestSellerUS === "Y";
      });
    } else {
      filterResult = prods.filter((prod) => {
        return prod.catalog.indexOf(catalog) !== -1;
      });
    }
    return filterResult;
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
      <Grid>
        <Row className="show-grid">
          <Col xs={4} md={3}>
            <ProductLeftList handles={this.handleListClick}/>
            {/*
                          <List>
              <ListItem key={1} ref="BestSeller" style={{backgroundColor: ""}} primaryText="Best-Seller" leftIcon={<ActionFavorite />} onClick={(event) => this.handleListClick('Best-Seller', event)} />
              <ListItem key={2}
                        primaryText="Covers" 
                        leftIcon={<NavigationArrowDropUp />} 
                        initiallyOpen={false} 
                        primaryTogglesNestedList={true} 
                        nestedItems={[
                          <ListItem key={2.1} primaryText="Plastic Cover" />,
                          <ListItem key={2.2} primaryText="Carbon/Chameleon" />
                        ]} 
              />   
              <ListItem key={3} 
                        primaryText="Engine Parts" 
                        leftIcon={<NavigationArrowDropUp />} 
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
              />           
              <ListItem key={4} 
                        primaryText="Transmission Parts" 
                        leftIcon={<NavigationArrowDropUp />} 
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
              />   
              <ListItem key={5} 
                        primaryText="Suspension Parts" 
                        leftIcon={<NavigationArrowDropUp />} 
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
              />   
              <ListItem key={6} 
                        primaryText="Light" 
                        leftIcon={<NavigationArrowDropUp />} 
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                          <ListItem key={6.1} primaryText="Head Lamp"/>,
                          <ListItem key={6.2} primaryText="Taillight"/>,
                          <ListItem key={6.3} primaryText="Signal Light"/>,
                          <ListItem key={6.4} primaryText="Others" />
                        ]}
              />   
              <ListItem key={7} 
                        primaryText="Electronics" 
                        leftIcon={<NavigationArrowDropUp />} 
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
              />   
              <ListItem key={8} 
                        primaryText="Special Customized CNC Parts" 
                        leftIcon={<NavigationArrowDropUp />} 
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
              />                                                                         
            </List>
          */}
          </Col>
          <Col xs={14} md={9}>
            <ProductRightContent />
          </Col>
        </Row>
      </Grid>
    );
	};
}

export default ProductLayout;