import { toast } from "react-toastify"
import { api } from "../services/services"
import { createContext, useContext, useEffect, useState } from "react"
import { UserContext } from "./UserContext"

export const TechContext = createContext({})

export const TechProvider= ({children}) => {

    const notify = (message) => toast(message)
    
    const [isOpen, setIsOpen] = useState(false);
    
    const [loading, setLoading] = useState(false);

    const [userProfile, setUserProfile] = useState(null)

    const [techModal, setTechModal] = useState([])

    const [techs, setTechs] = useState([])
    
    const token = JSON.parse(localStorage.getItem('@TOKEN'))

    const userId = JSON.parse(localStorage.getItem('@USERID'))

    const header = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const loadUser = async () => {
            try {
                setLoading(true)
                const { data } = await api.get(`/profile`, header)
                setUserProfile(data)
                setTechs(data.techs)
            } catch (error) {
                console.log(error.message)
            }finally{
                setLoading(false)
            }
        }
        if(token && userId){
            loadUser();
         }
    }, [])

    const [isNewOpen, setIsNewOpen] = useState(false)

    const [tech, setTech] = useState([])

    const attTech = async (formData,id) => {
        try {
            setLoading(true)
            const createTech = await api.put(`/users/techs/${id}`, formData, header)
            notify('Tecnologia atualizada com sucesso')
            
            const techAtualizado = techs.find((item) => item.id == id)
            techAtualizado.status = formData.status
            setTechs(techs)
            setIsNewOpen(false)

        } catch (error) {
            notify('Algo deu errado')
        }finally{
            setLoading(false)
        }

    } 
    const createTech = async (formData) => {
        try {
            setLoading(true)
            const createTech = await api.post('/users/techs', formData, header)
            notify('Tecnologia adicionada com sucesso')
            const newTech = createTech.data
            setTechs([...techs, newTech])
        } catch (error) {
            notify('Algo deu errado')
        }finally{
            setLoading(false)
        }

    }

    const deletTech = async(id) => {
        try {
            setLoading(true)
            const deleteTech = await api.delete(`/users/techs/${id}`, header)
            notify('Tecnologia deletada com sucesso')
            const newList = techs.filter(item => item.id !== id)
            setTechs(newList)
            setIsNewOpen(false)
        } catch (error) {
            notify('Algo deu errado')
        }finally{
            setLoading(false)
        }
    }
        

    
    return(
        <TechContext.Provider value={{isOpen,setIsOpen, techs, setTechs, isNewOpen, setIsNewOpen, attTech, tech, setTech, techModal, setTechModal, createTech, deletTech}}>
            {children}
        </TechContext.Provider>

    )



}
