import { date, number, object, string } from "yup";

export const validationSchema = object({
  name: string(),
  email: string().email("Email inválido"),
  serial_number: string(),
  model: string(),
  type: string(),
  situation: string(),
  status: string(),
  collaborator_id: string(),
  department: string(),
  processor: string(),
  memory: number(),
  storage: string(),
  system: string(),
  office: string(),
  purchase: date(),
});

export const initialValues = {
  name: "",
  serial_number: "",
  model: "",
  type: "",
  situation: "",
  status: "",
  id: "",
  collaborator_id: "",
  department: "",
  processor: "",
  memory: 0,
  storage: "",
  system: "",
  office: "",
  purchase: new Date(),
};
