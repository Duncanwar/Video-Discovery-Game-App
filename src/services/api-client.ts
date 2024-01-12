import axios from "axios"

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'bc641eaeeee5436388320e50e0f8ea2d'
    }
})

