import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormikProps, useFormik } from "formik";
import { useMessage } from "../../context/MessageContext";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerForm } from "./Styles";
import { useLocation } from "react-router-dom";
import { editEmployees } from "../../services/Employees/editEmployees";
import { addEmployees } from "../../services/Employees/addEmployees";
import { initialValues, validationSchema} from './validation';
import { ICollaborator } from "./interfaces";
import FirstStep from "./Steps/FirstStep";
import SecondStep from "./Steps/SecondStep";
import ThirdStep from "./Steps/ThirdStep";

const steps = ["Dados Pessoais", "Dados Profissionais", "Empresa"];

const CollaboratorFormStepper = () => {

  const [editedCollaborator, setEditedCollaborator] = React.useState<ICollaborator>();
  const { setMessage } = useMessage();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const CreateOrEditCollaborator = (values: ICollaborator) => {
    if (location.pathname == `/editarColaborador/${id}` && editedCollaborator) {
      console.log(editedCollaborator.name);
      values.name = editedCollaborator!.name;
      editCollaborator(values)
        .then(() => {
          setMessage({
            content: "Colaborador editado com sucesso!",
            display: true,
            severity: "success",
          });
          navigate("/listarColaboradores");
        })
        .catch((err: string) =>
          setMessage({
            content: `O seguinte erro ocorreu ao tentar editar o Colaborador: ${err}`,
            display: true,
            severity: "error",
          })
        );
    } else {
      addCollaborator(values.name, values.email)
        .then(() => {
          setMessage({
            content: "Colaborador cadastrado com sucesso!",
            display: true,
            severity: "success",
          });
          navigate("/listarColaborador");
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
      CreateOrEditCollaborator(values);
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
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
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
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Pular
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
            </Button>
          </Box>
        </div>
      )}
    </ContainerForm>
  );
};

export default CollaboratorFormStepper;
