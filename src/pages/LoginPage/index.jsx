import logo from "../../assets/logo.png"
import { LoginForm } from "../../components/LoginForm"
import { StyledContainer, StyledLogo } from "../../styles/pages"
export const LoginPage = () => {
    return (
        <StyledContainer>
            <StyledLogo src={logo} alt="" />
            <LoginForm />
        </StyledContainer>
    )
}