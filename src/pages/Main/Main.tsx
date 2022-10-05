import React, { useCallback, useState } from "react";
import data from "../../stubs/schema.json"
import { Paragraph } from "../../components/common-components/Paragraph";
import { Section } from "../../components/common-components/Section";
import { ContextInformationPerson, IInformationPerson } from "../../components/Context/ContextInformationPerson";
import { ContextPerson, defaultStatePerson } from "../../components/Context/ContextPerson";
import { IInformationPersonalInfo, IInformationSignUp } from "../../constants/informationPerson";
import { themes } from "../../constants/themes";
import { Breadcrumb } from "../../containers/Breadcrumb/Breadcrumb";
import { FooterContainer } from "../../containers/FooterContainer/FooterContainer";
import { HeaderContainer } from "../../containers/HeaderContainer/HeaderContainer";
import { Modal } from "../../containers/Modal/Modal";
import { PersonalInfo } from "../../containers/PersonalInfo/PersonalInfo";
import { SignUpInfo } from "../../containers/SignUpInfo/SignUpInfo";

export const Main = () => {
    const [id, setId] = useState(defaultStatePerson.id);
    const [signUpInfo, setSignUpInfo] = useState<IInformationSignUp>(defaultStatePerson.signUpInfo);
    const [personalInfo, setPersonalInfo] = useState<IInformationPersonalInfo>(defaultStatePerson.personalInfo);
    const [isValidSignUpInfo, setIsValidSignUpInfo] = useState(defaultStatePerson.isValidSignUpInfo);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isNotVisiblePersonalInfo, setIsNotVisiblePersonalInfo] = useState(true);
    const [checkedHobby, setCheckedHobby] = useState(
        new Array(data.hobby.anyOf.length).fill(false)
    );

    const [informations, setInformations] = useState<IInformationPerson[]>([]);

    const toggleIsValid = () => {
        setIsValidSignUpInfo(!isValidSignUpInfo);
        setIsNotVisiblePersonalInfo(!isNotVisiblePersonalInfo);
    };

    const addInformation = useCallback((information: IInformationPerson) => {
        setInformations([...informations, information])
        setId(information.id)
    },[informations])

    const updateInformation = useCallback((id: number) => {
        informations.filter((information: IInformationPerson) => {
            if (information.id === id) {
              setInformations([...informations])
            }
        })
    },[informations])

    const handleCancel = () => {
        setIsOpenModal(false);
    }

    return (
        <>
            <HeaderContainer/>
            <ContextPerson.Provider value={{ id, signUpInfo, personalInfo, isValidSignUpInfo, toggleIsValid }}>
                <Breadcrumb isActive={isValidSignUpInfo}/>
                <ContextInformationPerson.Provider value={{ informations, addInformation, updateInformation }}>
                    {isNotVisiblePersonalInfo &&
                        <Section margin="0 auto" padding="40px 0 10px">
                            <SignUpInfo setSignUpInfo={setSignUpInfo}/>
                        </Section>
                    } 
                    {isValidSignUpInfo && 
                        <Section margin="0 auto" padding="40px 0 10px">
                            <PersonalInfo 
                                id={id} 
                                signUpInfo={signUpInfo} 
                                setPersonalInfo={setPersonalInfo} 
                                setIsOpenModal={setIsOpenModal} 
                                checkedHobby={checkedHobby} 
                                setCheckedHobby={setCheckedHobby}
                            />
                        </Section>
                    }
                </ContextInformationPerson.Provider> 
                <Modal 
                    title="Your information"
                    isOpen={isOpenModal}
                    onCancel={handleCancel}
                >
                    <Paragraph color={themes.colors.white}>Mobile phone: {signUpInfo.mobilePhone}</Paragraph>
                    <Paragraph color={themes.colors.white}>Email: {signUpInfo.email}</Paragraph>
                    <Paragraph color={themes.colors.white}>First name: {personalInfo.firstName}</Paragraph>
                    <Paragraph color={themes.colors.white}>Last name: {personalInfo.lastName}</Paragraph>
                    <Paragraph color={themes.colors.white}>Sex: {personalInfo.sex}</Paragraph>
                    <Paragraph color={themes.colors.white}>Birthday: {personalInfo.birthday}</Paragraph>
                    <Paragraph color={themes.colors.white}>Your favorite ocean: {personalInfo.ocean}</Paragraph>
                    <Paragraph color={themes.colors.white}>
                        Hobby: {Array.isArray(personalInfo.hobby) && personalInfo.hobby.map(item => `${item} `)}
                    </Paragraph>
                </Modal>
            </ContextPerson.Provider>
            <FooterContainer/>
        </>
    )
}