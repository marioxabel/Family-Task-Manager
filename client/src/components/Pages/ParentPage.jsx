import { useEffect, useState } from 'react';
import ChildTaskList from '../ChildTaskList';
import AddTaskModal from '../AddTaskModal';
import ChildProfileSwitcher from '../ChildProfileSwitcher';
import CopyKeyComponent from '../CopyKeyComponent';
import AuthService from '../../utils/utils'
import { retrieveParentByEmail, retrieveChildrenByParentId } from '../../api/API';

const ParentPage = () => {
  const [parentData, setParentData] = useState({})
  // const [childrenData, setChildrenData]= useState({})
  const [selectedChild, setSelectedChild] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [children, setChildren] = useState([ /* Lista de hijos del backend */ ]);
  
  useEffect(() => {
    // Get profile info (email)
    const profile = AuthService.getProfile()
    // Use email to get parent info and save it in parentData
    const getParentInfo = async() => {
      const parentInfo = await retrieveParentByEmail(profile.email)
      const childrenInfo = await retrieveChildrenByParentId(parentInfo.id);
      console.log(childrenInfo);
      setChildren (childrenInfo)
      setSelectedChild(childrenInfo[0])
      setParentData(parentInfo)
      console.log(parentInfo);      
     }
     getParentInfo()
  },[])

  // useEffect(() => {
  //   if (parentData) {
  //     const getChildrenInfo = async () => {
  //       const childrenInfo = await retrieveChildrenByParentId(parentData.id);
  //       setChildrenData(childrenInfo);
  //       console.log(childrenInfo);
  //     };
      
  //     getChildrenInfo();
  //   }
  // }, [parentData]); // Ejecuta cuando `parentData` cambia


  // Esta es la key del padre que viene del backend cuando se loguea
  const parentKey = parentData.parent_key;  // Ejemplo, debes obtener esto desde el backend

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
        <ChildProfileSwitcher selectedChild={selectedChild} setSelectedChild={setSelectedChild} childrens={children} />
      </header>

      {/* Componente para mostrar y copiar la key */}
      <CopyKeyComponent keyNumber={parentKey} />

      {/* Lista de tareas del hijo seleccionado */}
      <div className="task-list mb-4">
        <h3>{selectedChild ? `${selectedChild.first_name}'s Tasks` : 'Select a Child'}</h3>
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
