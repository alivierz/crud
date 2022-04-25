import axios from "axios"

const apiDel = async (id) =>{
    const req = await axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
    return req
}
export default apiDel