import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import CustomTextInput from '../../component/CustomTextInput';
import Button from '../../component/Button';

import { shadowStyle, PRIMARY_COLOUR } from '../../resource/style';

function call(number) {
    Linking.openURL(`tel:${number}`);
}

function email(id) {
    Linking.openURL(`mailto:${id}`)
}
const Details = (props) => {
    let traveller = props.selectedTraveller;
    let backGroundColor = props.selectedTraveller.gender==="Female"?'rgba(94, 165, 209,0.4)':'rgba(129, 174, 179,0.4)';
// 94, 165, 209  m:129, 174, 179
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly", backgroundColor: backGroundColor, padding: 10 }}>
            <Image source={traveller.avatar} style={{ height: 100, width: 100 }} resizeMode={"contain"} />
            <View style={[{ width: "90%", alignItems: "center", backgroundColor: "white" }, shadowStyle]}>
                <CustomTextInput value={traveller.first_name + " " + traveller.last_name} />
                <CustomTextInput value={'location'} />
                <CustomTextInput value={traveller.email} />
                <CustomTextInput value={traveller.phone_number} />
                <CustomTextInput value={'.....'} />
            </View>
            <View style={{ width: "90%", flexDirection: "row", justifyContent: "space-between" }}>
                <Button textValue={"Call"} handleButtonClick={() => call(traveller.phone_number)} />
                <Button textValue={"Email"} handleButtonClick={() => email(traveller.email)} />
            </View>
        </View>
    )
}

export default Details;