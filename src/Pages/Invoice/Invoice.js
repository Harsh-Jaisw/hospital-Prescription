import React from "react";
import hospital from "../../Assets/hospital.png";
import { useRecoilValue } from "recoil";
import Table from "react-bootstrap/Table";
import style from "./Invoice.module.css";
import { InvoiceAtom } from "../../recoilatom/recoilatom";
import "bootstrap/dist/css/bootstrap.min.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Email from "./email";
function Invoice() {
  const invoice = useRecoilValue(InvoiceAtom);
  function ConvertPdf() {
    const doc = new jsPDF();
    let img = new Image();
    img.src = hospital;
    
    // var doc = new jsPDF('p', 'mm', 'a3');  // optional parameters
    doc.addImage(img, 'JPEG', 35, 50)
    doc.text("Global Hospital",80,10)
    doc.text(`Patient Name:- ${invoice.obj?.docName}`, 110, 20);
    doc.text(`Doctor Name:- ${invoice.obj?.doctorName}`, 20, 20);
    doc.text(`Disease Name:- ${invoice.obj?.diseName}`, 20, 30);
    
    autoTable(doc, {
      // theme: "grid",
      margin: { top: 40 },
      columns: [
        { header: "id", dataKey: "id" },
        { header: "Medicine Name", dataKey: "medName" },
        { header: "Days", dataKey: "days" },
        { header: "Time", dataKey: "schedule" },
      ],
      body: invoice.inp,
    });
    doc.save("table.pdf");
  }
  return (
    <div>
      <div className={style.detail}>
      <div className={style.name}>
          <p>Doctor Name:-</p>
          {invoice.obj?.doctorName}
        </div>
        <div className={style.name}>
          <p>Patient Name:-</p>
          {invoice.obj?.docName}
        </div>
        <div className={style.name}>
          <p>Disease Name:-</p>
          {invoice.obj?.diseName}
        </div>

      </div>
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Medicine Name</th>
            <th>Days</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {invoice.inp?.map((x) => {
            return (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.medName}</td>
                <td>{x.days}</td>
                <td>{x.schedule}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <button onClick={ConvertPdf}>Print Pdf</button>
      <Email button={"Send Email"}/>
    </div>
  );
}

export default Invoice;
