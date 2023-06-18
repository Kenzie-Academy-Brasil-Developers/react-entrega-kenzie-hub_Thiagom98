import { UserCreateForm } from "../../components/UserCreateForm"
import { StyledButton2, StyledContainer, StyledImgContainer, StyledLogo } from "../../styles/pages"
import logo from "../../assets/Logo.png"
import { useNavigate } from "react-router-dom"

export const CreateUserPage = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }

    return (
        <StyledContainer>
            <StyledImgContainer>
                <StyledLogo src={logo} alt="" />
                <StyledButton2 onClick={() => { goBack() }}>Voltar</StyledButton2>
            </StyledImgContainer>
            <UserCreateForm />
        </StyledContainer>
    )
}