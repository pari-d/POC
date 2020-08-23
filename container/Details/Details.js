import React from 'react';
import { View, Image, Linking } from 'react-native';
import CustomTextInput from '../../component/CustomTextInput';
import Button from '../../component/Button';
import style from './style';

import { shadowStyle, FEMALE_BG_COLOUR, MALE_BG_COLOUR } from '../../resource/style';

function call(number) {
    Linking.openURL(`tel:${number}`);
}

function email(id) {
    Linking.openURL(`mailto:${id}`)
}
const Details = (props) => {
    let traveller = props.selectedTraveller;
    let backGroundColor = props.selectedTraveller.gender === "Female" ? FEMALE_BG_COLOUR : MALE_BG_COLOUR;
    return (
        <View style={[{ backgroundColor: backGroundColor }, style.container]}>
            <Image source={traveller.avatar} style={style.imageDimensions} resizeMode={"contain"} />
            <View style={[style.cardContainer, shadowStyle]}>
                <CustomTextInput value={traveller.first_name + " " + traveller.last_name} icon={'person'} />
                <CustomTextInput value={'location'} icon={'location-city'} />
                <CustomTextInput value={traveller.email} icon={'email'} />
                <CustomTextInput value={traveller.phone_number} icon={'contact-phone'} />
                <CustomTextInput value={'.....'} icon={'remove-red-eye'} />
            </View>
            <View style={style.buttonView}>
                <Button textValue={"Call"} handleButtonClick={() => call(traveller.phone_number)} />
                <Button textValue={"Email"} handleButtonClick={() => email(traveller.email)} />
            </View>
        </View>
    )
}

export default Details;