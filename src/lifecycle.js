var React = require('react');
var ReactDOM = require('react-dom');

var LifeCycle = React.createClass({
  getInitialState: function() {
    alert('getInitialState');
    return {};  
  },
  componentWillMount: function() { 
    alert('componentWillMount');
  },
  render: function() {
    alert('render');
    return (
    <div> Hello World! </div>
    );
  },
  componentDidMount: function() {
    alert('componentDidMount');
  }
});

ReactDOM.render(
  <LifeCycle />,
  document.getElementById('lifecycle')
);