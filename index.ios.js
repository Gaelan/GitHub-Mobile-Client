/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Relay from 'react-relay';

export default class githubMobileClient extends Component {
    render() {
        var container = Relay.createContainer(App,
            {
                fragments: {
                    //this property name here is added to this.props
                    username: () => Relay.QL`
                        fragment on Query {
                            viewer {
                                name,
                            },
                        }
                    `,
                },
            )
        };

        var queries = {
            name: 'githubMobileClient-Query', //can be anything, used as identifier
            params: {},
            queries: {
                viewer: () => Relay.QL`query { viewer }`,
            },
        }

        return (
            <View style={styles.container}>
            <Relay.rootContainer Component={container} route={queries}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('githubMobileClient', () => githubMobileClient);
