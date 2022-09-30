import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../components/common-components/Button";
import { Divide } from "../../components/common-components/Divide";
import { Form } from "../../components/common-components/Form";
import { Input } from "../../components/common-components/Input";
import { Label } from "../../components/common-components/Label";
import { Span } from "../../components/common-components/Span";
import { ContextPerson } from "../../components/Context/ContextPerson";
import { IInformationSignUp } from "../../constants/informationPerson";
import { themes } from "../../constants/themes";
import { validation } from "../../utils/validation";

interface ISignUpInfoProps {
    setSignUpInfo: (signUpInformation: IInformationSignUp) => void;
}

export const SignUpInfo = ({ setSignUpInfo }: ISignUpInfoProps) => {
    const { signUpInfo, toggleIsValid } = useContext(ContextPerson)

    const [mobilePhone, setMobilePhone] = useState(signUpInfo.mobilePhone);
    const [email, setEmail] = useState(signUpInfo.email);
    const [password, setPassword] = useState(signUpInfo.password);
    const [repeatPassword, setRepeatPassword] = useState(signUpInfo.repeatPassword);

    const [errorMobilePhone, setErrorMobilePhone] = useState<(string | boolean)>(false)
    const [errorEmail, setErrorEmail] = useState<(string | boolean)>(false)
    const [errorPassword, setErrorPassword] = useState<(string | boolean)>(false)
    const [errorRepeatPassword, setErrorRepeatPassword] = useState<(string | boolean)>(false)

    const handleInputMaskPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        const result = value.replaceAll(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

        if (result) {
            const [ numbOne, numbTwo, numbThree, numbFour, numbFive, numbSix ] = result;
            setMobilePhone(`+${numbTwo} (${numbThree}) ${numbFour}-${numbFive}-${numbSix}`);
        }
    }

    useEffect(() => {
        validation('mobilePhone', mobilePhone, setErrorMobilePhone);
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
            setErrorRepeatPassword("Wrong password!")
        }
        else {
            setErrorRepeatPassword(false)
        }
    },[repeatPassword, password])

    const handleNextForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if(!errorMobilePhone && !errorEmail && !errorPassword && !errorRepeatPassword){
            setSignUpInfo({
                        mobilePhone: mobilePhone,
                        email: email,
                        password: password,
                        repeatPassword: repeatPassword,
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
            backgroundColor={themes.colors.formColor}
        >
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="mobilePhone">Mobile phone</Label>
                <Input id="mobilePhone" value={mobilePhone} onChange={handleInputMaskPhone}/>
                {errorMobilePhone && 
                    <Span fontSize="22" color={themes.colors.red}>{errorMobilePhone}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="email">Email</Label>
                <Input id="email" type={"email"} value={email} onChange={handleInputEmail}/>
                {errorEmail && 
                    <Span fontSize="22" color={themes.colors.red}>{errorEmail}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="password">Password</Label>
                <Input id="password" type={"password"} value={password} onChange={handleInputPassword}/>
                {errorPassword && 
                    <Span fontSize="22" color={themes.colors.red}>{errorPassword}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="repeatPassword">Repeat Password</Label>
                <Input id="repeatPassword" type={"password"} value={repeatPassword} onChange={handleInputPassword}/>
                {errorRepeatPassword && 
                    <Span fontSize="22" color={themes.colors.red}>{errorRepeatPassword}</Span>
                }
            </Divide>
            <Button padding="2px 50px" margin="0 0 0 auto" onClick={handleNextForm}>Next</Button>
        </Form>
    )
}