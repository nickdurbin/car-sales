import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/actions';

const App = (props) => {
  const { car, additionalFeatures, additionalPrice } = props

  const removeItem = item => {
    removeFeature(item)
  };

  const buyItem = item => {
    addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeItem={removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} buyItem={buyItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

function mapDispatchToProps() {

}

function mapStateToProps(state) {
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.car
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);