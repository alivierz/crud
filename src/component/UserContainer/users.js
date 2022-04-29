import './useres.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faEdit } from '@fortawesome/free-solid-svg-icons'

const UsersContainer = ({useresArr, del, update, finalUpdate}) =>{
    //*Funcion de actualizacion
    const updateFunc = (e) =>{
        const obj ={
            id: e.id,
            objU: {
                birthday: e.birthday,
                email: e.email,
                first_name: e.first_name,
                last_name: e.last_name,
                password: e.password
            }
        }
        finalUpdate(obj) //! objeto para actualizar
        update(true)
        
    }
    //? renderizado de usuarios
    return(
        <div className='profile-container'>
            <h2 className='name'>{useresArr.first_name} {useresArr.last_name}</h2>
            <ul className='list'>
                <li>Birthday: {useresArr.birthday}</li>
                <li>Email: {useresArr.email}</li>
                <li>Password: {useresArr.password}</li>
            </ul>
            <div className='button'>
               <FontAwesomeIcon icon={faTrash} onClick={() => del(useresArr.id)}  className='delete'/>
                <FontAwesomeIcon icon={faEdit} onClick={() => updateFunc(useresArr)} className='update'/> 
            </div>
        </div>
        
    )
}
export default UsersContainer;