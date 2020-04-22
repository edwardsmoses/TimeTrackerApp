import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import TimerForm from './TimerForm';
import TimerButton from './TimerButton';

const ToggleableTimerForm = ({ onFormSubmit }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleFormOpen = () => {
        setIsOpen(true);
    }

    const handleFormClose = () => {
        setIsOpen(false);
    }

    const handleFormSubmit = timer => {
        onFormSubmit(timer);
        setIsOpen(false);
    }


    return (
        <View style={[styles.container, !isOpen && styles.buttonPadding]}>
            {isOpen ? <TimerForm onFormClose={handleFormClose} onFormSubmit={handleFormSubmit} /> : <TimerButton title="+" color="black" onPress={handleFormOpen} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    buttonPadding: {
        paddingHorizontal: 15,
    },
});




export default ToggleableTimerForm;


