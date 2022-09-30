import React, { createContext } from "react";
import { IInformationPersonalInfo, IInformationSignUp } from "../../constants/informationPerson";


export interface IContextPerson {
  id: number;
  signUpInfo: IInformationSignUp;
  personalInfo: IInformationPersonalInfo;
  isValidSignUpInfo: boolean;
  toggleIsValid: () => void;
}

export const defaultStatePerson = {
  id: 0,
  signUpInfo: {
    mobilePhone: "+375 (**) ***-**-**",
    email: "",
    password:"",
    repeatPassword: "",
  },
  personalInfo: {
    firstName: '',
    lastName: "",
    sex: "",
    birthday: "",
    ocean: "",
    hobby: [],
  },
  isValidSignUpInfo: false,
  toggleIsValid: () => {},
};

export const ContextPerson = createContext<IContextPerson>(defaultStatePerson);