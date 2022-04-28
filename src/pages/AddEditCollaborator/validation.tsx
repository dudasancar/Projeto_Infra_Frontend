import { object, string } from "yup";

export const validationSchema = object({
    name: string().required("O nome é obrigatório"),
    contract: string().required("contato inválido").required("Contato obrigatório"),
    situation: string().required("O tipo da situacao e obrigatoria"),
    start:string(),
    admission:string(),
    occupation:string(),
    computer:string(),
    payment:string(),
    cost_center:string(),
    MEI:string(),
    hours:string(),
    city:string(),
    coordinator:string(),
    contact:string(),
    birth:string(),
    CPF:string(),
    identity:string(),
    schooling:string(),
    mother:string(),
    sons:string(),
    emergency_contact:string(),
    responsible_emergency:string(),
    address:string(),
    email:string(),
    status:string(),
    equipment_id:string(),
    
  });

export const initialValues = {
  date:"",
  name: "",
  contract: "",
  situation: "",
  start:"",
  admission:"",
  occupation:"",
  computer:"",
  payment:"",
  cost_center:"",
  MEI:"",
  hours:"",
  city:"",
  coordinator:"",
  contact:"",
  birth:"",
  CPF:"",
  identity:"",
  schooling:"",
  mother:"",
  sons:"",
  emergency_contact:"",
  responsible_emergency:"",
  address:"",
  email:"",
  status:"",
  equipment_id:"",
}