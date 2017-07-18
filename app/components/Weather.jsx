var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    // 'that' variable: simple way to allow access to 'this' 
    //    even after entering openWeatherMap.getTemp function where 'this' binding gets lost
    var that = this;

    // set isLoading to true while fetching weather results
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      // set isLoading back to false when weather results are returned so that temp and location can be
      // used to display weather (renderMessage function)
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function (errorMessage) {
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    })
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    // allows us to conditionally render components based on 'state'
    // use {renderMessage()} (jsx expression) call below in return statement
    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;