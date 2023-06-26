import { useForm } from 'react-hook-form';
import { StyledButton, StyledInput, StyledLabel, StyledSelect, StyledText2 } from '../../styles/pages'
import styles from './styles.module.css'
import { useContext, useState } from 'react';
import { TechContext } from '../../providers/TechContext';

export const Modal = () => {
    
    const { register, handleSubmit } = useForm({});

    const {setIsOpen, createTech} = useContext(TechContext)

    const submit = (formData) => {
        createTech(formData)
    }
    
    return(
        <div className={styles.modalOverlay}>
            <div className={styles.modalBox} >
                <div className={styles.modalHeader}>
                    <button className={styles.closeButton} onClick={() => setIsOpen(false)}>X</button>
                    <StyledText2 className={styles.textModal}>Cadastrar Tecnologia</StyledText2>
                </div>
                <form onSubmit={(handleSubmit(submit))} className={styles.modalAddForm}>
                    <StyledLabel>Nome</StyledLabel>
                    <StyledInput borderColor='transparent' placeholder='Nome da Tecnologia' type='title' {...register('title')}></StyledInput>
                    <StyledLabel>Selecionar status</StyledLabel>
                    <StyledSelect {...register('status')}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </StyledSelect>
                    <StyledButton background='#FF577F' border='#FF577F'>Cadastrar Tecnologia</StyledButton>
                </form>
            </div>
        </div>
    )
}
