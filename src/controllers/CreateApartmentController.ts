import { Request, Response } from "express";
import { CreateApartmentService } from "../services/CreateApartmentService";


export class CreateApartmentController {
    async handle(request: Request, response: Response) {
        const { apartment_number, tower_letter, isOccuppied } = request.body

        const service = new CreateApartmentService();

        const result = await service.execute({ apartment_number, tower_letter, isOccuppied })

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}