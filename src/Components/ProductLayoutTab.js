import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import myProduct from '../data/productData';
import ProductContent from  './ProductContent';
import Checkbox from 'material-ui/Checkbox';


class ProductLayoutTab extends Component {
	constructor(props){
		super(props);
		console.log("ProductLayoutTab init");
		this.state = {
      products: myProduct,
      New: [],
      LightweightBike: [],
      Scooter: [],
      Motorcycle: [],
      OtherProds: [],
      displayProds: myProduct,
      isNew: true,
      isScooter: true,
      isLightweightBike: true,
      isMotorcycle: true,
      isOthers: true
    };

    console.log(this.state.products);
    this.handleChange = this.handleChange.bind(this);
    this.filterProd = this.filterProd.bind(this);
	}	

  componentWillMount = () => {
    let NewProds = []
    let LightweightBikeProds = [];
    let ScooterProds = [];
    let MotorcycleProds = [];
    let OtherProds = [];
    NewProds = this.filterProd("New", this.state.products);
    LightweightBikeProds = this.filterProd("LightweightBike", this.state.products);
    ScooterProds = this.filterProd("Scooter", this.state.products);
    MotorcycleProds = this.filterProd("Motorcycle", this.state.products);
    OtherProds = this.filterProd("Others", this.state.products);

    this.setState({New: NewProds, LightweightBike: LightweightBikeProds, Scooter: ScooterProds, Motorcycle: MotorcycleProds, OtherProds: OtherProds});
  }

  handleChange = (event) => {
    console.log(event.target.value);
    let isNew = this.state.isNew;
    let isLightweightBike = this.state.isLightweightBike;
    let isMotorcycle = this.state.isMotorcycle;
    let isScooter = this.state.isScooter;
    let isOthers = this.state.isOthers;

    switch(event.target.value){
      case "New":
        console.log(this.state.isNew);
        isNew = !isNew;
        this.setState({isNew: isNew});
        break;
      case "Motorcycle":
        console.log(this.state.Motorcycle);
        isMotorcycle = !isMotorcycle;
        this.setState({isMotorcycle: isMotorcycle});
        break;
      case "LightweightBike":
        console.log(this.state.LightweightBike);
        isLightweightBike = !isLightweightBike;
        this.setState({isLightweightBike: isLightweightBike});
        break;
      case "Scooter": 
        console.log(this.state.Scooter);
        isScooter = !isScooter;
        this.setState({isScooter: isScooter});
        break;
      case "Others":
        console.log(this.state.OtherProds);
        isOthers = !isOthers;
        this.setState({isOthers: isOthers});
        break;
      default:
        break;
    }

    let finalProds = [];
    
    if(isNew){
      finalProds = finalProds.concat(this.state.New);
    }
    if(isLightweightBike){
      finalProds = finalProds.concat(this.state.LightweightBike);
    }
    if(isScooter){
      finalProds = finalProds.concat(this.state.Scooter);
    }
    if(isMotorcycle){
      finalProds = finalProds.concat(this.state.Motorcycle);
    }
    if(isOthers){
      finalProds = finalProds.concat(this.state.OtherProds);
    }

    
    this.setState({displayProds: finalProds});
  }

  filterProd = (catalog, prods) => {
    let filterResult = [];

    filterResult = prods.filter((prod) => {
      return prod.classfied.indexOf(catalog) !== -1;
    });
    return filterResult;
  }



	render(){	
    let vHeight = window.screen.height;
    const colStyle = {
      paddingTop: (vHeight/100)
    }	

    const styles = {
      block: {
      maxWidth: 250,
      },
      checkbox: {
        marginBottom: 16,
      },
    };
    if(this.props.activeTab === "Products"){
      return (
        <Grid>
          <br/>
          <Row>
            <Col xs={3} md={2}>
              <Checkbox label="新品(New)" style={styles.checkbox} value="New" checked={this.state.isNew} onCheck={this.handleChange}/>
            </Col>
            <Col xs={3} md={2}>
              <Checkbox label="摩托車(Scooters)" style={styles.checkbox} value="Scooter" checked={this.state.isScooter} onCheck={this.handleChange}/>
            </Col>
            <Col xs={4} md={3}>
              <Checkbox label="輕擋車(Lightweight Bikes)" style={styles.checkbox} value="LightweightBike" checked={this.state.isLightweightBike} onCheck={this.handleChange}/>
            </Col>
            <Col xs={4} md={3}>
              <Checkbox label="重機(Motorcycles)" style={styles.checkbox} value="Motorcycle" checked={this.state.isMotorcycle} onCheck={this.handleChange}/>
            </Col>
            <Col xs={4} md={2}>
              <Checkbox label="碳纖維及其他(Others)" style={styles.checkbox} value="Others" checked={this.state.isOthers} onCheck={this.handleChange}/>
            </Col>
          </Row>
          <Row>
            {this.state.displayProds.map((prod, index) => (
              <Col xs={9} md={6} style={colStyle}>
                  <ProductContent prod={prod}/>
              </Col>
            ))}
          </Row>
        </Grid>
      );
    } else {
      return (<div>&nbsp;</div>);
    }
	};
}

export default ProductLayoutTab;