import React, {Component} from 'react';
import styled from 'styled-components/native';
import FlashCard from '../components/FlashCards/FlashCard';
import DefaultButton from '../components/Buttons/DefaultButton';

import Lesson1Data from '../response/Lesson1.json';

type Props = {};

const FlashCardsWrapper = styled.View`
    
`

export default class FlashCards extends Component<Props> {
    constructor(props) {
        super(props);

        this.handlePressNextButton = this.handlePressNextButton.bind(this);

        const allIds = Lesson1Data['allIds'];

        this.state = {
            allIds: allIds,
            cardIdx: 0
        }
        
    }

    render() {
        const cardData = {
                translations: Lesson1Data.byId[this.state.allIds[this.state.cardIdx]],
                activeId: this.state.allIds[this.state.cardIdx]
            },
            nextCardButtonData = {
                title: '->',
                handlePressButton: this.handlePressNextButton
            }

        return (
            <FlashCardsWrapper>
                <FlashCard {...cardData}/>
                <DefaultButton {...nextCardButtonData}/>
            </FlashCardsWrapper>
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
