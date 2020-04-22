import React, { useState } from 'react';

import TimerForm from './TimerForm';
import Timer from './Timer';

const EditableTimer = ({
    id,
    title,
    project,
    elapsed,
    isRunning,
    onFormSubmit,
    onTimerDelete,
    onStartPress,
    onStopPress
}) => {

    const [editFormOpen, setEditFormOpen] = useState(false);

    const handleEditPress = () => {
        setEditFormOpen(true);
    }

    const handleFormClose = () => {
        setEditFormOpen(false);
    }

    const handleSubmit = timer => {
        onFormSubmit(timer);
        setEditFormOpen(false);
    }

    if (editFormOpen) {
        return <TimerForm id={id}
            title={title}
            project={project}
            handleEditPress={handleEditPress}
            onFormClose={handleFormClose}
            onFormSubmit={handleSubmit} />
    }
    return (
        <Timer
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
            onFormSubmit={handleSubmit}
            onFormClose={handleFormClose}
            onTimerDelete={onTimerDelete}
            onEditPress={handleEditPress}
            onStartPress={onStartPress}
            onStopPress={onStopPress}
        />
    )
}

export default EditableTimer;
