import React, { useState, useEffect } from "react";
import { Content } from "./styles";
import MaterialTable from "material-table";
import { listPreviousCollaborator } from "../../../services/Collaborator/listPreviousCollaborator";

interface UserPrevious {
  name?: string;
  email?: string;
  department?: string;
  deliveryDate?: string;
  returnDate?: string;
}

const TableUsePrevious = () => {
  const [listPrevious, setListPrevious] = useState<UserPrevious[]>([]);

  useEffect(() => {
    listPreviousCollaborator()
      .then((response: any) => setListPrevious(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Content>
      <MaterialTable
        title="Usuários Anteriores"
        columns={[
          { title: "Nome", field: "name" },
          { title: "Email", field: "email" },
          { title: "Departamento", field: "department" },
          { title: "Data de Retirada", field: "deliveryDate" },
          { title: "Data de Devolução", field: "returnDate" },
        ]}
        data={listPrevious}
        options={{
          filtering: false,
          search: false,
          paging: true,
          headerStyle: {
            backgroundColor: "#DFDFDF",
            color: "#334B48",
            fontSize: "0.9rem",
            fontStyle: "italic",
            paddingBottom: "1px",
            paddingTop: "1px",
          },
        }}
      />
    </Content>
  );
};

export default TableUsePrevious;
