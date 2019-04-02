import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import DefaultButton from '../Buttons/DefaultButton';

type Props = {};

export default class FlashCard extends Component<Props> {
    constructor(props) {
        super(props);

        this.handlePressButton = this.handlePressButton.bind(this);
        this.buildTranslation = this.buildTranslation.bind(this);
        
        this.state = {
            label: 'english',
            translation: ''    
        };
    }

    render() {
        const romajiButtonData = {
                id: 'romaji',
                title: 'Romaji',
                handlePressButton: this.handlePressButton,
            },
            hiraganaButtonData = {
                id: 'hiragana',
                title: 'Hiragana',
                handlePressButton: this.handlePressButton,
            },
            katakanaButtonData = {
                id: 'katakana',
                title: 'Katakana',
                handlePressButton: this.handlePressButton,
            },
            translation = this.buildTranslation()

        return (
            <View>
                <Text>Excuse me</Text>
                <Text>{translation}</Text>
                <DefaultButton {...romajiButtonData}/>
                <DefaultButton {...hiraganaButtonData}/>
                <DefaultButton {...katakanaButtonData}/>
            </View>
        );
    }

    handlePressButton(data) {
        const translationValue = data.id;

        this.setState({
            translation: translationValue
        });
    }

    buildTranslation() {
        let translation = '';

        if (this.state.translation === 'hiragana') {
            translation = 'Sumimasen';
        } else {

        }

        // console.log(this.state.translation);

        return translation;
    }
}

const styles = StyleSheet.create({
  
});
