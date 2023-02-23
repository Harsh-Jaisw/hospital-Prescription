import { useEffect, useState } from "react";
import { InvoiceAtom, LoginAtom } from "../../recoilatom/recoilatom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { nanoid } from "nanoid";
import Inputs from "../../Atoms/Input";
import Buttons from "../../Atoms/Buttons";
import { useNavigate } from "react-router-dom";
import { indexAtom } from "../../recoilatom/recoilatom";
import style from "./Home.module.css";
export default function Home() {
  const [docName, setDocName] = useState("");
  const [diseName, setDiseName] = useState("");
  const [detail, setDetail] = useState({});
  const setInvoice = useSetRecoilState(InvoiceAtom);
  const isLoggedIn = useRecoilValue(LoginAtom);
  const [inp, setInp] = useState([
    { id: nanoid(3), medName: "", days: "", schedule: "" },
  ]);
  const options = [
    "Morning",
    "Evening",
    "Night",
    "2 times a day",
    "3 times a day",
  ];
  const tonav = useNavigate();
  const indices = useRecoilValue(indexAtom);
  let x = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!isLoggedIn) {
      tonav("/signin");
    }
  }, []);
  function handleClick() {
    setInp([...inp, { id: nanoid(3), medName: "", days: "", schedule: "" }]);
  }
  function HandleInput(e, i) {
    const { name, value } = e.target;
    const arr = [...inp];
    arr[i][name] = value;
    setInp(arr);
  }
  function HandleRemove(id) {
    inp.splice(id, 1);
    setInp([...inp]);
  }
  function Handledetail() {
    const obj = {
      prescriptionId: nanoid(5),
      doctorName: x[indices]?.name,
      docName,
      diseName,
    };
    setDetail({ obj, inp });
    setInvoice({ obj, inp });
    tonav("/invoice");
  }
  return (

    <div style={{display:"flex",boxSizing:"border-box"}}>
     
    <div className={style.Main}>
      
    <h1 style={{position:"fixed",fontFamily:"sans-serif"}}>Prescription Form</h1>
     <div className={style.inputs}>
      
      <Inputs
        value={docName}
        onChange={(e) => setDocName(e.target.value)}
        placeholder="  Patient name"
        className={style.InputField}
      />
      <Inputs
        value={diseName}
        placeholder="  Disease name"
        onChange={(e) => setDiseName(e.target.value)}
        className={style.InputField}
      />
      <Buttons onClick={handleClick} className={style.add} text={"Add Medicine"} />
      
      </div>
      {inp.map((x, i) => {
        return (
          <div key={x.id} className={style.parent}>
            <Inputs
              value={x.name}
              name={"medName"}
              placeholder="  Medicine name"
              className={style.InputField}
              onChange={(e) => HandleInput(e, i)}
            />
            <Inputs
              value={x.email}
              className={style.InputField}
              name={"days"}
              type={"number"}
              placeholder="  No. of days"
              onChange={(e) => HandleInput(e, i)}
            />

            <select
              name="schedule"
              className={style.selects}
              onChange={(e) => HandleInput(e, i)}
            >
              <option selected ="  Schedule">Schedule</option>
              {options.map((x, i) => {
                return (
                  <option key={i} value={x}>
                    {x}
                  </option>
                );
              })}
            </select>
            <Buttons onClick={() => HandleRemove(i)} className={style.RemBtn} text={"Remove"} />
          </div>
          
        );
      })}
      <Buttons onClick={Handledetail} className={style.submitBtn} text={"Submit"} />
    </div>
    <div className={style.image}></div>
   </div>
  );
}
