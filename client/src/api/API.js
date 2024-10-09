// Helper function to get token
const getToken = () => localStorage.getItem('id_token');


const retrieveChoresbyChildrenId = async (id) => {
    try {
        console.log('Fetching URL:', `http://localhost:3001/api/chores/child/${id}`); // Update URL here

        const response = await fetch(`http://localhost:3001/api/chores/child/${id}`, { // Corrected URL
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to retrieve chores');
        }

        return data;
    } catch (err) {
        console.error('Error retrieving chores:', err);
        return {};
    }
};
//Retrieve all chores from the API
const retrieveChores = async () => {
    try {
        const response = await fetch('/api/chores', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid API response, check network tab!');
        }

        return data;
    } catch (err) {
        console.log('Error from chore retrieval:', err);
        return [];
    }
};

//Retrieve a single chore by ID from the API
const retrieveChore = async (id) => {
    try {
        const response = await fetch(`/api/chores/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid API response, check network tab!');
        }

        return data;
    } catch (err) {
        console.log('Error from chore retrieval:', err);
        return {};
    }
};

//Add a new chore via POST request to the API
async function addChore(body) {
    console.log(body);
    
    try {
        const response = await fetch('/api/chores/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid API response, check network tab!');
        }
        return data;
    } catch (err) {
        console.log('Error from chore creation: ', err);
        return Promise.reject('Could not create chore');
    }
};

//Update an existing chore via PUT request to the API
// const updateChore = async (id, body) => {
//     try {
//         const response = await fetch(`/api/chores/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${getToken()}`,
//             },
//             body: JSON.stringify(body)
//         });

//         const data = await response.json();

//         if (!response.ok) {
//             throw new Error('Invalid API response, check network tab!');
//         }
//         return data;
//     } catch (err) {
//         console.log('Error from chore updating: ', err);
//         return Promise.reject('Could not update chore');
//     }
// };
const updateChore = async (id, status) => {
    try {

        console.log('Fetching URL:', `http://localhost:3001/api/chores/${id}`)
        const response = await fetch(`/api/chores/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ status }),
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed to update chore status');
      }
  
      return await response.json();
    } catch (error) {
        console.log(status)
        console.log(JSON.stringify(error))
      console.error('Error updating chore status:', error);
      throw error;
    }
  };





//Delete a chore by ID via DELETE request to the API
const deleteChore = async (id) => {
    try {
        const response = await fetch(`/api/chores/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            }
        });

        if (!response.ok) {
            throw new Error('Invalid API response, check network tab!');
        }
        return;
    } catch (err) {
        console.log('Error from chore deleting: ', err);
        return Promise.reject('Could not delete chore');
    }
};

// Register a new parent via POST request
const registerParent = async (parentData) => {
    try {
        const response = await fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            },
            body: JSON.stringify(parentData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to register parent');
        }

        return data;
    } catch (err) {
        console.error('Error registering parent:', err);
        return null;
    }
};

// Register a new child via POST request
const registerChild = async (childData) => {
    try {
        const response = await fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            },
            body: JSON.stringify(childData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to register child');
        }

        return data;
    } catch (err) {
        console.error('Error registering child:', err);
        return null;
    }
};

// Retrieve all parents via GET request
const retrieveParents = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/parents', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to retrieve parents');
        }

        return data;
    } catch (err) {
        console.error('Error retrieving parents:', err);
        return [];
    }
};

// Retrieve a single parent by ID via GET request
const retrieveParentById = async (id) => {
    try {

        const response = await fetch(`http://localhost:3001/api/parents/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to retrieve parent');
        }

        return data;
    } catch (err) {
        console.error('Error retrieving parent:', err);
        return {};
    }
};

// Retrieve a single parent by email via GET request
const retrieveParentByEmail = async (email) => {
    try {

        console.log('Fetching URL:', `http://localhost:3001/api/parents/email/${email}`); // Update URL here

        const response = await fetch(`http://localhost:3001/api/parents/email/${email}`, { // Update URL here
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to retrieve parent');
        }

        return data;
    } catch (err) {
        console.error('Error retrieving parent:', err);
        return {};
    }
};



// Update a parent by ID via PUT request
const updateParent = async (id, parentData) => {
    try {
        const response = await fetch(`http://localhost:3001/api/parents/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            },
            body: JSON.stringify(parentData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to update parent');
        }

        return data;
    } catch (err) {
        console.error('Error updating parent:', err);
        return null;
    }
};

// Delete a parent by ID via DELETE request
const deleteParent = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/api/parents/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete parent');
        }
        return;
    } catch (err) {
        console.error('Error deleting parent:', err);
        return null;
    }
};

// Retrieve all children of a parent via GET request
const retrieveChildrenByParentId = async (parentId) => {
    try {
        const response = await fetch(`http://localhost:3001/api/parents/${parentId}/children`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to retrieve children for parent');
        }

        return data;
    } catch (err) {
        console.error('Error retrieving children for parent:', err);
        return [];
    }
};

// Retrieve a single child by ID via GET request
const retrieveChildById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/api/children/${id}`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to retrieve child');
        }

        return data;
    } catch (err) {
        console.error('Error retrieving child:', err);
        return {};
    }
};

// Retrieve a single child by email via GET request
const retrieveChildByIdByEmail = async (email) => {
    try {

        console.log('Fetching URL:', `http://localhost:3001/api/children/email/${email}`); // Update URL here

        const response = await fetch(`http://localhost:3001/api/children/email/${email}`, { // Update URL here
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to retrieve child');
        }

        return data;
    } catch (err) {
        console.error('Error retrieving child:', err);
        return {};
    }
};


// Update a child by ID via PUT request
const updateChild = async (id, childData) => {
    try {
        const response = await fetch(`http://localhost:3001/api/children/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            },
            body: JSON.stringify(childData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to update child');
        }

        return data;
    } catch (err) {
        console.error('Error updating child:', err);
        return null;
    }
};

// Delete a child by ID via DELETE request
const deleteChild = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/api/children/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${getToken()}`,
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete child');
        }
        return;
    } catch (err) {
        console.error('Error deleting child:', err);
        return null;
    }
};

// Log in a user (parent or child) and retrieve JWT token via POST request
const loginUser = async (loginData) => {
    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Login failed');
        }

        return data; // This would typically include the JWT token
    } catch (err) {
        console.error('Error logging in:', err);
        return null;
    }
};





export {
    retrieveChores,
    retrieveChore,
    retrieveChoresbyChildrenId,
    addChore,
    updateChore,
    deleteChore,
    registerParent,
    registerChild,
    retrieveParents,
    retrieveParentById,
    retrieveParentByEmail,
    updateParent,
    deleteParent,
    retrieveChildrenByParentId,
    retrieveChildById,
    retrieveChildByIdByEmail,
    updateChild,
    deleteChild,
    loginUser
};

