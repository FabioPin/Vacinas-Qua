import {
    IVacina
} from "../../../models/IVacina";

export interface IVacinasQuaState {
    isLoaded: boolean;
    vacinas: IVacina[];
}