import React, { Component } from 'react';
// import { WEATHER_ACTIONS } from '../../redux/actions/weatherActions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    weather: state.weather,
  });
class WeatherComponent extends Component {

    render() {
        let modTemp = parseInt(this.props.weather.temp.americaTemp, 10);
        let icon = this.props.weather.temp.icon
        return (
            <div>
            {/* <pre>{JSON.stringify(modTemp)}</pre>   */}
                <p>it's {modTemp}°F</p>
                <img src='https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-31-512.png' alt='barf.jpg' />
            </div>
        )
    }
}

export default connect(mapStateToProps)(WeatherComponent);