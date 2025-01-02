const API = 'http://192.168.1.101:3000/api/EFC'

export const getEFC_clients = async () => {    
    const res = await fetch(API)
    return  await res.json()

}