/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/FormUsers.css"

const FormUsers = ({createNewUser,
  updateInfo,updateUserById,setUpdateInfo,setformClose}) => {
  const {handleSubmit,register,reset}=useForm()

  useEffect(() => {
    reset(updateInfo)
  }, [updateInfo])
  

  const submit =(data)=>{
    if(updateInfo){
      updateUserById("/users",updateInfo.id,data)
      setUpdateInfo()
    }else{
      createNewUser("/users",data)
    }
    reset({
        email:"",
        password:"",
        first_name:"",
        last_name:"",
        birthday:""

    })
    setformClose(true)
  }

  const handleX=()=>{
    setUpdateInfo()
    setformClose(true)
    reset({
      email:"",
      password:"",
      first_name:"",
      last_name:"",
      birthday:""

  })
  }
    return (
    <form  className="form"onSubmit={handleSubmit(submit)}>
      <h2 className="form_title">{updateInfo?"Edit User":"Create User"}</h2>
      <div className="form_x" onClick={handleX}>x</div>
      <div className="form_section">
        <label  className="form_label" htmlFor="email">Email</label>
        <input className="from_input" {...register("email")} id="email" type="text" />
      </div>
      <div className="form_section">
        <label  className="form_label" htmlFor="password">Password</label>
        <input className="from_input" {...register("password")} id="password" type="password" />
      </div>
      <div className="form_section">
        <label  className="form_label" htmlFor="first_name">First Name</label>
        <input className="from_input" {...register("first_name")} id="first_name" type="text" />
      </div>
      <div className="form_section">
        <label  className="form_label" htmlFor="last_name">Last Name</label>
        <input className="from_input" {...register("last_name")} id="last_name" type="text" />
      </div>
      <div className="form_section">
        <label  className="form_label" htmlFor="birthday">Birthday</label>
        <input className="from_input" {...register("birthday")} id="birthday" type="date" />
      </div>
      <button className="form_btn">{updateInfo ? "Save" : "Create"}</button>
    </form>
  );
};

export default FormUsers;
