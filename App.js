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

        this.state = {
            test: 'test',
            activeCard: '0001',
            cards: {
                "0001": {
                    "english": "I",
                    "romaji": "Watashi",
                    "hiragana": "わたし"
                },
                "0002": {
                    "english": "You",
                    "romaji": "Anata",
                    "hiragana": "あなた"
                }
            }
            
        }
    }

    render() {
        const cardData = {
                translations: {
                    "English": "You",
                    "Romaji": "Anata",
                    "Hiragana": "あなた"
                }
            }
            
        return (
            <View style={styles.container}>
                {/* <Text style={styles.welcome}>Hello, World!</Text>
                <Text style={styles.welcome}>1) react-native start</Text>
                <Text style={styles.welcome}>2) react-native run-android</Text>
                <Text style={styles.welcome}>2) react-native log-android</Text>
                <Text style={styles.instructions}>{instructions}</Text> */}

                <FlashCard {...cardData}/>
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
