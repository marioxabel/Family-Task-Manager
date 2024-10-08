import { useEffect, useState } from 'react';
import AuthService from '../../utils/utils';
import { retrieveChildByIdByEmail, retrieveChoresbyChildrenId, updateChore, retrieveChore } from '../../api/API'; // Añade esta función

export default function ChildPage() {
  const [childData, setChildData] = useState({});
  const [childChores, setChildChores] = useState([]);

  useEffect(() => {
    const profile = AuthService.getProfile();

    const getChildInfo = async () => {
      try {
        const childInfo = await retrieveChildByIdByEmail(profile.email);
        setChildData(childInfo);

        if (childInfo?.id) {
          const chores = await retrieveChoresbyChildrenId(childInfo.id);
          setChildChores(chores);
        }
      } catch (error) {
        console.error('Error fetching child info or chores:', error);
      }
    };

    getChildInfo();
  }, []);

  // Función para actualizar el estado de la tarea
  const handleChoreStatusChange = async (choreId, currentStatus) => {
    try {

      // const choreId = await updateChore(choreId);
      const newStatus = currentStatus === 'completed' ? 'pending' : 'completed'; // Alternar entre "completed" y "pending"
      
      // Actualizar el estado en la base de datos
      await updateChore(choreId, newStatus);
      

      // Actualizar el estado local de las chores
      setChildChores(prevChores =>
        prevChores.map(chore =>
          chore.id === choreId ? { ...chore, status: newStatus } : chore
        )
      );
    } catch (error) {
      console.error('Error updating chore status:', error);
    }
  };

  return (
    <div className='container'>
      <h1 style={{ paddingTop: '20px', paddingBottom: '20px', paddingLeft: '10px' }}>
        Hi {childData?.first_name ? `${childData.first_name}! these are your chores for today:` : 'Loading...'}
      </h1>

      <table style={{ alignContent: 'center'}}>
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
              <td style={{ textAlign: 'center',  borderTopRightRadius: '10px', 
                borderBottomRightRadius: '10px',  }}>
                {/* Checkbox interactivo */}
                <input
                  type="checkbox"
                  checked={chore.status === 'completed'}
                  onChange={() => handleChoreStatusChange(chore.id, chore.status)} // Actualiza el estado al hacer clic
                  style={{ width: '30px', height: '30px', backgroundColor: 'white' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}