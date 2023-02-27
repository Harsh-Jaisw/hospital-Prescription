// import React, { useState } from 'react';

// export default function Email({button}) {
//   const [to, setTo] = useState('');
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
//   const [attachment, setAttachment] = useState(null);

//   function handleToChange(event) {
//     setTo(event.target.value)
//   }

//   function handleSubjectChange(event) {
//     setSubject(event.target.value);
//   }

//   function handleBodyChange(event) {
//     setBody(event.target.value);
//   }

//   function handleAttachmentChange(event) {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         const base64 = reader.result.split(',')[1];
//         setAttachment({
//           name: file.name,
//           base64,
//         });
//       };
//     } else {
//       setAttachment(null);
//     }
//   }

//   function handleSendEmail(event) {
//     event.preventDefault();
//     let mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//     if (attachment) {
//       mailtoLink += `&attachment=${encodeURIComponent(attachment.base64)}`;
//     }
//     window.location.href = mailtoLink;
//   }

//   return (

//     <form onSubmit={handleSendEmail}>
//       {console.log(attachment)}
//       <label>
//         To:
//         <input type="email" value={to} onChange={handleToChange} />
//       </label>
//       <label>
//         Subject:
//         <input type="text" value={subject} onChange={handleSubjectChange} />
//       </label>
//       <label>
//         Body:
//         <textarea value={body} onChange={handleBodyChange} />
//       </label>
//       <label>
//         Attachment:
//         <input type="file" onChange={handleAttachmentChange} />
//         {attachment && (
//           <span>
//             {attachment.name} ({Math.round((attachment.base64.length * 3) / 4 / 1024)} KB)
//           </span>
//         )}
//       </label>
//       <button type="submit">{button}</button>
//     </form>
//   );
// }

import React from "react";
import { useRecoilValue } from "recoil";
import Buttons from "../../Atoms/Buttons";
import { InvoiceAtom, ThemeAtom } from "../../recoilatom/recoilatom";
import style from "./email.module.css";
export default function App({ button }) {
  const invoice = useRecoilValue(InvoiceAtom);
  let to = invoice.obj?.pateintMail;
  let subject = "Prescription Report";
  let body =
    "Thank's for visiting us ,this is your Prescription files.";
    const theme = useRecoilValue(ThemeAtom)
  // const [attachment, setAttachment] = useState(null);
  // function handleAttachmentChange(event) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       setAttachment({
  //         name: file.name,
  //         dataURL: reader.result
  //       });
  //     };
  //   } else {
  //     setAttachment(null);
  //   }
  // }
  function handleSendEmail() {
    let mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
    // if (attachment === true) {
    //   mailtoLink = mailtoLink + `&attachment=${attachment.dataURL}`;
    // }
    window.location.href = mailtoLink;
  }

  return (
    <>
      <Buttons
        type="submit"
        onClick={handleSendEmail}
        style={{ color: theme ? "black" : "white" }}
        className={style.btn}
        text={button}
      />
      <div>
        {/* <input type="file" onChange={handleAttachmentChange} /> */}
        {/* {attachment && (
          <span>
            {attachment.name} ({Math.round(attachment.dataURL.length/1024)}{" "}
            KB)
          </span>
        )} */}
      </div>
    </>
  );
}
