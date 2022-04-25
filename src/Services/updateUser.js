import axios from "axios"

const apiUpdate = async (id, obj) =>{
    const req = await axios.put(`https://users-crud1.herokuapp.com/users/${id}/`, obj)
    return req
}
export default apiUpdate