import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import DefaultButton from '../Buttons/DefaultButton';
import styled from 'styled-components/native';

type Props = {};


const FlashCardWrapper = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`
const StyledTranslation = styled.Text`
    font-size: 50px;
    text-align: center;
`

const ButtonWrapper = styled.View`
    margin: 10px;
`

const TransationButtonsWrapper = styled.View`
    flex: 1;
    justify-content: flex-end;
`

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
            <FlashCardWrapper>
                <StyledTranslation>{translation}</StyledTranslation>
                
                <TransationButtonsWrapper>
                    {translationButtons}
                </TransationButtonsWrapper>
            </FlashCardWrapper>
        );
    }

    buildTranslationButtons() {
        return Object.keys(this.props.translations).map((key, idx) => {
            const data = {
                    id: key,
                    title: key,
                    value: this.props.translations[key],
                    handlePressButton: this.handlePressButton,
                }
            
            return (
                <ButtonWrapper key={key}>
                    <DefaultButton {...data}/>
                </ButtonWrapper>
            )
        });
    }

    handlePressButton(data) {
        const translationValue = data.value;

        this.setState({
            translation: translationValue
        });
    }
}