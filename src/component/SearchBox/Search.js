import { useForm } from "react-hook-form";
import './form.css'
const Form = ({func}) => {

  const defaultValues = {first_name: '',last_name:'', email: '', password: '', birthday: ''}
  //* useForm 
  const { register, handleSubmit , reset} = useForm();
  const onSubmit = (data) => {
    func(data)
    reset(defaultValues)
  };
  
  //!Formulario principal
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2  className="title-form">LOGIN</h2>
        <div className="title-container">
          <input placeholder="Frist name" {...register("first_name")} className='first-name' />
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
    );
  }
export default Form;