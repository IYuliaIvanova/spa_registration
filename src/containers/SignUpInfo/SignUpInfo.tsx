import React, { useState } from "react";
import { Button } from "../../components/common-components/Button";
import { Divide } from "../../components/common-components/Divide";
import { Form } from "../../components/common-components/Form";
import { Input } from "../../components/common-components/Input";
import { Label } from "../../components/common-components/Label";
import { Span } from "../../components/common-components/Span";
import { themes } from "../../constants/themes";
import { validation } from "../../utils/validation";

export const SignUpInfo = () => {
    const [isValid, setIsValid] = useState(false)

    const [mobilePhone, setMobilePhone] = useState('+375 (**) ***-**-**');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const [errorMobilePhone, setErrorMobilePhone] = useState<(string | boolean)>(false)
    const [errorEmail, setErrorEmail] = useState<(string | boolean)>(false)
    const [errorPassword, setErrorPassword] = useState<(string | boolean)>(false)
    const [errorRepeatPassword, setErrorRepeatPassword] = useState<(string | boolean)>(false)

    const handleInputMaskPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        const result = value.replaceAll(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

        if (result) {
            const [ numbOne, numbTwo, numbThree, numbFour, numbFive, numbSix ] = result;
            setMobilePhone(`+${numbTwo} (${numbThree}) ${numbFour}-${numbFive}-${numbSix}`);
        }

        validation(id, mobilePhone, setErrorMobilePhone);
    }

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

    const handleValidForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(password !== repeatPassword){
            setErrorRepeatPassword("Wrong password!")
            setIsValid(false)
        }
        else {
            setErrorRepeatPassword(false)
            setIsValid(true)
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
            <Button padding="2px 50px" margin="0 0 0 auto" onClick={handleValidForm}>Next</Button>
        </Form>
    )
}