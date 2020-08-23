import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { textStyle, buttonStyle } from '../../resource/style';

const Button = (props) => {
    return (
        <TouchableOpacity style={buttonStyle} onPress={() => props.handleButtonClick()}>
            <Text style={[{ textAlignVertical: "center" }, textStyle]}>{props.textValue}</Text>
        </TouchableOpacity>
    )
}

export default Button;