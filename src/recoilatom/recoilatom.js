import {atom} from "recoil"
export const LoginAtom=atom({
  key:"login",
  default:false,
})
export const indexAtom=atom({
    key:"indices",
    default:null
})
export const InvoiceAtom=atom({
key:"invoice",
default:{}
})
export const ThemeAtom=atom({
  key:"dark",
  default:false
}) 