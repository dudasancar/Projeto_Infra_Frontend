import { Tooltip } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import HistoryIcon from "@mui/icons-material/History";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { IEquipment } from "../../../interfaces/equipment";

export const columns = (
  options: any,
  handleClickEquipmentHistory: any,
  handleClickEquipmentDetail: any,
  handleOpenModalDeleteConfirmation: any
) => [
  {
    title: "Nome",
    field: "name",
  },
  {
    title: "Modelo",
    field: "model",
  },
  {
    title: "Tipo",
    field: "type",
  },
  {
    title: "Situação",
    field: "situation",
  },
  {
    title: "Departamento",
    field: "department",
  },
  {
    title: "Processador",
    field: "processor",
  },
  {
    title: "Memória",
    field: "memory",
    render: (rowData: IEquipment) => <p>{rowData.memory}GB</p>,
  },
  {
    title: "Armazenamento",
    field: "storage",
  },
  {
    title: "Sistema Operacional",
    field: "system",
  },
  {
    title: "Office",
    field: "office",
  },
  {
    title: "Data de Compra",
    field: "purchase",
    render: (rowData: IEquipment) => (
      <p>{new Date(rowData.purchase).toLocaleDateString("pt-BR", options)}</p>
    ),
  },
  {
    title: "",
    render: (equipment: IEquipment) => (
      <div style={{ display: "flex" }}>
        <Tooltip title="Histórico de Usuários">
          <HistoryIcon
            onClick={() => handleClickEquipmentHistory(equipment.id)}
            style={{
              cursor: "pointer",
              color: "black",
            }}
          />
        </Tooltip>
        <Tooltip title="Mais Detalhes">
          <AssignmentIcon
            onClick={() => handleClickEquipmentDetail(equipment.id)}
            style={{
              cursor: "pointer",
              color: "black",
            }}
          />
        </Tooltip>
        <Tooltip title="Inativar">
          <DeleteForeverIcon
            onClick={() => {
              handleOpenModalDeleteConfirmation(equipment);
            }}
            style={{
              cursor: "pointer",
              color: "red",
            }}
          />
        </Tooltip>
      </div>
    ),
  },
];
