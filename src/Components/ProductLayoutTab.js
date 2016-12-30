import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import myProduct from '../data/productTest';
import ProductContent from  './ProductContent';
import Checkbox from 'material-ui/Checkbox';


class ProductLayoutTab extends Component {
	constructor(props){
		super(props);
		console.log("ProductLayoutTab init");
		this.state = {
      products: myProduct,
      ClassMotor: [],
      Scooter: [],
      Motorcycle: [],
      OtherProds: [],
      displayProds: myProduct,
      isClassMoter: true,
      isScooter: true,
      isMotorcycle: true,
      isOthers: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterProd = this.filterProd.bind(this);
	}	

  componentWillMount = () => {
    let ClassMotorData = [];
    let ScooterData = [];
    let MotorcycleData = [];
    let OtherProdsData = [];
    ClassMotorData = this.filterProd("ClassMotor", this.state.products);
    ScooterData = this.filterProd("Scooter", this.state.products);
    MotorcycleData = this.filterProd("Motorcycle", this.state.products);
    OtherProdsData = this.filterProd("Others", this.state.products);

    this.setState({ClassMotor: ClassMotorData, Scooter: ScooterData, Motorcycle: MotorcycleData, OtherProds: OtherProdsData});
  }

  handleChange = (event) => {
    console.log(event.target.value);
    let isClassMoter = this.state.isClassMoter;
    let isMotorcycle = this.state.isMotorcycle;
    let isScooter = this.state.isScooter;
    let isOthers = this.state.isOthers;

    switch(event.target.value){
      case "ClassMotor":
        console.log(this.state.ClassMotor);
        isClassMoter = !isClassMoter;
        this.setState({isClassMoter: isClassMoter});
        break;
      case "Motorcycle":
        console.log(this.state.Motorcycle);
        isMotorcycle = !isMotorcycle;
        this.setState({isMotorcycle: isMotorcycle});
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
    
    if(isClassMoter){
      Object.assign(finalProds, this.state.ClassMotor);
      //finalProds = finalProds.push(this.state.ClassMotor);
    }
    if(isScooter){
      Object.assign(finalProds, this.state.Scooter);
      //finalProds = finalProds.push(this.state.Scooter);
    }
    if(isMotorcycle){
      Object.assign(finalProds, this.state.Motorcycle);
      //finalProds = finalProds.push(this.state.Motorcycle);
    }
    if(isOthers){
      Object.assign(finalProds, this.state.OtherProds);
      //finalProds = finalProds.push(this.state.OtherProds);
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
      paddingTop: (vHeight/30)
    }	

    const styles = {
      block: {
      maxWidth: 250,
      },
      checkbox: {
        marginBottom: 16,
      },
    };

    return (
      <Grid>
        <br/>
        <Row>
          <Col xs={3} md={2}>
            <Checkbox label="經典老車" style={styles.checkbox} value="ClassMotor" checked={this.state.isClassMoter} onCheck={this.handleChange}/>
          </Col>
          <Col xs={3} md={2}>
            <Checkbox label="摩托車" style={styles.checkbox} value="Scooter" checked={this.state.isScooter} onCheck={this.handleChange}/>
          </Col>
          <Col xs={3} md={2}>
            <Checkbox label="重機" style={styles.checkbox} value="Motorcycle" checked={this.state.isMotorcycle} onCheck={this.handleChange}/>
          </Col>
          <Col xs={3} md={2}>
            <Checkbox label="其他" style={styles.checkbox} value="Others" checked={this.state.isOthers} onCheck={this.handleChange}/>
          </Col>
          <Col xs={5} md={4}>&nbsp;</Col>
        </Row>
        <Row className="show-grid">
          {this.state.displayProds.map((prod, index) => (
            <Col xs={9} md={6} style={colStyle}>
                <ProductContent prod={prod}/>
            </Col>
          ))}
        </Row>
      </Grid>
    );
	};
}

export default ProductLayoutTab;