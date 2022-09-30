export interface IInformationSignUp {
    mobilePhone: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export interface IInformationPersonalInfo {
    firstName: string;
    lastName: string;
    sex: string;
    birthday: string;
    ocean: string;
    hobby: string | string[];
}