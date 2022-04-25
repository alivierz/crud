import { useEffect, useState } from 'react';
import './App.css';
import apiProf from './Services/apiReq';//*import de la api del profesor
import apiPost from './Services/apiPost'; //* import de la api para agregar un nuevo usuario
import apiDel from './Services/deleteUser';//*import de la api para actualizar
import apiUpdate from './Services/updateUser'; //* import de actualizacion 
import UsersContainer from './component/UserContainer/users'; //? Componente de Usuarios que sirve de contenedor
import Form from './component/SearchBox/Search'; //? importe del buscador 
import FormUpdate from './component/SearchBox/UpdateSerach';



function App() {
  const [ users , setUsers ] = useState([]) //* Estado donde guardo la lista de usuarios
  const [ user , setNewU ] = useState({}) //? Estado para generar un nuevo usuario
  const [ deleteUser, setDeleteUser ] = useState(0)//! Estado para borrar un usuario por ID

  //? Estados de actualizacion
  const [ up, setUp ] = useState(false) //! estado para mostrar valores
  const [  editobj , setEditObj ] = useState({}) //* objeto editado
  const [ idUd , setIdUpdate ] = useState(0)
  const [ finalUpdateObj , setfinalUpdateObj] = useState({})

  useEffect(() =>{ //*Efecto de la primera peticion de la api

    apiProf().then((res) => { //* estado de peticion de api general
      setUsers(res.data)
    }).catch((error) =>{
      console.error(error)
    })
    if(Object.keys(user).length !== 0){//*condicion para resolver la request inicial
      //?agregar nuevo usuario
      apiPost(user).then((res) =>{
        console.log(res)
        setNewU({})
      })
    }
    //!Eliminar un usuario
    if(deleteUser !== 0){ //* condicion para resolver la request inicial
      apiDel(deleteUser).then((res) =>{
        console.log(res)
        setDeleteUser(0)
        })
    }
    if(idUd !== 0){//* generdador de acrtualizacones 
      apiUpdate(idUd, finalUpdateObj).then((res) =>{
        console.log(res)
        setIdUpdate(0)
        setfinalUpdateObj({})
      })
    }
  }, [user, deleteUser, idUd, finalUpdateObj])

  
  //? funcion de el formulario para agregar usuario
  const funcCreate = (r) =>{
    console.log(r)
    setNewU(r)
  }
  //! funcion del formulario para eliminar usuario
  const funcDelete = (e) =>{
    setDeleteUser(e)
  }

  //* funcion para actualizar un usuario
  const updateFunc = (obj, id) => {
    setIdUpdate(id)
    setfinalUpdateObj(obj)
  }

  const listUsers = users.map((u) => <UsersContainer key={u.id} useresArr={u} del={funcDelete} update={setUp} finalUpdate={setEditObj}/>) 
  //! Listado de personas en la api
  
  return (
    <div className="App">
      <div className='form-container'>
        {up ? <FormUpdate cancel={setUp} update={editobj} download={updateFunc}/> : <Form func={funcCreate} />}
      </div>
      <div className='users-container'>
        {listUsers}
      </div>
      
    </div>
  );
}

export default App;
