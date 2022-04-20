import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { ContainerModal } from "./styles";

interface IProps {
  open: boolean;
  onApprove: () => void;
  onCancel: () => void;
  message: string;
}

function ModalConfirmationHelper({
  open,
  onCancel,
  onApprove,
  message,
}: IProps) {
  return (
    <div>
      <Modal
        style={{
          margin: "0 auto",
          marginTop: "5rem",
          background: "#ccc",
          width: "30vw",
          height: "35vh",
          borderRadius: "5px",
        }}
        open={open}
        onClose={onCancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ContainerModal>
          <span>{message}</span>
          <div>
            <Button
              style={{ width: 100, height: 40, marginTop: "2rem" }}
              onClick={onApprove}
              variant="contained"
            >
              Inativar
            </Button>
            <Button
              style={{ width: 100, height: 40, marginTop: "2rem" }}
              onClick={onCancel}
              id="CancelButton"
            >
              Cancelar
            </Button>
          </div>
        </ContainerModal>
      </Modal>
    </div>
  );
}

export default ModalConfirmationHelper;
