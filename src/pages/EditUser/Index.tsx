import React from 'react'
import AddEditUser from '../../components/AddEditUser/Index'

interface Props {
    userId: number;
}


const EditUser = (props: Props) => {
  return (
    <AddEditUser userId={1}/>
  )
}

export default EditUser