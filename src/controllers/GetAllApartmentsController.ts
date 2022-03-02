import { Request, Response } from 'express'
import { GetAllApartmentsService } from '../services/GetAllApartmentsService';

export class GetAllApartmentsController {
    async handle(request: Request, response: Response) {
        const service = new GetAllApartmentsService();

        const apartments = await service.execute();

        return response.json(apartments);
    }
}