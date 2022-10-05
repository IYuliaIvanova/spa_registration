import React, { useContext, useEffect, useRef, useState } from "react";
import data from "../../stubs/schema.json"
import { Button } from "../../components/common-components/Button";
import { Divide } from "../../components/common-components/Divide";
import { Form } from "../../components/common-components/Form";
import { Input } from "../../components/common-components/Input";
import { Label } from "../../components/common-components/Label";
import { Paragraph } from "../../components/common-components/Paragraph";
import { Select } from "../../components/common-components/Select";
import { Option } from "../../components/common-components/Option";
import { themes } from "../../constants/themes";
import { Span } from "../../components/common-components/Span";
import { Checkbox } from "../../components/common-components/Checkbox";
import { isRequiredField, validation } from "../../utils/validation";
import { ContextInformationPerson } from "../../components/Context/ContextInformationPerson";
import { ContextPerson } from "../../components/Context/ContextPerson";
import { IInformationPersonalInfo, IInformationSignUp } from "../../constants/informationPerson";

enum Sex {
    Women = "Women",
    Men = "Men",
}

interface IPersonalInfoProps {
    id: number;
    signUpInfo: IInformationSignUp;
    setPersonalInfo: (personalInfo: IInformationPersonalInfo) => void;
    setIsOpenModal: (isOpenModal: boolean) => void;
    checkedHobby: boolean[];
    setCheckedHobby: (checkedHobby: boolean[]) => void;
}

export const PersonalInfo = ({ id, signUpInfo, setPersonalInfo, setIsOpenModal, checkedHobby, setCheckedHobby }: IPersonalInfoProps) => {
    const { addInformation } = useContext(ContextInformationPerson);
    const { personalInfo, toggleIsValid } = useContext(ContextPerson)
    
    const [firstName, setFirstName] = useState(personalInfo.firstName);
    const [lastName, setLastName] = useState(personalInfo.lastName);
    const [sex, setSex] = useState(personalInfo.sex);
    const [birthday, setBirthday] = useState(personalInfo.birthday);
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("")
    const [age, setAge] = useState("");
    const [hobby, setHobby] = useState<(string | string[])>(personalInfo.hobby);
    const [ocean, setOcean] = useState(personalInfo.ocean);

    const hobbyRef = useRef<HTMLInputElement | null>(null);

    const [errorFirstName, setErrorFirstName] = useState<(string | boolean)>(false)
    const [errorLastName, setErrorLastName] = useState<(string | boolean)>(false)
    const [errorSex, setErrorSex] = useState<(string | boolean)>(false)
    const [errorBirthday, setErrorBirthday] = useState<(string | boolean)>(false)
    const [errorHobby, setErrorHobby] = useState<(string | boolean)>(false)
    const [errorOcean, setErrorOcean] = useState<(string | boolean)>(false)

    const [errors, setErrors] = useState([errorFirstName, errorLastName, errorSex, errorBirthday, errorOcean, errorHobby])

    const selectOceanRef = useRef<HTMLSelectElement | null>(null);

    const getAge = (day: number, month: number, year: number): string => {
        const now = new Date(); 
        const dob = new Date(year, month, day);
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        return (today.getFullYear() - dob.getFullYear()).toString();
    }

    useEffect(() => {
        if(day.length !== 0 && month.length !== 0 && year.length !== 0){
            setAge(getAge(+day, +month, +year))
            setBirthday(`${day}.${month}.${year}`);
            validation("birthday", age, setErrorBirthday)
        } else {
            setErrorBirthday(false)
        }
    }, [day, month, year])

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, name, value, checked } = e.target
        switch (id) {
            case "firstName":
                setFirstName(value)
                validation(id, value, setErrorFirstName)
                break;
            case "lastName":
                setLastName(value)
                validation(id, value, setErrorLastName)
                break;
            case "day":
                setDay(value)
                break;
            case "month":
                setMonth(value)
                break;
            case "year":
                setYear(value)
                break;
            default:
                break;
        }
        if(name === "sex"){
            setSex(value)
            setErrorSex(false)
        }
        if(name === "hobby"){
            if(checked){
                setHobby(res => {
                    if(Array.isArray(res) && !hobby.includes(value)){
                        res.push(value)
                    }
                    return res
                })
            } else {
                setHobby(res => {
                    let result: string | string[] = []
                    if(Array.isArray(res)){
                        result = res.filter(item => item !== value);
                    }
                    return result
                })
            }
            const position = data.hobby.anyOf.findIndex(item => item === value)
            const updatedCheckedState = checkedHobby.map((item, index) =>
                index === position ? !item : item
            );
            setCheckedHobby(updatedCheckedState);
            setErrorHobby(false)
        }
    }
    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        setOcean(value)
    }

    const handleGoBack = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setPersonalInfo({
            firstName: firstName,
            lastName: lastName,
            sex: sex,
            birthday: birthday,
            ocean: selectOceanRef.current?.value || "",
            hobby: hobby,
        })
        toggleIsValid();
    }

    useEffect(() => {
        if(firstName.length === 0){
            setErrorFirstName(errors[0])
        }
        if(lastName.length === 0){
            setErrorLastName(errors[1])
        }
        if(sex.length === 0 ){
            setErrorSex(errors[2])
        } 
        if(birthday.length === 0 ){
            setErrorBirthday(errors[3])
        }
    }, [errors])

    const handleSubmitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const isValid = isRequiredField({
            firstName: firstName,
            lastName: lastName,
            sex: sex,
            birthday: birthday,
            ocean: selectOceanRef.current?.value || "",
            hobby: hobby,
        }, setErrors)

        if(hobby.length === 0 ){
            setErrorHobby("Required!")
        }

        if(!errorFirstName && !errorLastName && !errorSex && !errorBirthday && !errorHobby && isValid){
            addInformation({
                id: Date.now(),
                signUpInfo: signUpInfo,
                personalInfo: {
                    firstName: firstName,
                    lastName: lastName,
                    sex: sex,
                    birthday: birthday,
                    ocean: selectOceanRef.current?.value || "",
                    hobby: hobby,
                }
            })
            setIsOpenModal(true)
        }
    }

    useEffect(() =>{
        setPersonalInfo({
            firstName: firstName,
            lastName: lastName,
            sex: sex,
            birthday: birthday,
            ocean: selectOceanRef.current?.value || "",
            hobby: hobby,
        })
    },[firstName, lastName, sex, birthday, ocean, hobby])

    return (
        <Form 
            padding="30px 30px" 
            width="500" display="flex" 
            flexDirection="column" 
            alignItems="center" 
            rowGap="15" 
        >
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" value={firstName} onChange={handleChangeInput}/>
                {errorFirstName && 
                    <Span color={themes.colors.red}>{errorFirstName}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" value={lastName} onChange={handleChangeInput}/>
                {errorLastName && 
                    <Span color={themes.colors.red}>{errorLastName}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" alignItems="start" rowGap="5"> 
                <Paragraph fontSize="22">Sex</Paragraph>
                {Object.values(Sex).map((value, id) => {
                    return (
                        <Divide key={id}>
                            <Input 
                                id={value}
                                name="sex"
                                type={"radio"} 
                                value={value} 
                                checked={value === sex ? true : false} 
                                margin="0 10px 0 0" 
                                onChange={handleChangeInput}
                            />
                            <Label htmlFor="sexMan" fontSize="18">{value}</Label>
                        </Divide>
                    )
                })}
                {errorSex && 
                    <Span color={themes.colors.red}>{errorSex}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Paragraph fontSize="22">Birthday</Paragraph>    
                <Divide display="flex" columnGap="10">
                    <Input id="day" type={"number"} placeholder="DD" min={1} max={31} value={day} onChange={handleChangeInput}/>
                    <Input id="month" type={"number"} placeholder="MM" min={1} max={12} value={month} onChange={handleChangeInput}/>
                    <Input id="year" type={"number"} placeholder="YYYY" min={1930} max={2100} value={year} onChange={handleChangeInput}/>
                </Divide>
                {errorBirthday && 
                    <Span color={themes.colors.red}>{errorBirthday}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Paragraph fontSize="22">Your Favorite Ocean</Paragraph> 
                <Select name="ocean" value={ocean} ref={selectOceanRef} onChange={handleChangeSelect}>
                    {data.ocean.oneOf.map((item, id) => {
                        return (
                            <Option id={item.toLowerCase()} key={id} value={item}>{item}</Option>
                        )
                    })}
                </Select>
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Paragraph fontSize="22">Hobby</Paragraph> 
                {data.hobby.anyOf.map((item, id) => {
                    console.log(checkedHobby)
                    return (
                        <Divide key={id}>
                            <Checkbox 
                                type='checkbox' 
                                name="hobby" 
                                ref={hobbyRef} 
                                id={item.toLowerCase()}  
                                checked={checkedHobby[id]} 
                                value={item} 
                                onChange={handleChangeInput}
                            />
                            <Label htmlFor={item.toLowerCase()} fontSize="18"><Span margin="0 10px 0 0"/>{item}</Label>
                        </Divide>
                    )
                })}
                {errorHobby && 
                    <Span color={themes.colors.red}>{errorHobby}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="10">
                <Button padding="2px 40px" onClick={handleSubmitForm}>Complete</Button>
                <Button padding="2px 20px" backgroundColor={themes.colors.grey} onClick={handleGoBack}>Change SignUp Information</Button>
            </Divide>
        </Form>
    )
}