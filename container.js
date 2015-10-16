'use strict';

var React = require('react-native');
var {
    View,
    StyleSheet
} = React;

var RouterMap = {
    'home': require('./pages/home.js'),
    'login': require('./pages/login.js')
};

var Container = React.createClass({
    goTo: function (name) {
        this.props.navigator.push({
            name: name,
            index: this.props.route.index + 1
        });
    },

    back: function () {
        this.props.navigator.pop();
    },

    getInitialState: function () {
        var route = this.props.route;
        return {
            page: RouterMap[route.name]
        };
    },
    render () {
        var Page = this.state.page;
        return (
            <View style={styles.container} >
                <Page route={this.props.route} goTo={this.goTo} back={this.back}>
                </Page>
            </View>
        );
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

module.exports = Container;