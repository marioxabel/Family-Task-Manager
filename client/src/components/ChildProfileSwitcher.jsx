import React from 'react';
import { Dropdown } from 'react-bootstrap';

const ChildProfileSwitcher = ({ selectedChild, setSelectedChild, childrens }) => {
    const children = [ /* Aquí irán los datos de tus hijos */];

    return (
        <Dropdown>
            <h3>Select Child</h3>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {selectedChild ? selectedChild.first_name : 'Select Child'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {childrens.map((child) => (
                    <Dropdown.Item key={child.id} onClick={() => setSelectedChild(child)}>
                        {child.first_name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ChildProfileSwitcher;
