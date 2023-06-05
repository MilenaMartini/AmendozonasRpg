const API_BASE = 'https://amendozonas.vercel.app/'

const basicFetchGet = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json;
}

const basicFetchPost = async (endpoint, requestOptions) => {
    const req = await fetch(`${API_BASE}${endpoint}`, requestOptions)
    const json = await req.json();
    return json;
}

//#region [Usuários]

export default {
    GetById: async(id) => {
        return await basicFetchGet(`users/find/${id}`)
    },
    Login: async(requestOptions) => {
        return await basicFetchPost('users/login', requestOptions)
    }
}

//#endregion


//#region [Player]

//#endregion


//#region [Character]

//#endregion
