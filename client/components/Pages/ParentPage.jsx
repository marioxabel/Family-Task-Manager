import React, { useState } from 'react';
import ChildTaskList from '../ChildTaskList';
import AddTaskModal from '../AddTaskModal';
import ChildProfileSwitcher from '../ChildProfileSwitcher';
import CopyKeyComponent from '../CopyKeyComponent';

const ParentPage = () => {
  const [selectedChild, setSelectedChild] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [children, setChildren] = useState([ /* Lista de hijos del backend */ ]);
  
  // Esta es la key del padre que viene del backend cuando se loguea
  const parentKey = '12345-ABCDE';  // Ejemplo, debes obtener esto desde el backend

  const toggleModal = () => setShowModal(!showModal);

  const handleAddTask = (newTask) => {
    setChildren((prevChildren) =>
      prevChildren.map((child) =>
        child.id === newTask.childId
          ? { ...child, tasks: [...child.tasks, newTask] }
          : child
      )
    );
  };

  return (
    <div className="container">
      {/* Encabezado */}
      <header className="d-flex justify-content-between align-items-center my-4">
        <h1>Parent Dashboard</h1>
        <ChildProfileSwitcher selectedChild={selectedChild} setSelectedChild={setSelectedChild} />
      </header>

      {/* Componente para mostrar y copiar la key */}
      <CopyKeyComponent keyNumber={parentKey} />

      {/* Lista de tareas del hijo seleccionado */}
      <div className="task-list mb-4">
        <h3>{selectedChild ? `${selectedChild.name}'s Tasks` : 'Select a Child'}</h3>
        {selectedChild ? (
          <ChildTaskList child={selectedChild} />
        ) : (
          <p>Please select a child to see their tasks.</p>
        )}
      </div>

      {/* Botón para agregar tarea */}
      <div className="text-center">
        <button className="btn btn-primary" onClick={toggleModal}>
          + Add Task
        </button>
      </div>

      {/* Modal para agregar tarea */}
      {showModal && <AddTaskModal show={showModal} toggle={toggleModal} children={children} onAddTask={handleAddTask} />}
    </div>
  );
};

export default ParentPage;
