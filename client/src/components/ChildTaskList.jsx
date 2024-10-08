// ChildTaskList.jsx
import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { retrieveChoresbyChildrenId, } from '../../src/api/API';


const ChildTaskList = ({ child }) => {
    const tasks = child.tasks || [];


    const [childChores, setChildChores] = useState([]);

    useEffect(() => {
        console.log(child);
        const getChildChores = async () => {
            try {

                const chores = await retrieveChoresbyChildrenId(child.id);
                setChildChores(chores);
                console.log(chores)
            } catch (error) {
                console.error('Error fetching child info or chores:', error);
            }
        };
        if (child.id) {
            getChildChores();

        }
    }, [child]);

    return (
        <ListGroup className="task-list">
            <table style={{ alignContent: 'center' }}>
                <tbody>
                    {childChores.map((chore, index) => (
                        <tr key={index}>
                            <td style={{
                                width: '80%',
                                fontWeight: 'bold',
                                fontSize: '25px',
                                borderTopLeftRadius: '10px',
                                borderBottomLeftRadius: '10px',
                                borderRight: '3px solid white',
                                padding: '10px'
                            }}>
                                {chore.name}
                            </td>
                            <td style={{
                                textAlign: 'center', borderTopRightRadius: '10px',
                                borderBottomRightRadius: '10px',
                            }}>
                                <input
                                    type="checkbox"
                                    checked={chore.status === 'completed'}
                                    style={{ width: '30px', height: '30px', backgroundColor: 'white' }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* {tasks.map((task) => (
                <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
                    {task.name}
                    <input type="checkbox" checked={task.completed} readOnly />
                </ListGroup.Item>
            ))} */}
        </ListGroup>
    );
};

export default ChildTaskList;
