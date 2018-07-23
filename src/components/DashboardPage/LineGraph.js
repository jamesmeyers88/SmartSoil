import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SOIL_ACTIONS } from '../../redux/actions/soilActions';
import { WATER_ACTIONS } from '../../redux/actions/waterActions';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
ReactChartkick.addAdapter(Chart)


const mapStateToProps = state => ({
    user: state.user,
    temp: state.temp,
    soilData: state.soilData,
    water: state.water,
  });

class Graph extends Component {

    constructor(props){
        super(props);
        this.state = {
          deviceList: [],
          temp: '',
          username: '',
          graphObject: {},
        }
      }
    
    async componentDidMount() {
        this.props.dispatch({ type: SOIL_ACTIONS.FETCH_SOIL });
        this.props.dispatch({ type: WATER_ACTIONS.FETCH_EVENTS })
        // console.log('this is water', this.props``)
        await this.loopData();
    } // end componentDidMount

    /*Function loops through soil moisure data from DB to
    create a useable dataset to be graphed */
    loopData(){
        let graphData = {};
        let preGraphData = this.props.soilData.soilData;
        // console.log(`this is preGraphData`, preGraphData)

        for(let dataPoint of preGraphData){
        graphData[dataPoint.date] = -Number(dataPoint.moisture)}
        // console.log(`this is graphData`, graphData);

        this.setState({
        graphObject: graphData
        })
        // console.log(`this is graphObject`, this.state.graphObject);
    }// end loopData

    render(){
        return(
            <LineChart id="users-chart" width="500px" height="300px" data={this.state.graphObject} xtitle="Date" ytitle="Soil Moisture Level" download={ true }/>
        )
    };
}

export default connect(mapStateToProps)(Graph);