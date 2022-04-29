import { useEffect } from "react";
import { useForm } from "react-hook-form";
import './form.css'

const FormUpdate = ({cancel, update, download}) => {

  
  //* useForm 
  const { register, handleSubmit, reset } = useForm();

  useEffect(() =>{
    if(update){
      const defaultValuez = {first_name: update.objU.first_name, last_name:  update.objU.last_name, email:  update.objU.email, password: update.objU.password, birthday: update.objU.birthday}
      reset(defaultValuez)
    }

  }, [reset, update])


  const onSubmit = (data) => {
    download(data , update.id)
    cancel(false)
  };
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <h2  className="title-form">UPDATE</h2>
          <div className="title-container">
            <input placeholder="Frist name" {...register("first_name")} className='first-name'/>
            <input placeholder="Last name" {...register("last_name")} className='last-name'/>
          </div>
          <div className="info-container-form">
            <input type='email' placeholder="Email" {...register("email")} className='email'/>
            <input type='password' placeholder="Password" {...register("password")} className='password'/>
            <input type='date' {...register("birthday")} className='date'/>
          </div>
          <div className="submit">
            <input type="submit" value='SAVE'/>
          </div>
          
        </form>
        <div className="cancel">
           <button onClick={() => cancel(false)}>CANCEL</button>
        </div>
      </div>
    );
}

export default FormUpdate;