import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import { shadowStyle, textStyle } from '../../resource/style';
import style from './style';

const femaleAvatar = require('../../assets/female.jpg');
const maleAvatar = require('../../assets/male.jpg');

const ListRow = (props) => {

    let traveller = props.displayItem;
    traveller.avatar = traveller.gender === 'Female' ? femaleAvatar : maleAvatar;
    return (
        <View style={[style.container, shadowStyle]}>
            <TouchableOpacity onPress={() => props.handleClick(traveller)} style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={traveller.avatar} style={{ height: 40, width: 40, marginHorizontal: 20 }} resizeMode={"contain"} />
                <View>
                    <Text style={[{ fontWeight: "bold" }, textStyle]}>{traveller.first_name} {traveller.last_name}</Text>
                    <Text style={textStyle}>{traveller.phone_number}</Text>
                    <Text style={textStyle}>{traveller.email}</Text>
                </View>
            </TouchableOpacity>
        </View >
    )
}
export default ListRow;