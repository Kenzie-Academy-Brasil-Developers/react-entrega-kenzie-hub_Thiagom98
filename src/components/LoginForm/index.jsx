import { StyledButton, StyledFormEspecial, StyledLabel, StyledText, StyledTitle, StyledInput, StyledForm2, StyledContainer2, StyledForm, } from "../../styles/pages"
import eye from '../../assets/eye.png'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom";
import { api } from "../../services/services";
import { toast } from "react-toastify";
import { useState } from "react";
import { LoginFormSchema } from "./LoginFormSchema";


export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginFormSchema)
    });

    const notify = (message) => toast(message)

    const navigate = useNavigate();

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
            navigate(`/user/${data.user.name}`)
            notify('Login efetuado com sucesso')

        } catch (error) {
            notify('Email ou senha inválidos')

        }
    }

    const submit = (formData) => {
        loginUser(formData)

    }


    return (
        <>
            <StyledContainer2>
                <StyledForm2 onSubmit={handleSubmit(submit)} noValidate >
                    <StyledTitle>Login</StyledTitle>


                    <StyledLabel>Email</StyledLabel>
                    <StyledInput borderColor='#F8F9FA' type="email" placeholder="Digite aqui sua email aqui" {...register('email')} />
                    {errors.email ? <StyledText>{errors.email.message}</StyledText> : null}
                    <StyledLabel>Senha</StyledLabel>
                    <StyledFormEspecial>
                        <input type={inputType} placeholder="Digite aqui sua senha aqui"  {...register('password')} />
                        <button onClick={(e) => {
                            e.preventDefault()
                            seePassword()
                        }}><img src={eye} alt="" /></button>
                    </StyledFormEspecial>
                    {errors.password ? <StyledText>{errors.password.message}</StyledText> : null}
                    <StyledButton background='#FF577F' border='#FF577F'>Entrar</StyledButton>

                    <StyledText>Ainda não possui uma conta?</StyledText>
                </StyledForm2>
                <StyledButton onClick={() => { navigate('/user/create') }} background='#868E96' border='#868E96' >Cadastre-se</StyledButton>

            </StyledContainer2>
        </>
    )
}