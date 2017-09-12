var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
      // remember you can only return one "root" element (in this case, a 'div')
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {props.children}
          </div>
        </div>
      </div>
      // adding 'this.props.children' tells Main where to place children components
  );
};

module.exports = Main;
