import { Request, Response } from 'express';
import { DeleteResidentService } from '../services/DeleteResidentService';

export class DeleteResidentController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteResidentService()

        const result = await service.execute(id);

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}