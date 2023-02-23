import React from "react";
import { useRecoilValue } from "recoil";
import Table from "react-bootstrap/Table";
import style from "./Invoice.module.css";
import { indexAtom, InvoiceAtom } from "../../recoilatom/recoilatom";
import "bootstrap/dist/css/bootstrap.min.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
function Invoice() {
  const invoice = useRecoilValue(InvoiceAtom);
  function ConvertPdf() {
    const doc = new jsPDF();
    doc.text(`Patient Name:- ${invoice.obj?.docName}`, 20, 20);

    doc.text(`Disease Name:- ${invoice.obj?.diseName}`, 110, 20);
    autoTable(doc, {
      theme: "grid",
      margin: { top: 30 },
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
    </div>
  );
}

export default Invoice;
