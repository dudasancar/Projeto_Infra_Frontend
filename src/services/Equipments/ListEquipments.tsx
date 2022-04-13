
import api from '../api'


export const listEquipments = () => {

const data = [
    {
    id: 1,
    name: "Douglas",
    email: "douglas.fernandes@gx2.com.br",
    type:"Desenvolvedor",
    local: "Frigelar"
    },
    {
    id: 2,
    name: "Gustavo",
    email: "gustavo.fernandes@gx2.com.br",
    type:"Desenvolvedor",
    local: "Agibank"
    },
    {
    id: 3,
    name: "Eduarda",
    email: "eduarda.fernandes@gx2.com.br",
    type:"Adminsitracao",
    local: "HomeOffice"
    },
    {
    id: 4,
    name: "Carlos Eduardo",
    email: "carlos.fernandes@gx2.com.br",
    type:"Adminsitracao",
    local: "NuBank"
    },
    {
    id: 5,
    name: "Sthefanie",
    email: "sthe.fernandes@gx2.com.br",
    type:"Recursos Humanos",
    local: "GX2"
    },
    {
    id: 6,
    name: "Roger",
    email: "roger.fernandes@gx2.com.br",
    type:"Desenvolvedor",
    local: "HomeOffice"
    },
    
]

    try{
        return Promise.resolve(data)

    }catch(error){
       return Promise.reject(error)
    }  
    
}