//Retrieve all chores from the API
const retrieveChores = async () => {
    try {
        const response = await fetch('/api/chores', {
            headers: {
                'Content-Type':'application/json',
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid API response, check network tab!');
        }

        return data;
    } catch (err) {
        console.log('Error from chore retieval:', err);
        return [];
    }
};

//Retrieve a single chore by ID from the API
const retrieveChore = async (id) => {
    try {
        const response = await fetch (`/api/chores/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error('Invalid API response, check network tab!');
        }

        return data;
    } catch (err) {
        console.log('Error from chore retieval:', err);
        return {};
    }
};

//Add a new chore via POST request to the API
async function addChore(body) {
    try {
        const response = await fetch(
            '/api/chores/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
        );

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
const updateChore = async (id,body) => {
    try {
        const response =await fetch(
            `/api/chores/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }
        );

        const data= await response.json();

        if(!response.ok) {
            throw new Error ('Invalid API response, check network tab!');
        }
        return data;
    } catch (err) {
        console.log('Error from chore updating: ', err);
        return Promise.reject('Could not update chore');
    }
};

//Delete a chore by ID via DELETE request to the API
const deleteChore = async (id) => {
    try {
        const response = await fetch(
            `/api/chores/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );

        if (!response.ok) {
            throw new Error ('Invalid API response, check network tab!');
        }
        return;
    } catch (err) {
        console.log('Error from chore deleting: ', err);
        return Promise.reject('Could not delete chore');
    }
};

export {retrieveChores, retrieveChore, addChore, updateChore, deleteChore};


