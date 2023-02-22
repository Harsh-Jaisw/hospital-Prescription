import React, { useState } from 'react'
import Buttons from '../../Atoms/Buttons';
import Inputs from '../../Atoms/Input'
import style from "./Signin.module.css"
import {Link, useNavigate} from "react-router-dom"
import { useSetRecoilState } from 'recoil';
import { indexAtom, LoginAtom } from '../../recoilatom/recoilatom';
function Signin() {
  const tonav=useNavigate()
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let x=JSON.parse(localStorage.getItem("user"))
  const setindices=useSetRecoilState(indexAtom)
  const setLogin=useSetRecoilState(LoginAtom)
  function HandleName(e) {
    setName(e.target.value);
  }
  function HandlePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(){
   let arr=x.filter((a)=> a.name===name && a.password===password)
   let arr1=x.findIndex((a)=> a.name===name && a.password===password)
   setindices(arr1)
   if(arr.length===0){
     alert("user not found ")
     return
   }
   setLogin(true)
   tonav("/")
  }
  return (
    <div className={style.mainparent}>
    <div className={style.parent}>
    <p style={{ fontWeight: "650" }}>Login Page</p>
      <Inputs
            type={"text"}
            value={name}
            onChange={HandleName}
            placeholder={"Enter Name"}
            className={style.inputs}
          />
      <Inputs
            type={"password"}
            placeholder={"Password"}
            className={style.inputs}
            value={password}
            onChange={HandlePassword}
          />
        <Buttons
            onClick={handleSubmit}
            text={"Submit"}
            className={style.inputsubmit}
          />
          <p>Don't have a account ? <Link to="/signup">SignUp</Link></p>
    </div>
    
    </div>
  )
}

export default Signin
