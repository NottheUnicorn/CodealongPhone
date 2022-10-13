let token = '35ca59fb93ec54d1835b08df8017211d254e30e3fad4e186';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://completeflaskbeer.herokuapp.com/api/profile`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

create: async(data: any = {}) => {
    const response = await fetch(`https://my-phonebook-ct-main.herokuapp.com/api/contacts`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    if(!response.ok){
        throw new Error('Failed to Create new data on server')
    }

    return await response.json()
    },

update: async (id:string, data:any = {}) => {
    const response = await fetch(`https://my-phonebook-ct-main.herokuapp.com/api/contacts/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
},

delete: async(id:string) => {
    const response = await fetch(`https://my-phonebook-ct-main.herokuapp.com/api/contacts/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${token}`
        }
    })
}
}