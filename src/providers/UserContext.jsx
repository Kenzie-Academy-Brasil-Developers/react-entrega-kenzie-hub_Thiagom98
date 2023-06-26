import { createContext, useEffect, useState } from "react";
import { api } from "../services/services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    
    const notify = (message) => toast(message)

    const navigate = useNavigate()   
    
    
    const [inputType, setInputType] = useState('password')

    const seePassword = () => {
        if (inputType === 'text') {
            setInputType('password')
        } else {
            setInputType('text')
        }
    }

    const loginUser = async (formData) => {
        try {
            const { data } = await api.post('/sessions', formData)
            localStorage.setItem('@TOKEN', JSON.stringify(data.token))
            localStorage.setItem('@USERID', JSON.stringify(data.user.id))
            setUserProfile(data.user)
            navigate(`/user`)
            notify('Login efetuado com sucesso')
        } catch (error) {
            notify('Email ou senha inválidos')

        }
    }

    const [inputConfirmText, setInputConfirmText] = useState('');

    const [inputConfirm, setInputConfirm] = useState('');


    const createUser = async (formData, senhaOrigin, reset) => {
        if (senhaOrigin != inputConfirm) {
            setInputConfirmText('Sua confirmação de senha está errada')
        } else {

            try {
                const { data } = await api.post('/users', formData)
                notify('Conta criada com sucesso')
                reset()
                navigate('/')



            } catch (error) {
                notify('Algo de errado aconteceu')
                
            }finally{
                setInputConfirmText('')
            }
        }
    }

    const [userProfile, setUserProfile] = useState(null)

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
                const { data } = await api.get(`/profile`, header)
                setUserProfile(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        if(token && userId){
            loadUser();
         }
    }, [])

    const userLogout = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        setUserProfile(null);
        navigate("/");
    };


    return(
        <UserContext.Provider value={{ seePassword , loginUser, inputType, createUser, inputConfirmText, inputConfirm, setInputConfirm, userProfile, userLogout }}>
            {children} 
        </UserContext.Provider>
    )


}