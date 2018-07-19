import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SOIL_ACTIONS } from '../../redux/actions/soilActions';
import ReactChartkick, { AreaChart } from 'react-chartkick'
import Chart from 'chart.js'
ReactChartkick.addAdapter(Chart)

const mapStateToProps = state => ({
    user: state.user,
    temp: state.temp,
    soilData: state.soilData,
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
        await this.loopData();
    } // end componentDidMount

    /*Function loops through soil moisure data from DB to
    create a useable dataset to be graphed */
    loopData(){
        let graphData = {};
        let preGraphData = this.props.soilData.soilData;
        // console.log(`this is preGraphData`, preGraphData)

        for(let dataPoint of preGraphData){
        graphData[dataPoint.date] = Number(dataPoint.moisture)}
        // console.log(`this is graphData`, graphData);

        this.setState({
        graphObject: graphData
        })
        // console.log(`this is graphObject`, this.state.graphObject);
    }// end loopData

    render(){
        return(
            <div>
                <AreaChart id="users-chart" width="500px" height="300px" data={this.state.graphObject} />
            </div>
        )
    };
}

export default connect(mapStateToProps)(Graph);