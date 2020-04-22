import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';

import uuid from 'react-native-uuid';


import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';

import { newTimer } from './utils/TimerUtils';


export default function App() {

  const initTimers = [
    {
      title: 'Mow the lawn',
      project: 'House Chores',
      id: uuid.v4(),
      elapsed: 5456099,
      isRunning: true,
    },
    {
      title: 'Work on LearnFlo',
      project: 'Office Project',
      id: uuid.v4(),
      elapsed: 1273998,
      isRunning: false,
    },
  ];


  const [Timers, setTimers] = useState(initTimers);

  const handleCreateFormSubmit = ({ title, project }) => {
    setTimers([newTimer(title, project), ...Timers]);
  };


  const handleFormSubmit = attrs => {
    setTimers(Timers.map(timer => {
      if (timer.id === attrs.id) {
        const { title, project } = attrs;
        return {
          ...timer,
          title,
          project
        };
      }
      return timer;
    }))
  };


  const handleFormDelete = (id) => {
    var newTimers = Timers.filter(m => m.id !== id);
    setTimers(newTimers);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
        {Timers.map(({ title, project, id, elapsed, isRunning }) => (
          <EditableTimer
            key={id}
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            onFormSubmit={handleFormSubmit}
            isRunning={isRunning}
            onTimerDelete={handleFormDelete}
          />
        ))}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
    fontFamily: Platform.OS === 'ios' ? "AvenirNext-Regular" : "Roboto"
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  }
});
