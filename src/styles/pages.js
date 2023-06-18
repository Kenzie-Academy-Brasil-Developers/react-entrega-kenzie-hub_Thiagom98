import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10% 5% ;
    align-items: center;
    height: 100%;
    justify-content: center;
    gap: 1.25rem;
    width: 100%;
`

export const StyledLogo = styled.img`
    width: 6.3125rem;
    height: .875rem;
    @media (min-width: 1024px) {
        width: 9rem;
        height: 1.25rem ;
        
    }
    

`
export const StyledForm = styled.form`
    background-color: var(--color-grey-3);
    display: flex;
    flex-direction: column;
    padding: 2.1rem 1.1rem;
    gap: 1.2rem;
    justify-content: space-between;
    width: 80%;
    max-width: 370px ;
`
export const StyledTitle = styled.h2`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: clamp(.875rem, 2.5vw,  1.125rem);
    line-height: 28px;
    color: var(--color-grey-0);
    display: flex;
    justify-content: center;
`
export const StyledLabel = styled.label`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 9.772px;
    line-height: 0px;
    color: var(--color-grey-0);
`
export const StyledButton = styled.button`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;
    border: 1.2182px solid ;
    border-radius: .2562rem;
    height: clamp(2.4rem, 1.5vh, 3rem );
    background: ${props => props.background};
    border-color: ${props => props.border} ;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    color: #FFFFFF;
`
export const StyledText = styled.p`
    display: flex;
    justify-content: ${props => props.justify} ;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: clamp(0.6rem, 2.5vw,  .75rem);
    line-height: 14px;
    color: var(--color-grey-1);

`
export const StyledFormEspecial = styled.div`
    display:flex;
    flex-direction:row;
    padding: 0px 13.0293px;
    gap: 8.14px;
    background: var(--color-grey-2);
    width: 100%;
    height: clamp(2.4rem, 1.5vh, 3rem );
    border: 0.9772px solid #F8F9FA;
    border-radius: 3.20867px;
    input {
        flex-grow:2;
        border:none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        width: 80%;
        background-color: var(--color-grey-2) ;
        color: white;
    }
    input:focus {
        outline: none;
    }
    input::placeholder {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: clamp(.75rem, 2.5vw,  1rem);
        line-height: 26px;
        color:  #868E96;
    }
    .button>img{
        background-color:var(--color-grey-2) ;
    }


`
export const StyledInput = styled.input`
    display:flex;
    flex-direction:row;
    padding: 0px 13.0293px;
    gap: 8.14px;
    background: var(--color-grey-2);
    width: 100%;
    height: clamp(2.4rem, 1.5vh, 3rem );
    border: 0.9772px solid;
    border-radius: 3.20867px;
    border-color: ${props => props.borderColor}  ;
    color: var(--color-grey-0);  
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    :focus{
        outline:none ;
    }
    ::placeholder {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: clamp(.75rem, 2.5vw,  1rem);
        line-height: 26px;
        color:  #868E96;
    }
`
    
export const StyledImgContainer = styled.div`
    display: flex;
    width: 80%;
    max-width: 370px ;
    justify-content: space-between;
    align-items: center;

`
export const StyledSelect = styled.select`
    display:flex;
    flex-direction:row;
    padding: 0px 13.0293px;
    gap: 8.14px;
    background: var(--color-grey-2);
    width: 100%;
    height: clamp(2.4rem, 1.5vh, 3rem );
    border: 0.9772px solid;
    border-radius: 3.20867px;
    border-color: ${props => props.borderColor}  ;
    color:  #868E96;  
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    :focus{
        outline:none ;
    }

`
export const StyledButton2 = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    background: #212529;
    border-radius: 4px;
    height: 35px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 9.59437px;
    line-height: 23px;
    color: var(--color-grey-0);

`
export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 5% ;
    border-bottom: solid 1px var(--color-grey-2);
    
    @media (min-width:1024px) {
        padding: 1% 18%;
        
    }


`
export const StyledSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4% 5% ;
    border-bottom: solid 1px;
    border-color: ${props => props.borderColor} ;
    
    @media (min-width:1024px) {
        padding: 1% 18%;
        
    }


`
export const StyledSection2 = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 4% 5% ;
    border-bottom: solid 1px;
    border-color: ${props => props.borderColor} ;
    gap: 2rem;
    
    @media (min-width:1024px) {
        padding: 1% 18%;
        
    }


`
export const StyledText2 = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;

`

export const StyledContainer2 = styled.div`

    background-color: var(--color-grey-3);
    display: flex;
    flex-direction: column;
    padding: 2.1rem 1.1rem;
    gap: 1.2rem;
    justify-content: space-between;
    width: 80%;
    max-width: 370px ;

`
export const StyledForm2 = styled.form`
    background-color: var(--color-grey-3);
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: space-between;
    width: 100%;
    max-width: 370px ;

`