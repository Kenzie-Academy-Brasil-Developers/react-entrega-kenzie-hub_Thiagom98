import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/Logo.png"
import { StyledButton2, StyledHeader, StyledLogo, StyledSection, StyledSection2, StyledText, StyledText2, StyledTitle } from "../../styles/pages"
import { useEffect, useState } from "react";
import { api } from "../../services/services";

export const UserPage = () => {
    const navigate = useNavigate();

    const [userProfile, setUserProfile] = useState([])

    const token = JSON.parse(localStorage.getItem('@TOKEN'))

    const userId = JSON.parse(localStorage.getItem('@USERID'))

    const header = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const loadUser = async () => {
            try {
                const { data } = await api.get(`/profile`, header)
                setUserProfile(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        loadUser()
    }, [])


    return (
        <>
            <StyledHeader>

                <StyledLogo src={logo} alt="" />
                <StyledButton2 onClick={() => {
                    localStorage.clear(), navigate('/')
                }}>Voltar</StyledButton2>

            </StyledHeader>
            <StyledSection borderColor='#343B41'>
                <StyledTitle>{userProfile.name}</StyledTitle>
                <StyledText>{userProfile.course_module}</StyledText>
            </StyledSection>
            <StyledSection2 borderColor='transparent'>
                <StyledTitle>Que pena! Estamos em desenvolvimento :(</StyledTitle>
                <StyledText2>Nossa aplicação está em desenvolvimento, em breve teremos novidades</StyledText2>
            </StyledSection2>


        </>
    )
}