import { Request, Response } from 'express'
import { GetAllResidentsService } from '../services/GetAllResidentsService';

export class GetAllResidentsController {
    async handle(request: Request, response: Response) {
        const service = new GetAllResidentsService();

        const residents = await service.execute();

        return response.json(residents);
    }
}