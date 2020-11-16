import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = (selected) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 5,
                height: 5,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}; 
const Skip = ({...props}) => (
    <Button
        title='Skip'
        color='#000000'
    />
);
const Next = ({...props}) => (
    <Button
        title='Next'
        color='#000000'
        {...props}
    />
);
const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <text style={{fontSize:16}}>Done</text>
    </TouchableOpacity>
);

function OnboardingScreen({ navigation }) {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
            {
                backgroundColor: '#a6e4d0',
                image: <Image source={require('../assets/onboarding-img1.png')} />,
                title: 'Onboarding1',
                subtitle: 'A New Way To Connect With The World',
            },
            {
                backgroundColor: '#fdeb93',
                image: <Image source={require('../assets/onboarding-img2.png')} />,
                title: 'Onboarding2',
                subtitle: 'Say Your Thoughts With Similar Kind of People',
            },
            {
                backgroundColor: '#e9bcbe',
                image: <Image source={require('../assets/onboarding-img3.png')} />,
                title: 'Onboarding3',
                subtitle: 'Let The Spot Light Capture You',
            },
        ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});