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
        let imgSrc = null;

        // Switch statement to choose icon image URL
        switch (icon){
            // clear skies icon
            case '01d':
            case '01n':
                imgSrc = (<div><img src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-01-512.png" /></div>)
                return imgSrc;
            // few clouds icon   
            case '02d':
            case '02n':
                imgSrc = (<div><img src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-17-512.png" /></div>)
                return imgSrc;
            // scattered and broken clouds icon
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                imgSrc = (<div><img id="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-16-512.png" /></div>)
                return imgSrc;
            // rain shower icon
            case '09d':
            case '09n':
                imgSrc = (<div><img id="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-19-512.png" /></div>)
                return imgSrc;
            // rain icon
            case '10d':
            case '10n':
                imgSrc = (<div><img id="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-36-512.png" /></div>)
                return imgSrc;
            // thunderstorm icon
            case '11d':
            case '11n':
                imgSrc = (<div><img id="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-28-512.png" /></div>)
                return imgSrc;
            // snow icon
            case '13d':
            case '13n':
                imgSrc = (<div><img id="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-68-512.png" /></div>)
                return imgSrc;
            // mist icon
            case '50d':
            case '50n':
                imgSrc = (<div><img id="icon" src="https://cdn.onlinewebfonts.com/svg/img_541488.png" /></div>)
                return imgSrc;
            default:
                // link is a sunglasses icon...just for fun.
        return imgSrc = (<div><img id="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-15-512.png" /></div>);
        }// end icon switch


        return (
            <div>
            {/* <pre>{JSON.stringify(modTemp)}</pre>   */}
                <p>it's {modTemp}°F</p>
                { imgSrc }
            </div>
        )
    }
}

export default connect(mapStateToProps)(WeatherComponent);