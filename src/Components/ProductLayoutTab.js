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
      isClassMotor: true,
      isScooter: true,
      isMotorcycle: true,
      isOthers: true
    };

    console.log(this.state.products);
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
    let isClassMotor = this.state.isClassMotor;
    let isMotorcycle = this.state.isMotorcycle;
    let isScooter = this.state.isScooter;
    let isOthers = this.state.isOthers;

    switch(event.target.value){
      case "ClassMotor":
        console.log(this.state.ClassMotor);
        isClassMotor = !isClassMotor;
        this.setState({isClassMotor: isClassMotor});
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
    let v1 = [];
    let v2 = [];
    let v3 = [];
    let v4 = [];
    
    if(isClassMotor){
      finalProds = finalProds.concat(this.state.ClassMotor);
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
            <Checkbox label="經典老車(Classic Motors)" style={styles.checkbox} value="ClassMotor" checked={this.state.isClassMotor} onCheck={this.handleChange}/>
          </Col>
          <Col xs={3} md={2}>
            <Checkbox label="摩托車(Scooter)" style={styles.checkbox} value="Scooter" checked={this.state.isScooter} onCheck={this.handleChange}/>
          </Col>
          <Col xs={3} md={2}>
            <Checkbox label="重機(Motorcycle)" style={styles.checkbox} value="Motorcycle" checked={this.state.isMotorcycle} onCheck={this.handleChange}/>
          </Col>
          <Col xs={3} md={2}>
            <Checkbox label="其他(Others)" style={styles.checkbox} value="Others" checked={this.state.isOthers} onCheck={this.handleChange}/>
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