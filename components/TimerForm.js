
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import TimerButton from './TimerButton';



const TimerForm = ({ id, title, project, onFormSubmit, onFormClose }) => {

    const submitText = id ? 'Update' : 'Create';

    const initFormState = {
        title: id ? title : '',
        project: id ? project : ''
    };

    const [formState, setFormState] = useState(initFormState);

    const handleTitleChange = title => {
        setFormState({ ...formState, title });
    }

    const handleProjectChange = project => {
        setFormState({ ...formState, project });
    }

    const handleSubmit = () => {
        if (!formState.title || !formState.project)
            return;
        onFormSubmit({
            id, title: formState.title, project: formState.project
        });
    }

    return (
        <View style={styles.formContainer}>

            <View style={styles.attributeContainer}>
                <Text styles={styles.textInputTitle}>Title</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        value={formState.title}
                        onChangeText={handleTitleChange}
                    />
                </View>
            </View>

            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Project</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        value={formState.project}
                        onChangeText={handleProjectChange}
                    />
                </View>
            </View>

            <View style={styles.buttonGroup}>
                <TimerButton small color="#21BA45" title={submitText} onPress={handleSubmit} />
                <TimerButton small color="#DB2828" title="Cancel" onPress={onFormClose} />
            </View>

        </View>

    )
}

export default TimerForm;


const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'white',
        borderColor: '#D6D7DA',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    attributeContainer: {
        marginVertical: 8,
    },
    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5,
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
    },
    textInputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});