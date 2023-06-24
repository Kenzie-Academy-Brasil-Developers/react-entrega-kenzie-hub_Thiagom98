import { UserCreateForm } from "../../components/UserCreateForm"
import { StyledContainer, StyledImgContainer, StyledLink2, StyledLogo } from "../../styles/pages"
import logo from "../../assets/Logo.png"


export const CreateUserPage = () => {

    
    return (
        <StyledContainer>
            <StyledImgContainer>
                <StyledLogo src={logo} alt="" />
                <StyledLink2 to={'/'}>Voltar</StyledLink2>
            </StyledImgContainer>
            <UserCreateForm />
        </StyledContainer>
    )
}