import logo from "../../assets/Logo.png"
import { DivTech, StyledButton2, StyledHeader, StyledLogo, StyledSection, StyledSection2, StyledText, StyledText2, StyledTitle } from "../../styles/pages"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import plus from "../../assets/plus.png"
import { Modal } from "../../components/ModalTechAdd";
import { TechList } from "../../components/TechList";
import { TechContext } from "../../providers/TechContext";
import { ModalAtt } from "../../components/ModalTechAtt";

export const UserPage = () => {



    const { userProfile, userLogout } = useContext(UserContext)

    const { isOpen, setIsOpen, techs, setTechs, isNewOpen } = useContext(TechContext)



    return (
        <>
            <StyledHeader>

                <StyledLogo src={logo} alt="" />
                <StyledButton2 onClick={() => {
                    userLogout()
                }}>Voltar</StyledButton2>

            </StyledHeader>
            <StyledSection borderColor='#343B41'>
                <StyledTitle>{userProfile.name}</StyledTitle>
                <StyledText>{userProfile.course_module}</StyledText>
            </StyledSection>
            <StyledSection2 borderColor='transparent'>
                <DivTech>
                    <StyledText2>Tecnologias</StyledText2>
                    <img onClick={() => setIsOpen(true)} src={plus} alt="" />
                </DivTech>
                {isOpen ? <Modal  techs={techs} setTechs={setTechs}  setIsOpen={setIsOpen} /> : null}
                {isNewOpen ? <ModalAtt/> : null}
                {techs.length > 0 ? (
                <TechList />
            ) : (<StyledText2>Nenhuma tecnologia cadastrada</StyledText2>)}
            </StyledSection2>


        </>
    )
}