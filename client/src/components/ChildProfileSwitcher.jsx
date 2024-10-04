import React from 'react';
import { Dropdown } from 'react-bootstrap';

const ChildProfileSwitcher = ({ selectedChild, setSelectedChild }) => {
    const children = [ /* Aquí irán los datos de tus hijos */];

    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {selectedChild ? selectedChild.name : 'Select Child'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {children.map((child) => (
                    <Dropdown.Item key={child.id} onClick={() => setSelectedChild(child)}>
                        {child.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ChildProfileSwitcher;
