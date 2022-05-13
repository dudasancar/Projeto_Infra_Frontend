import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { useMessage } from "../../../context/MessageContext";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerForm } from "./Styles";
import { useLocation } from "react-router-dom";
import { initialValues, validationSchema} from './validation';
import { ICollaborator } from "./interfaces";
import FirstStep from "./Steps/FirstStep";
import SecondStep from "./Steps/SecondStep";
import ThirdStep from "./Steps/ThirdStep";
import { editCollaborator } from "../../../services/Collaborators/editCollaborator";
import { addCollaborator } from "../../../services/Collaborators/addCollaborator";
import { getCollaborator } from "../../../services/Collaborators/getCollaborator";


const steps = ["Dados Pessoais", "Dados Profissionais", "Empresa"];

const CollaboratorFormStepper = () => {

  const [editedCollaborator, setEditedCollaborator] = React.useState<ICollaborator>();
  const { setMessage } = useMessage();
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();

  const handleNext = () => {
    if(activeStep < 2)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  React.useEffect(() => {
    if (location.pathname == `/editarColaborador/${id}`) {
      getCollaborator(id)
        .then((response: any) => {
          setEditedCollaborator(response.data);
          formik.setValues(response.data);
        })
        .catch((err) =>
          setMessage({
            content: `O seguinte erro ocorreu ao buscar os dados do usuário: ${err}`,
            display: true,
            severity: "error",
          })
        );
    }
  }, []);

  const CreateOrEditCollaborator = async (values: ICollaborator) => {
    if (location.pathname == `/editarColaborador/${id}` && editedCollaborator){
      
      await editCollaborator(values)
        .then((response:any) => {
          if(response) setMessage({
            content: "Colaborador editado com sucesso!",
            display: true,
            severity: "success",
          });
          navigate("/listarColaboradores");
        })
        .catch((err: string) =>{
          setMessage({
            content: `O seguinte erro ocorreu ao tentar editar o Colaborador: ${err}`,
            display: true,
            severity: "error",
          })
        }

        );
    } else {
      addCollaborator(values)
        .then(() => {
          setMessage({
            content: "Colaborador cadastrado com sucesso!",
            display: true,
            severity: "success",
          });
          navigate("/listarColaboradores");
        })
        .catch((err: string) =>
          setMessage({
            content: `O seguinte erro ocorreu ao tentar cadastrar o funcionário: ${err}`,
            display: true,
            severity: "error",
          })
        );
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      CreateOrEditCollaborator(values)
    },
  });
  
  return (
    <ContainerForm>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
         
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Todos os passos finalizados - Colaborador Criado com Sucesso!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Resetar</Button>
          </Box>
        </React.Fragment>
      ) : (
        <div>
          <form onSubmit={(e)=> {
            e.preventDefault()
            formik.handleSubmit()
            return false}}>
          {location.pathname == `/editarColaborador/${id}` ? (
            <h2>Editar Colaborador</h2>
          ) : (
            <h2>Cadastrar novo Colaborador</h2>
          )}
          {activeStep == 0 && <FirstStep formik={formik}/>}
          {activeStep == 1 && <SecondStep formik={formik}/>}
          {activeStep == 2 && <ThirdStep formik={formik}/>}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Voltar
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === steps.length - 1 ?
            <Button type="submit">
              Enviar
            </Button>
            :
            <button type="button" onClick={handleNext}>
              Próximo
            </button>
            }
          </Box>
          </form>
        </div>
      )}
    </ContainerForm>
  );
};

export default CollaboratorFormStepper;
