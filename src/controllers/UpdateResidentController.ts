import { Request, Response } from 'express'
import { UpdateResidentService } from '../services/UpdateResidentService';

export class UpdateResidentController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, lastname, rg, cpf, extra_information, apartment_id } = request.body;

        const service = new UpdateResidentService();

        const result = await service.execute({ id, name, lastname, rg, cpf, extra_information, apartment_id });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}