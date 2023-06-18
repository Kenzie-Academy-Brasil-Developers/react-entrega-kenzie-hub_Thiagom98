import { useState } from "react"
import { useForm } from "react-hook-form"
import { StyledButton, StyledForm, StyledInput, StyledLabel, StyledSelect, StyledText, StyledTitle } from "../../styles/pages"
import { api } from "../../services/services";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"
import { UserCreateSchema } from "./UserCreateSchema";
import { Input } from "../Input";
import { toast } from "react-toastify";


export const UserCreateForm = () => {
    const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm({
        resolver: zodResolver(UserCreateSchema)
    });

    const navigate = useNavigate()


    const notify = (message) => toast(message)

    const [inputConfirmText, setInputConfirmText] = useState('');

    const [inputConfirm, setInputConfirm] = useState('');


    const createUser = async (formData) => {
        if (getValues('password') != inputConfirm) {
            setInputConfirmText('Sua confirmação de senha está errada')
        } else {

            try {
                const { data } = await api.post('/users', formData)
                notify('Conta criada com sucesso')
                navigate('/')


            } catch (error) {
                notify('Algo de errado aconteceu')
            }
        }
    }

    const submit = async (formData) => {
        await createUser(formData)
        setInputConfirm('')
        reset()

    }

    return (
        <>
            <StyledForm onSubmit={handleSubmit(submit)} >
                <StyledTitle>Crie sua conta</StyledTitle>
                <StyledText justify='center'>Rápido e grátis, vamos nessa</StyledText>
                <Input label="Nome" type="text" register={register('name')} error={errors.name} placeholder='Digite aqui seu nome' />
                <Input label="Email" type="email" register={register('email')} error={errors.email} placeholder='Digite aqui seu email' />
                <Input label="Senha" type="password" register={register('password')} error={errors.password} placeholder='Digite aqui sua senha' />
                <StyledLabel htmlFor="">Confirmar Senha</StyledLabel>
                <StyledInput borderColor='transparent' type="password" placeholder="Digite novamente sua senha" onChange={(event) => setInputConfirm(event.target.value)} />
                <StyledText>{inputConfirmText}</StyledText>
                <Input label="Bio" type="text" register={register('bio')} error={errors.bio} placeholder='Fale sobre você' />
                <Input label="Contato" type="number" register={register('contact')} error={errors.contact} placeholder='Opção de contato' />
                <StyledSelect name="" id="" borderColor='transparent'  {...register('course_module')} >
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                    <option value="Quarto módulo (Backend Avançado)">Terceiro Módulo</option>
                </StyledSelect>
                <StyledButton background='#FF577F' border='#FF577F'>Cadastrar</StyledButton>
            </StyledForm>
        </>

    )
}