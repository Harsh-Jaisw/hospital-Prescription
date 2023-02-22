import React, { useEffect, useState } from "react";
import Buttons from "../../Atoms/Buttons";
import Inputs from "../../Atoms/Input";
import style from "./Registration.module.css";
import {Link, useNavigate} from "react-router-dom"
import { isValidEmail,isValidName, isValidPassword } from "../../Helper/helper";
import { LoginAtom,indexAtom } from "../../recoilatom/recoilatom";
import {  useSetRecoilState } from "recoil";
function Registration() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const[emmessage,setEmMessage]=useState("")
  const[pwmessage,setPwMessage]=useState("")
  const[message,setMessage]=useState("")
  const [arr,setArr]=useState([])
  const tonav=useNavigate()
  const setLogin=useSetRecoilState(LoginAtom)
  const setIndices=useSetRecoilState(indexAtom)
  useEffect(()=>{
    if(localStorage.getItem("user")){
      let x=JSON.parse(localStorage.getItem("user"))
      setArr(x)
    }
  },[])
  function HandleName(e) {
    setName(e.target.value);
  }
  function HandlePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit() {
    const obj={
      name,email,password
    }
    if (!isValidName(name)){
      setMessage("Enter valid Name")
      return
    }
    if(!isValidEmail(email)){
      setEmMessage("Enter Valid Email")
      return
    }
    if(!isValidPassword(password)){
      setPwMessage("Enter Valid Password")
      return
    }
    arr.push(obj)
    setArr([...arr])
     localStorage.setItem("user",JSON.stringify(arr))
     setIndices(arr.length-1)
     setLogin(true)
     tonav("/")
  }
  
  function HandleEmail(e) {
    setEmail(e.target.value);
  }
  return (
    <>
      <div className={style.mainparent}>
        <div className={style.parent}>
          <p style={{ fontWeight: "650" }}>Registration Page</p>
          <Inputs
            type={"text"}
            value={name}
            onChange={HandleName}
            placeholder={"Enter Name"}
            className={style.inputs}
          />
          {!isValidName(name) ? (
                <span style={{ color: "red", height: ".3rem" }}>
                  {message}
                </span>
              ) : (
                <span></span>
              )}
          <Inputs
            type={"email"}
            placeholder={"Email"}
            className={style.inputs}
            value={email}
            onChange={HandleEmail}
          />
           {!isValidEmail(email) ? (
                <span style={{ color: "red", height: ".3rem" }}>
                  {emmessage}
                </span>
              ) : (
                <span></span>
              )}
          <Inputs
            type={"password"}
            placeholder={"Password"}
            className={style.inputs}
            value={password}
            onChange={HandlePassword}
          />
           {!isValidPassword(password) ? (
            <span style={{ color: "red", height: ".3rem" }}>{pwmessage}</span>
          ) : (
            <span></span>
          )}

          <Buttons
            onClick={handleSubmit}
            text={"Submit"}
            className={style.inputsubmit}
          />
          <p>Already Have an Account ? <Link to="/signin">Login</Link></p>
        </div>
      </div>
    </>
  );
}

export default Registration;
