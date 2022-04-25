import axios from "axios"

const apiProf = async () =>{
    const req = await axios.get('https://users-crud1.herokuapp.com/users/')
    return req
}
export default apiProf