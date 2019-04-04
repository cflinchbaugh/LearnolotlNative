/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FlashCard from './components/FlashCards/FlashCard';
import Lesson1Data from './response/Lesson1.json';
import DefaultButton from './components/Buttons/DefaultButton';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
    constructor(props) {
        super(props);

        this.handlePressNextButton = this.handlePressNextButton.bind(this);

        const allIds = Lesson1Data['allIds'];

        this.state = {
            test: 'test',
            activeCard: '0001',
            allIds: allIds,
            activeId: allIds[0],
            cardIdx: 0
        }
        
    }

    render() {
        const cardData = {
                translations: Lesson1Data.byId[this.state.allIds[this.state.cardIdx]]
            },
            nextCardButtonData = {
                title: '->',
                handlePressButton: this.handlePressNextButton
            }

        return (
            <View style={styles.container}>
                {/* <Text style={styles.welcome}>Hello, World!</Text>
                <Text style={styles.welcome}>1) react-native start (Looks like not necessary)</Text>
                <Text style={styles.welcome}>2) react-native run-android</Text>
                <Text style={styles.welcome}>2) react-native log-android</Text>
                <Text style={styles.instructions}>{instructions}</Text> 
                https://stackoverflow.com/questions/53279182/vscode-imports-import-console-requireconsole-automatically
                */}

                <FlashCard {...cardData}/>
                <DefaultButton {...nextCardButtonData}/>
            </View>
        );
    }

    handlePressNextButton() {
        const incrementedValue = this.state.cardIdx + 1,
            newCardIdx = incrementedValue < this.state.allIds.length ? incrementedValue : 0;
        
        this.setState({
            cardIdx: newCardIdx
        });
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
