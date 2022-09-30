import React, { createContext } from "react";
import { IInformationPersonalInfo, IInformationSignUp } from "../../constants/informationPerson";

export interface IInformationPerson {
    id: number;
    signUpInfo: IInformationSignUp;
    personalInfo: IInformationPersonalInfo;
}


export interface IContextInterface {
  informations: IInformationPerson[];
  addInformation: (information: IInformationPerson) => void;
  updateInformation: (id: number) => void;
}

export const defaultState = {
  informations: [],
  addInformation: () => {},
  updateInformation: () => {},
};

export const ContextInformationPerson = createContext<IContextInterface>(defaultState);