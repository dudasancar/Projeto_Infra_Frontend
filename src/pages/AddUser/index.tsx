import React from "react";
import AddEditUser from "../../components/AddEditUser/Index";

interface Props {
  userId: any;
}

const AddUser = (props: Props) => {
  return <AddEditUser userId={null} />;
};
export default AddUser;
