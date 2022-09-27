import React from "react";
import { Button } from "../../components/common-components/Button";
import { Divide } from "../../components/common-components/Divide";
import { Form } from "../../components/common-components/Form";
import { Input } from "../../components/common-components/Input";
import { Label } from "../../components/common-components/Label";
import { themes } from "../../constants/themes";

export const PersonalInfo = () => {
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
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName"/>
        </Divide>
        <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName"/>
        </Divide>
        <Divide>
            <Button padding="2px 40px">Change SignUp Information</Button>
            <Button padding="2px 40px">Complete</Button>
        </Divide>
    </Form>
    )
}