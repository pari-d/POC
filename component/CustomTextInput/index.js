import React from 'react';
import { View, Text } from 'react-native';
import { textStyle } from '../../resource/style';

const CustomTextInput = (props) => {
    return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey', width: "80%", alignItems: "center", marginVertical: 10, padding: 10 }}>
            <Text style={textStyle}>{props.value}</Text>
        </View>
    )
}

export default CustomTextInput;