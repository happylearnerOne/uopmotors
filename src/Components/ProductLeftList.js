import React, {Component, PropTypes} from 'react';
// import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem, makeSelectable} from 'material-ui/List';
// import Avatar from 'material-ui/Avatar';
// import Subheader from 'material-ui/Subheader';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import NavigationArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';


let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {

    constructor(props){
      super(props);

      // this.handleListClick = this.handleListClick.bind(this);
      console.log("SelectableList initiallyOpen");
      // console.log(this);
    }

    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      // console.log("handleRequestChange");
      // console.log(this.props);
      this.setState({
        selectedIndex: index,
      });

      // this.props.handles(catalog);
    };
    /*
    handleListClick = (catalog, event) => {

      var theFilterProd = this.filterProd(catalog, this.state.products);
      
      if(theFilterProd.length >= 0){
        console.log("size is greater");
        this.setState({filterProd: theFilterProd});
      }
      console.log(this.state);
    }
    */
    render() {
      // console.log("wrape state");
      // console.log(this);
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange} 
        >

          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

// const ProductLeftList = () => (
class ProductLeftList extends Component {
    constructor(props){
      super(props);
      console.log("ProductLeftList initiallyOpen");
      // console.log(props);
    }
    render(){
      return (

    <SelectableList defaultValue={1}>
              {/*
              <Toggle
                toggled={this.state.open}
                onToggle={this.handleToggle}
                labelPosition="right"
                label="This toggle controls the expanded state of the submenu item."
              /> */}

              {/*<List>*/}
                {/* <Subheader>Nested List Items</Subheader> */}
                <ListItem value={1} key={1} primaryText="Best-Seller" onClick={(event) => this.props.handles(event, 'Best-Seller')} leftIcon={<ActionFavorite />} />
                <ListItem value={2} key={2}
                          primaryText="Covers" 
                          leftIcon={<NavigationArrowDropUp />} 
                          initiallyOpen={false} 
                          onClick={(event) => this.props.handles(event, 'Covers')}
                          nestedItems={[
                            <ListItem value={2.1} key={2.1} primaryText="Plastic Cover" onClick={(event) => this.props.handles(event, 'Plastic-Cover')}/>,
                            <ListItem value={2.2} key={2.2} primaryText="Carbon/Chameleon" onClick={(event) => this.props.handles(event, 'Carbon/Chameleon')}/>
                          ]} 
                />   
                <ListItem value={3} key={3} 
                          primaryText="Engine Parts" 
                          leftIcon={<NavigationArrowDropUp />} 
                          onClick={(event) => this.props.handles(event, 'Engine-Parts')}
                />           
                <ListItem value={4} key={4} 
                          primaryText="Transmission Parts" 
                          leftIcon={<NavigationArrowDropUp />} 
                          onClick={(event) => this.props.handles(event, 'Transmission-Parts')}
                />   
                <ListItem value={5} key={5} 
                          primaryText="Suspension Parts" 
                          leftIcon={<NavigationArrowDropUp />} 
                          onClick={(event) => this.props.handles(event, 'Suspension-Parts')}
                />   
                <ListItem value={6} key={6}
                          primaryText="Light" 
                          leftIcon={<NavigationArrowDropUp />} 
                          onClick={(event) => this.props.handles(event, 'Light')}
                          nestedItems={[
                            <ListItem value={6.1} key={6.1} primaryText="Head Lamp" onClick={(event) => this.props.handles(event, 'Head-Lamp')}/>,
                            <ListItem value={6.2} key={6.2} primaryText="Taillight" onClick={(event) => this.props.handles(event, 'Taillight')}/>,
                            <ListItem value={6.3} key={6.3} primaryText="Signal Light" onClick={(event) => this.props.handles(event, 'Signal-Light')}/>,
                            <ListItem value={6.4} key={6.4} primaryText="Others" onClick={(event) => this.props.handles(event, 'Others')}/>
                          ]}
                />   
                <ListItem value={7} key={7} 
                          primaryText="Electronics" 
                          leftIcon={<NavigationArrowDropUp />} 
                          onClick={(event) => this.props.handles(event, 'Electronics-Parts')}
                />   
                <ListItem value={8} key={8} 
                          primaryText="Special Customized CNC Parts" 
                          leftIcon={<NavigationArrowDropUp />} 
                          onClick={(event) => this.props.handles(event, 'Special-Customized-CNC-Parts')}
                />                                                                         
              {/*</List>*/}

    </SelectableList>

      );
    };

// );
}
export default ProductLeftList;