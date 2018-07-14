import React, { Component } from 'react';
import { WEATHER_ACTIONS } from '../../redux/actions/weatherActions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    temp: state.weather,
  });
class WeatherComponent extends Component {
    componentDidMount() {
        // this.props.dispatch({ type: WEATHER_ACTIONS.FETCH_TEMP });
        // // this.setState({
        // //     weather: this.weather
        // // })
      }
    render() {
        let modTemp = parseInt(this.props.temp.temp);

        return (
            <div>
            {/* <pre>{JSON.stringify(modTemp)}</pre>   */}
                <p>{modTemp}°F</p>
                <p>Icon goes here</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(WeatherComponent);