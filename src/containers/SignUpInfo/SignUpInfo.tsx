import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../../components/common-components/Button";
import { Divide } from "../../components/common-components/Divide";
import { Form } from "../../components/common-components/Form";
import { Input } from "../../components/common-components/Input";
import { Label } from "../../components/common-components/Label";
import { Span } from "../../components/common-components/Span";
import { ContextPerson } from "../../components/Context/ContextPerson";
import { IInformationSignUp } from "../../constants/informationPerson";
import { themes } from "../../constants/themes";
import { isRequiredField, validation } from "../../utils/validation";

interface ISignUpInfoProps {
    setSignUpInfo: (signUpInformation: IInformationSignUp) => void;
}

export const SignUpInfo = React.memo(({ setSignUpInfo }: ISignUpInfoProps) => {
    const { signUpInfo, toggleIsValid } = useContext(ContextPerson)

    const [mobilePhone, setMobilePhone] = useState(signUpInfo.mobilePhone);
    const [email, setEmail] = useState(signUpInfo.email);
    const [password, setPassword] = useState(signUpInfo.password);
    const [repeatPassword, setRepeatPassword] = useState("");

    const [errorMobilePhone, setErrorMobilePhone] = useState<(string | boolean)>(false)
    const [errorEmail, setErrorEmail] = useState<(string | boolean)>(false)
    const [errorPassword, setErrorPassword] = useState<(string | boolean)>(false)
    const [errorRepeatPassword, setErrorRepeatPassword] = useState<(string | boolean)>(false)

    const [errors, setErrors] = useState([errorMobilePhone, errorEmail, errorPassword])

    const handleInputMaskPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        const result = value.replaceAll(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

        if (result) {
            const [ numbOne, numbTwo, numbThree, numbFour, numbFive, numbSix ] = result;
            setMobilePhone(`+375 (${numbThree}) ${numbFour}-${numbFive}-${numbSix}`);
        }
    }

    useEffect(() => {
        if(mobilePhone.length !== 0)
        {
            validation('mobilePhone', mobilePhone, setErrorMobilePhone);
        }  
    },[mobilePhone])

    const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setEmail(value)
        validation(id, value, setErrorEmail)
    }

    const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        if(id === "password"){
            setPassword(value)
            validation(id, value, setErrorPassword)
        }
        else {
            setRepeatPassword(value)
        }
    }

    useEffect(() => {
        if(repeatPassword !== password){
            setErrorRepeatPassword("Passwords do not match!")
        }
        else {
            setErrorRepeatPassword(false)
        }
    },[repeatPassword, password])

    useEffect(() => {
        if(mobilePhone.length === 0){
            setErrorMobilePhone(errors[0])
        }
        if(email.length === 0){
            setErrorEmail(errors[1])
        }
        if(password.length === 0 ){
            setErrorPassword(errors[2])
        } 
    }, [errors])

    const handleNextForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const isValid = isRequiredField({
            mobilePhone: mobilePhone,
            email: email,
            password: password,
        }, setErrors)

         if(!errorMobilePhone && !errorEmail && !errorPassword && !errorRepeatPassword && isValid) {
            setSignUpInfo({
                        mobilePhone: mobilePhone,
                        email: email,
                        password: password,
                    })
            toggleIsValid();
         }
    }
    return (
        <Form 
            padding="30px 30px" 
            width="500" display="flex" 
            flexDirection="column" 
            alignItems="center" 
            rowGap="15" 
        >
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="mobilePhone">Mobile phone</Label>
                <Input id="mobilePhone" value={mobilePhone} onChange={handleInputMaskPhone}/>
                {errorMobilePhone && 
                    <Span color={themes.colors.red}>{errorMobilePhone}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="email">Email</Label>
                <Input id="email" type={"email"} value={email} onChange={handleInputEmail}/>
                {errorEmail && 
                    <Span color={themes.colors.red}>{errorEmail}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="password">Password</Label>
                <Input id="password" type={"password"} value={password} onChange={handleInputPassword}/>
                {errorPassword && 
                    <Span color={themes.colors.red}>{errorPassword}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="repeatPassword">Repeat Password</Label>
                <Input id="repeatPassword" type={"password"} value={repeatPassword} onChange={handleInputPassword}/>
                {errorRepeatPassword && 
                    <Span color={themes.colors.red}>{errorRepeatPassword}</Span>
                }
            </Divide>
            <Button width={80} padding="2px 50px" onClick={handleNextForm}>Next</Button>
        </Form>
    )
})