import React, { Component } from 'react';
import { WEATHER_ACTIONS } from '../../redux/actions/weatherActions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    temp: state.americaTemp,
  });
class WeatherComponent extends Component {
    componentDidMount() {
        // this.props.dispatch({ type: WEATHER_ACTIONS.FETCH_TEMP });
        // // this.setState({
        // //     weather: this.weather
        // // })
      }
    render() {
        
        return (
            <div>
            <pre>{JSON.stringify(this.props.temp)}</pre>  
                <p>Temp goes here</p>
                <p>Icon goes here</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(WeatherComponent);