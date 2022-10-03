import axios from "axios";
import { IInformationPerson } from "../Context/ContextInformationPerson";

export const  getSchema = () => axios.get<IInformationPerson[]>("./schema.json").then(res => res.data)