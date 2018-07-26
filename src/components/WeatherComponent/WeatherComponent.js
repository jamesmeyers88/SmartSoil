import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Paper from '@material-ui/core/Paper';
import '../../styles/WeatherComponent.css'

const mapStateToProps = state => ({
    user: state.user,
    weather: state.weather,
  });
class WeatherComponent extends Component {
   
    
    render() {
        let modTemp = parseInt(this.props.weather.temp.americaTemp, 10)
        let icon = this.props.weather.temp.icon
        console.log(`this is the icon`, icon)
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
                imgSrc = (<div className="weatherImage"><p className="temp">It's {modTemp}˚F</p><img  className="icon"  src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-01-512.png" alt="clear" /></div>)
                return imgSrc;
            // few clouds icon   
            case '02d':
            case '02n':
                imgSrc = (<div className="weatherImage"><p>It's {modTemp}˚F</p><img className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-17-512.png" alt="few clouds" /></div>)
                return imgSrc;
            // scattered and broken clouds icon
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                imgSrc = (<div className="weatherImage"><p>It's {modTemp}˚F</p><img className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-16-512.png" alt="scattered clouds" /></div>)
                return imgSrc;
            // rain shower icon
            case '09d':
            case '09n':
                imgSrc = (<div className="weatherImage"><p>It's {modTemp}˚F</p><img className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-19-512.png" alt="rain shower" /></div>)
                return imgSrc;
            // rain icon
            case '10d':
            case '10n':
                imgSrc = (<div className="weatherImage"><p>It's {modTemp}˚F</p><img className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-36-512.png" alt="rain" /></div>)
                return imgSrc;
            // thunderstorm icon
            case '11d':
            case '11n':
                imgSrc = (<div className="weatherImage"><p>It's {modTemp}˚F</p><img className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-28-512.png" alt="thunderstorm" /></div>)
                return imgSrc;
            // snow icon
            case '13d':
            case '13n':
                imgSrc = (<div className="weatherImage"><p>It's {modTemp}˚F</p><img className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-68-512.png" alt="snow" /></div>)
                return imgSrc;
            // mist icon
            case '50d':
            case '50n':
                imgSrc = (<div className="weatherImage"><p>It's {modTemp}˚F</p><img className="icon" src="/images/cloudy.png" alt="mist" /></div>)
        // https://cdn.onlinewebfonts.com/svg/img_541488.png
                return imgSrc;
            default:
                // link is a sunglasses icon...just for fun.
                imgSrc = (<div className="weatherImage"><p>It's {modTemp}˚F</p><img className="icon" src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-15-512.png" alt="sunglasses" /></div>);
                break;
            }// end icon switch
        } // end conitional render

        return (
            <div>
                {/* <pre>{JSON.stringify(this.props.weather)}</pre> */}
                { weatherContent }
            </div>
        )
    }
}

export default connect(mapStateToProps)(WeatherComponent);