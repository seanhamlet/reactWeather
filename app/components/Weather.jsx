var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      // set isLoading back to false when weather results are returned so that temp and location can be
      // used to display weather (renderMessage function)
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    })
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    // allows us to conditionally render components based on 'state'
    // use {renderMessage()} (jsx expression) call below in return statement
    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
