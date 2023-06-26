import { useForm } from "react-hook-form"
import { StyledButton, StyledButtonContainer, StyledButtonDelete,  StyledLabel, StyledNameModal, StyledSelect, StyledText2 } from "../../styles/pages"
import styles from './styles.module.css'
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";


export const ModalAtt = () => {
    
    const { setIsNewOpen, techModal, attTech, tech, deletTech} = useContext(TechContext)

    const { register, handleSubmit } = useForm({});

    const id = techModal.id
    
    const submit = (formData) => {
        attTech(formData,id)

    }
    
    return(
        <div className={styles.modalOverlay}>
        <div className={styles.modalBox} >
            <div className={styles.modalHeader}>
                <button className={styles.closeButton} onClick={() => setIsNewOpen(false)}>X</button>
                <StyledText2 className={styles.textModal}>Tecnologia Detalhes</StyledText2>
            </div>
            <form id={tech.id} className={styles.modalAddForm} onSubmit={handleSubmit((e) => submit(e,tech.id))} >
                <StyledLabel>Nome</StyledLabel>
                <StyledNameModal borderColor='transparent' >{techModal.title}</StyledNameModal>
                <StyledLabel>Status</StyledLabel>
                <StyledSelect borderColor='transparent' {...register('status')}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </StyledSelect>
                <StyledButtonContainer>
                    <StyledButton type="submit" id="1" background='#FF577F' border='#FF577F'>Salvar Alterações</StyledButton>
                    <StyledButtonDelete type="button" id="2" onClick={() => deletTech(id)}  >Excluir</StyledButtonDelete>
                </StyledButtonContainer>
            </form>
                
        </div>
    </div>
)
}
    





