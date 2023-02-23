import React, { useEffect, useState } from "react";
import { InvoiceAtom } from "../../recoilatom/recoilatom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Table from "react-bootstrap/esm/Table";
import { useNavigate } from "react-router-dom";

function Prescription() {
  const prescription = useRecoilValue(InvoiceAtom);
  const setInvoice = useSetRecoilState(InvoiceAtom);
  const [arr, setArr] = useState(JSON.parse(localStorage.getItem("prescription") || "[]") || []);
  const tonav = useNavigate();
  useEffect(() => {
    setArr([...arr, prescription]);
    
  }, [prescription]);
  ;
 useEffect(()=>{
  
  localStorage.setItem("prescription", JSON.stringify(arr))
 },[arr])
  function HandleRow(id){
 let x=arr.find((item,i)=>i===id)
 let y={...x}
 setInvoice(y)
 tonav("/invoice") 
 
  }
  return (
    <div>
      {console.log(arr)}

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>prescriptionId</th>
            <th>Doctor Name</th>
            <th>Patient Name</th>
          </tr>
        </thead>
        <tbody>
          {arr?.map((x, i) => {
            return (
              <tr key={i} onClick={()=>HandleRow(i)}>
                <td>{x.obj?.prescriptionId}</td>
                <td>{x.obj?.doctorName}</td>
                <td>{x.obj?.docName}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Prescription;
