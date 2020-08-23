import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { textStyle } from '../../resource/style';

const Button = (props) => {
    return (
        <TouchableOpacity style={{ height: 50, width: "45%", backgroundColor: "white", borderRadius: 5, justifyContent: "center", alignItems: "center", borderColor: 'rgb(129, 174, 179)', borderWidth: 1 }} onPress={() => props.handleButtonClick()}>
            <Text style={[{ textAlignVertical: "center" }, textStyle]}>{props.textValue}</Text>
        </TouchableOpacity>
    )
}

export default Button;