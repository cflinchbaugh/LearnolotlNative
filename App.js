/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import styled from 'styled-components/native';

import FlashCards from './screens/FlashCards';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
    margin-right: 5px;
    margin-bottom: 20px;
    margin-left: 5px;

`

type Props = {};

export default class App extends Component<Props> {
    constructor(props) {
        super(props);

        
    }

    render() {
        return (
            <AppWrapper>
                {/* <Text style={styles.welcome}>Hello, World!</Text>
                <Text style={styles.welcome}>1) react-native start (Looks like not necessary)</Text>
                <Text style={styles.welcome}>2) react-native run-android</Text>
                <Text style={styles.welcome}>2) react-native log-android</Text>
                <Text style={styles.instructions}>{instructions}</Text> 
                https://stackoverflow.com/questions/53279182/vscode-imports-import-console-requireconsole-automatically
                */}

                <FlashCards />
               
            </AppWrapper>
        );
    }

  
}