import { Request, Response } from 'express'
import { CreateResidentService } from '../services/CreateResidentService';

export class CreateResidentController {
    async handle(request: Request, response: Response) {
        const { name, lastname, rg, cpf, extra_information, apartment_id } = request.body;

        const service = new CreateResidentService();

        const result = await service.execute({
            name, 
            lastname, 
            rg, 
            cpf, 
            extra_information, 
            apartment_id
        });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}