import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

type Props = {};

export default class DefaultButton extends Component<Props> {
    constructor(props) {
        super(props);

        this.handlePressButton = this.handlePressButton.bind(this);
        
        this.state = {

        };
    }

    render() {
        const buttonData = {
                onPress: this.handlePressButton,
                title: this.props.title
            }

        return (
            <Button {...buttonData}/>
        );
    }

    handlePressButton(e) {
        e.preventDefault();

        this.props.handlePressButton(this.props);   
    }
}

const styles = StyleSheet.create({
  
});
