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

        this.buildTranslationButtons = this.buildTranslationButtons.bind(this);
        this.handlePressButton = this.handlePressButton.bind(this);
        
        this.state = {
            translation: ''    
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeId !== this.props.activeId) {
            this.setState({
                translation: ''
            });
        }
    }

    render() {
        const translationButtons = this.buildTranslationButtons(),
            translation = this.state.translation;

        return (
            <View>
                <Text>{translation}</Text>

                {translationButtons}
            </View>
        );
    }

    buildTranslationButtons() {
        return Object.keys(this.props.translations).map((key, idx) => {
            const data = {
                    key: idx,
                    id: key,
                    title: key,
                    value: this.props.translations[key],
                    handlePressButton: this.handlePressButton,
                }
            
            return <DefaultButton {...data}/>
        });
    }

    handlePressButton(data) {
        const translationValue = data.value;

        this.setState({
            translation: translationValue
        });
    }
}

const styles = StyleSheet.create({
  
});
