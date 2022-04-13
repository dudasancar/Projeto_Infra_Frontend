
import api from '../api'


export const listEquipments = () => {

    const data = [
        {
            id: 1,
            name: "GX2-111",
            serial: "234234234DFG234TRF",
            model: "Dell i7",
            type: "Notebook",
            stats: "Emprestada",
            user: "Douglas Miller",
            departament: "Rockets",
            cpu: "i7 5geracao",
            memory: "16GB",
            storage: "1TB SSD",
            system: "Windowns 11",
            office: "Nao",
            lastUser: "Mateus",
            fiscalNote: "12312453454676",
            buyDate: "06/12/1997",
            term: "Assinado",
        },
        {
            id: 2,
            name: "GX2-456",
            serial: "234234234DFG234TRF",
            model: "Dell i7",
            type: "Notebook",
            stats: "Emprestada",
            user: "Douglas Miller",
            departament: "Rockets",
            cpu: "i7 5geracao",
            memory: "16GB",
            storage: "1TB SSD",
            system: "Windowns 11",
            office: "Nao",
            lastUser: "Mateus",
            fiscalNote: "12312453454676",
            buyDate: "06/12/1997",
            term: "Assinado",
        },
        {
            id: 3,
            name: "GX2-124",
            serial: "234234234DFG234TRF",
            model: "Dell i7",
            type: "Notebook",
            stats: "Emprestada",
            user: "Douglas Miller",
            departament: "Rockets",
            cpu: "i7 5geracao",
            memory: "16GB",
            storage: "1TB SSD",
            system: "Windowns 11",
            office: "Nao",
            lastUser: "Mateus",
            fiscalNote: "12312453454676",
            buyDate: "06/12/1997",
            term: "Assinado",
        },

    ]

    try {
        return Promise.resolve(data)

    } catch (error) {
        return Promise.reject(error)
    }

}