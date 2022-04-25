import axios from "axios"

const apiPost = async (newUser) =>{
    const URL = `https://users-crud1.herokuapp.com/users/`
    const req = await axios.post(URL , newUser)
    return req
}
export default apiPost