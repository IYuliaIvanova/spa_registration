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
import { validation } from "../../utils/validation";
import { ContextInformationPerson } from "../../components/Context/ContextInformationPerson";
import { ContextPerson } from "../../components/Context/ContextPerson";
import { IInformationPersonalInfo, IInformationSignUp } from "../../constants/informationPerson";

interface IPersonalInfoProps {
    id: number;
    signUpInfo: IInformationSignUp;
    setPersonalInfo: (personalInfo: IInformationPersonalInfo) => void;
    setIsOpenModal: (isOpenModal: boolean) => void
}

export const PersonalInfo = ({ id, signUpInfo, setPersonalInfo, setIsOpenModal }: IPersonalInfoProps) => {
    const { informations, addInformation } = useContext(ContextInformationPerson);
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

    const [isHobbyChecked, setIsHobbyChecked] = useState(false)

    const [errorFirstName, setErrorFirstName] = useState<(string | boolean)>(false)
    const [errorLastName, setErrorLastName] = useState<(string | boolean)>(false)
    const [errorSex, setErrorSex] = useState<(string | boolean)>(false)
    const [errorBirthday, setErrorBirthday] = useState<(string | boolean)>(false)
    const [errorHobby, setErrorHobby] = useState<(string | boolean)>(false)

    const selectOceanRef = useRef<HTMLSelectElement | null>(null);
    // const checkboxHobbyRef = useRef<HTMLInputElement | null>(null);

    const getAge = (day: number, month: number, year: number): string => {
        const now = new Date(); 
        const dob = new Date(year, month, day);
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        return (today.getFullYear() - dob.getFullYear()).toString();
    }

    useEffect(() => {
        setAge(getAge(+day, +month, +year))
        setBirthday(`${day}.${month}.${year}`);
    }, [day, month, year])

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, name, value } = e.target
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
            if(Array.isArray(hobby)){
                hobby.push(value)
            }
            setHobby(hobby)
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

    const handleValidForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(sex.length === 0){
            validation("sex", sex ,setErrorSex);
        }
        if(hobby.length === 0){
            validation("hobby", "" ,setErrorHobby);
        }
        if(day.length !== 0 && month.length !== 0 && year.length !== 0){
            validation("birthday", age, setErrorBirthday);
        } 
        if(!errorFirstName && !errorLastName && !errorSex && !errorBirthday && !errorHobby){
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

    useEffect(() => {
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
            backgroundColor={themes.colors.formColor}
        >
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" value={firstName} onChange={handleChangeInput}/>
                {errorFirstName && 
                    <Span fontSize="22" color={themes.colors.red}>{errorFirstName}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" value={lastName} onChange={handleChangeInput}/>
                {errorLastName && 
                    <Span fontSize="22" color={themes.colors.red}>{errorLastName}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" alignItems="start" rowGap="5"> 
                <Paragraph fontSize="22" color={themes.colors.white}>Sex</Paragraph>
                <Divide>
                    <Input id="sexMan" type={"radio"} value="Man" name="sex" margin="0 10px 0 0" onChange={handleChangeInput}/>
                    <Label htmlFor="sexMan" fontSize="18">Man</Label>
                </Divide>
                <Divide>
                    <Input id="sexWomen" type={"radio"} value="Women" name="sex" margin="0 10px 0 0" onChange={handleChangeInput}/>
                    <Label htmlFor="sexWomen" fontSize="18">Women</Label>
                </Divide>
                {errorSex && 
                    <Span fontSize="22" color={themes.colors.red}>{errorSex}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Paragraph fontSize="22" color={themes.colors.white}>Birthday</Paragraph>    
                <Input id="day" type={"number"} placeholder="DD" min={1} max={31} value={day} onChange={handleChangeInput}/>
                <Input id="month" type={"number"} placeholder="MM" min={1} max={12} value={month} onChange={handleChangeInput}/>
                <Input id="year" type={"number"} placeholder="YYYY" min={1930} max={2100} value={year} onChange={handleChangeInput}/>
                {errorBirthday && 
                    <Span fontSize="22" color={themes.colors.red}>{errorBirthday}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Paragraph fontSize="22" color={themes.colors.white}>Your Favorite Ocean</Paragraph> 
                <Select name="ocean" value={ocean} ref={selectOceanRef} onChange={handleChangeSelect}>
                    {data.ocean.oneOf.map((item, id) => {
                        return (
                            <Option id={item.toLowerCase()} key={id} value={item}>{item}</Option>
                        )
                    })}
                </Select>
            </Divide>
            <Divide width={80} display="flex" flexDirection="column" rowGap="5"> 
                <Paragraph fontSize="22" color={themes.colors.white}>Hobby</Paragraph> 
                {data.hobby.anyOf.map((item, id) => {
                    return (
                        <Divide>
                            <Checkbox type='checkbox' name="hobby" id={item.toLowerCase()} value={item} onChange={handleChangeInput}/>
                            <Label htmlFor={item.toLowerCase()} key={id} fontSize="18"><Span margin="0 10px 0 0"/>{item}</Label>
                        </Divide>
                    )
                })}
                {errorHobby && 
                    <Span fontSize="22" color={themes.colors.red}>{errorHobby}</Span>
                }
            </Divide>
            <Divide width={80} display="flex" columnGap="10">
                <Button padding="2px 20px" fontSize="14" onClick={handleGoBack}>Change SignUp Information</Button>
                <Button padding="2px 40px" onClick={handleValidForm}>Complete</Button>
            </Divide>
        </Form>
    )
}