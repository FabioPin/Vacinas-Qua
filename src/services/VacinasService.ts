import {IVacinasService} from "./IVacinasService";
import {
    HttpClient,
    HttpClientResponse
} from '@microsoft/sp-http';
import {IVacina} from '../models/IVacina';

export class VacinasService implements IVacinasService {

    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public async getVacinas(): Promise<IVacina> {
        const response = await this.httpClient.get("http://localhost:5000/todos", 
        HttpClient.configurations.v1
        );

        if(!response.ok) {
            const error = await response.text();
            console.log(error);
            throw Error (`Erro ao tentar obter dados`);
        }

        const result: IVacina[] = await response.json();

        if (result.length > 0) {
            return result[0];
        } else {
            return null;
        }
    }

    public async getVacinasId(todoid: string): Promise<IVacina> {
        const response = await this.httpClient.get(`http://localhost:5000/todos/${todoid}`,
        HttpClient.configurations.v1
        );

        if(!response.ok) {
            const error = await response.text();
            console.log(error);
            throw Error (`Erro ao tentar obter dados`);
        }

        const result: IVacina[] = await response.json();

        if (result.length > 0) {
            return result[0];
        } else {
            return null;
        }
    }
}