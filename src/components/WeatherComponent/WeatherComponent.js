import React, { Component } from 'react';
// import { WEATHER_ACTIONS } from '../../redux/actions/weatherActions';
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
        let modTemp = parseInt(this.props.temp.temp, 10);

        return (
            <div>
            {/* <pre>{JSON.stringify(modTemp)}</pre>   */}
                <p>{modTemp}°F</p>
                <img src='https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-31-512.png' alt='barf.jpg' />
            </div>
        )
    }
}

export default connect(mapStateToProps)(WeatherComponent);