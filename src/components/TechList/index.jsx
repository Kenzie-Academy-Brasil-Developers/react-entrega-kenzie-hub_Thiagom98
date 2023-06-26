import { useContext } from "react"
import { StyledTechList } from "../../styles/pages"
import { TechCard } from "./TechCard"
import { TechContext } from "../../providers/TechContext"

export const TechList = () => {
    
    const { techs } = useContext(TechContext)

    return(
        <StyledTechList>
            {techs.map((item) =>  <TechCard key={item.id} item={item} />)}
        </StyledTechList>
        
    )
}
