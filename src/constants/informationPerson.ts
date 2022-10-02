interface IObjectKeys {
    [key: string]: string | string[] | number;
 }

export interface IInformationSignUp extends IObjectKeys {
    mobilePhone: string;
    email: string;
    password: string;
}

export interface IInformationPersonalInfo extends IObjectKeys {
    firstName: string;
    lastName: string;
    sex: string;
    birthday: string;
    ocean: string;
    hobby: string | string[];
}