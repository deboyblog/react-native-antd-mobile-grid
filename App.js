/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Grid} from 'antd-mobile'

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Grid
                    itemStyle={{
                        height: 44,
                        width: 80
                    }}
                    columnNum={4}
                    data={[
                        0, 1, 2, 3, 4, 5, 6, 7, 8
                    ]}
                    renderItem={(itemData) => {
                        return (
                            <Text>
                                {itemData}
                            </Text>
                        )
                    }}
                />
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
