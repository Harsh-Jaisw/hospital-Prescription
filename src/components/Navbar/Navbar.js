import React from "react";
import style from "./Navbar.module.css";
import hospital from "../../Assets/hospital.png";
import { useNavigate } from "react-router-dom";
import { LoginAtom,indexAtom } from "../../recoilatom/recoilatom";
import { useRecoilState, useRecoilValue } from "recoil";

function Navbar() {
  const [login,SetLogin] = useRecoilState(LoginAtom);
  const indices=useRecoilValue(indexAtom)
  const tonav = useNavigate();
  let x=JSON.parse(localStorage.getItem("user"))
  function HandleLogout(){
    SetLogin(false)
    tonav("/signin")
  }
  return (
    <nav className={style.main}>
      <div onClick={()=>tonav('/')} className={style.logo}>
       <img src={hospital} style={{height:"3rem"}}/>
        Global Hospital
      </div>
      <div onClick={()=>tonav('/prescription')} className={style.logo}>Prescription</div>
      
      <div className={style.join}>
        {login ? (
          
          <span style={{display:"flex",gap:"1rem"}}>Welcome,{x[indices].name.split(" ")[0]} 
          <span onClick={HandleLogout}>Logout</span>
          </span>
        ) : (
          <>
          <span onClick={() => tonav("/signup")}>SignUp/</span>
          <span onClick={() => tonav("/signin")}>SignIn</span>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
