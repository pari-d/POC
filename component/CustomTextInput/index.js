import React from 'react';
import { View, Text } from 'react-native';
import { textStyle } from '../../resource/style';

import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomTextInput = (props) => {
    return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey', width: "80%", alignItems: "center", marginVertical: 10, padding: 10, flexDirection: "row" }}>
            <Icon name={props.icon} size={20} />
            <Text style={[textStyle, { marginLeft: 10 }]}>{props.value}</Text>
        </View>
    )
}

export default CustomTextInput;