import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SOIL_ACTIONS } from '../../redux/actions/soilActions';
// import { LineChart } from 'react-chartjs';
let LineChart = require("react-chartjs").Line;

const mapStateToProps = state => ({
    user: state.user,
    temp: state.temp,
    soilData: state.soilData,
  });

class LineGraph extends Component {
    
    componentDidMount() {
        this.props.dispatch({ type: SOIL_ACTIONS.FETCH_SOIL });
    }

    render(){
        return(
            <div>
                <pre>{JSON.stringify(this.props.soilData)}</pre>
            </div>
        )
    };
}

export default connect(mapStateToProps)(LineGraph);