import React from "react";
import { Button } from "../../components/common-components/Button";
import { Divide } from "../../components/common-components/Divide";
import { Form } from "../../components/common-components/Form";
import { Input } from "../../components/common-components/Input";
import { Label } from "../../components/common-components/Label";
import { themes } from "../../constants/themes";

export const SignUpInfo = () => {
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
                <Input id="mobilePhone"/>
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="email">Email</Label>
                <Input id="email"/>
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="password">Password</Label>
                <Input id="password"/>
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="repeatPassword">Repeat Password</Label>
                <Input id="repeatPassword"/>
            </Divide>
            <Button padding="2px 50px" margin="0 0 0 auto">Next</Button>

        </Form>
    )
}