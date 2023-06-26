import { useContext, useState } from "react"
import { StyledTechCard, StyledText, StyledTitle } from "../../../styles/pages"
import { ModalAtt } from "../../ModalTechAtt"
import { TechContext } from "../../../providers/TechContext"

export const TechCard = ({item}) => {
    
    
    const { setIsNewOpen, setTechModal } = useContext(TechContext)
    
    

    return(
        <>
            <StyledTechCard onClick={() => {setIsNewOpen(true)
            setTechModal(item)
            }}>
                <StyledTitle>{item.title}</StyledTitle>
                <StyledText>{item.status}</StyledText>
            </StyledTechCard>
        </>


    )
}