import { StyledInput, StyledLabel, StyledText } from "../../styles/pages"


export const Input = ({ label, type, register, error, placeholder }) => {
    return (
        <>
            <StyledLabel >{label}</StyledLabel>
            <StyledInput borderColor='transparent' type={type} placeholder={placeholder} {...register} />
            {error ? <StyledText>{error.message}</StyledText> : null}

        </>
    )
}