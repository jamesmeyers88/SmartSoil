import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import '../../styles/WeatherComponent.css'

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
        // the following will render:
        if (this.props.weather) {
            // Switch statement to choose icon image URL -- will add night ones later
            switch (icon){
            // clear skies icon
            case '01d':
            case '01n':
                imgSrc = (<Paper className="container"><p>Hey! It's {modTemp}˚F</p><img  className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-01-512.png" alt="clear" /></Paper>)
                return imgSrc;
            // few clouds icon   
            case '02d':
            case '02n':
                imgSrc = (<Paper className="weatherImage"><p>Hey! It's {modTemp}˚F</p><img className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-17-512.png" alt="few clouds" /></Paper>)
                return imgSrc;
            // scattered and broken clouds icon
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                imgSrc = (<Paper className="weatherImage"><p>Hey! It's {modTemp}˚F</p><img className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-16-512.png" alt="scattered clouds" /></Paper>)
                return imgSrc;
            // rain shower icon
            case '09d':
            case '09n':
                imgSrc = (<Paper><p>Hey! It's {modTemp}˚F</p><img className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-19-512.png" alt="rain shower" /></Paper>)
                return imgSrc;
            // rain icon
            case '10d':
            case '10n':
                imgSrc = (<div><p>Hey! It's {modTemp}˚F</p><img className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-36-512.png" alt="rain" /></div>)
                return imgSrc;
            // thunderstorm icon
            case '11d':
            case '11n':
                imgSrc = (<div><p>Hey! It's {modTemp}˚F</p><img className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-28-512.png" alt="thunderstorm" /></div>)
                return imgSrc;
            // snow icon
            case '13d':
            case '13n':
                imgSrc = (<div><p>Hey! It's {modTemp}˚F</p><img className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-68-512.png" alt="snow" /></div>)
                return imgSrc;
            // mist icon
            case '50d':
            case '50n':
                imgSrc = (<div><p>Hey! It's {modTemp}˚F</p><img className="icon" src="https://cdn.onlinewebfonts.com/svg/img_541488.png" alt="mist" /></div>)
                return imgSrc;
            default:
                // link is a sunglasses icon...just for fun.
                imgSrc = (<div><p>Hey! It's {modTemp}˚F</p><img className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-15-512.png" alt="sunglasses" /></div>);
                break;
            }// end icon switch
        } // end conitional render

        return (
            <div>
                <Paper>
                { weatherContent }
                </Paper>
            </div>
        )
    }
}

export default connect(mapStateToProps)(WeatherComponent);