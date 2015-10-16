'use strict';
var React = require('react-native');

var {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableHighlight
} = React;

var Login = React.createClass({
    render () {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.back} onPress={this.props.back}>
                        返回
                    </Text>

                    <Text style={styles.title}>
                        登录
                    </Text>
                    
                    <Text style={styles.signup}>
                        注册
                    </Text>
                </View>
                <View style={styles.inputWrapper}>
                    <View style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#ededed',
                        borderBottomStyle: 'solid'
                    }}> 
                        <TextInput style={[styles.input]} placeholder="手机/邮箱/用户名"/>
                    </View>
                    <TextInput style={styles.input} placeholder="密码"/>
                </View>
                
                <TouchableHighlight style={styles.loginButton}>
                    <Text style={{
                        fontSize: 16,
                        color: '#fff'
                    }}>登录</Text>
                </TouchableHighlight>
                <View style={{
                    paddingLeft: 12,
                    paddingRight: 12,
                    flexDirection: 'row',
                    marginTop: 22,
                }}>
                    <Text style={[styles.link, {
                    }]}>
                        找回密码
                    </Text>
                    <Text style={[styles.link, {
                        flex: 1,
                        textAlign: 'right'
                    }]}>
                        手机号快捷登录
                    </Text>
                </View>
            </View>
        );
    }
});


var styles = StyleSheet.create({
    header: {
        paddingTop: 15,
        backgroundColor: '#fafafa',
        borderBottomColor: '#ababab',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60
    },
    title: {
        flex: 1,
        textAlign: 'center',
        color: '#333333',
        fontSize: 16,
    },
    back: {
        width: 40,
        textAlign: 'center',
        color: '#32b9aa',
    },
    signup: {
        width: 50,
        textAlign: 'center',
        color: '#32b9aa',
    },
    input: {
        height: 45
    },
    inputWrapper: {
        marginTop: 10,
        height: 91,
        borderColor: '#d8d8d8',
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    loginButton: {
        marginLeft: 12,
        marginRight: 12,
        height: 40,
        backgroundColor: "#32b9aa",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    link: {
        color: '#32b9aa'
    }
});

module.exports = Login;