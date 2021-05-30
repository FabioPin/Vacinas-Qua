import {IVacina} from "../models/IVacina";

export interface IVacinasService {
    getVacinas(): Promise<IVacina>;
    getVacinasId(todoid: string): Promise<IVacina>;
}