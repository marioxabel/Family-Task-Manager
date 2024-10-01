import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ChildTaskList = ({ child }) => {
    const tasks = child.tasks || [];

    return (
        <ListGroup>
            {tasks.map((task) => (
                <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
                    {task.name}
                    <input type="checkbox" checked={task.completed} readOnly />
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default ChildTaskList;
