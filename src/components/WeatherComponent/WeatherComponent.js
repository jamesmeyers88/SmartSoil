import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    weather: state.weather,
  });
class WeatherComponent extends Component {
   
    
    render() {
        let modTemp = parseInt(this.props.weather.temp.americaTemp)
        let icon = this.props.weather.temp.icon
        let imgSrc = null;
        let weatherContent = null;

        // if weather data has arrived from API
        // the following will render.
        if (this.props.weather) {
        // Switch statement to choose icon image URL
        switch (icon){
            // clear skies icon
            case '01d':
            case '01n':
                imgSrc = (<span><p>Hey! It's {modTemp}</p><img class="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-01-512.png" /><p>Hey! It's {modTemp}</p></span>)
                return imgSrc;
            // few clouds icon   
            case '02d':
            case '02n':
                imgSrc = (<span><p>Hey! It's {modTemp}</p><img class="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-17-512.png" /><p>Hey! It's {modTemp}</p></span>)
                return imgSrc;
            // scattered and broken clouds icon
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                imgSrc = (<div><p>Hey! It's {modTemp}</p><img class="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-16-512.png" /></div>)
                return imgSrc;
            // rain shower icon
            case '09d':
            case '09n':
                imgSrc = (<div><p>Hey! It's {modTemp}</p><img class="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-19-512.png" /></div>)
                return imgSrc;
            // rain icon
            case '10d':
            case '10n':
                imgSrc = (<div><p>Hey! It's {modTemp}</p><img class="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-36-512.png" /></div>)
                return imgSrc;
            // thunderstorm icon
            case '11d':
            case '11n':
                imgSrc = (<div><p>Hey! It's {modTemp}</p><img id="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-28-512.png" /></div>)
                return imgSrc;
            // snow icon
            case '13d':
            case '13n':
                imgSrc = (<div><p>Hey! It's {modTemp}</p><img id="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-68-512.png" /></div>)
                return imgSrc;
            // mist icon
            case '50d':
            case '50n':
                imgSrc = (<div><p>Hey! It's {modTemp}</p><img id="icon" src="https://cdn.onlinewebfonts.com/svg/img_541488.png" /></div>)
                return imgSrc;
            default:
                // link is a sunglasses icon...just for fun.
                imgSrc = (<div><p>Hey! It's {modTemp}</p><img id="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-15-512.png" /></div>);
                break;
        }// end icon switch
    }

        return (
            <div>
                { weatherContent }
            </div>
        )
    }
}

export default connect(mapStateToProps)(WeatherComponent);