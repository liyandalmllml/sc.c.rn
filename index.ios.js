/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Container = require('./container.js');
var {
  AppRegistry,
  StyleSheet,
  Navigator,
} = React;

var sc_c_rn = React.createClass({
  render () {
    return (
      <Navigator 
        style={styles.container}
        initialRoute={{name: 'home', index: '0'}}
        renderScene={(route, navigator)=><Container navigator={navigator} route={route}/>} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('sc_c_rn', () => sc_c_rn);
