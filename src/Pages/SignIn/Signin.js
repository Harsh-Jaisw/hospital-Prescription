import React, { useState } from "react";
import Buttons from "../../Atoms/Buttons";
import Inputs from "../../Atoms/Input";
import style from "./Signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { indexAtom, LoginAtom, ThemeAtom } from "../../recoilatom/recoilatom";
import { ToastContainer, toast } from "react-toastify";
import stethoscope from "../../Assets/stethoscope.png"
import "react-toastify/dist/ReactToastify.css";
function Signin() {
  const tonav = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let x = JSON.parse(localStorage.getItem("user"));
  const setindices = useSetRecoilState(indexAtom);
  const setLogin = useSetRecoilState(LoginAtom);
  const theme = useRecoilValue(ThemeAtom);
  function HandleName(e) {
    setName(e.target.value);
  }
  function HandlePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit() {
    let arr = x.filter((a) => a.name === name && a.password === password);
    let arrindex = x.findIndex((a) => a.name === name && a.password === password);
    setindices(arrindex);
    if (arr.length === 0) {
      toast.error("User not found !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else {
      toast.success("Succesfully Login !", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLogin(true);
      tonav("/");
    }
  }
  return (
    <div className={style.mainparent}>
      <div className={style.parent} style={{
            backgroundImage: `url(${stethoscope})`,
            backgroundColor: theme ? "white" : "black",
            color: theme ? "black" : "white",
          }}>
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
        <div>
          <Buttons
            onClick={handleSubmit}
            text={"Log In"}
            className={style.inputsubmit}
          />
          <ToastContainer />
        </div>
        <p>
          Don't have a account ? <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
