'use strict';
var React = require('react-native');

var {
    Text,
    View,
    StyleSheet
} = React;

var Home = React.createClass({
    render () {
        return (
            <View style={styles.container}>
                <Text>
                    欢迎欢迎，热烈欢迎                    
                </Text>
                <Text style={styles.link} onPress={() => this.props.goTo('login')}>
                    去登陆
                </Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    link: {
        color: 'blue',
        textAlign: 'center'
    }
});

module.exports = Home;