import { getRepository } from 'typeorm';
import { Apartment } from '../entities/Apartment';

export class DeleteApartmentService {
    async execute(id: string) {
        const repo = getRepository(Apartment);

        if (!(await repo.findOne(id))) {
            return new Error("Apartment does not exist!");
        }

        await repo.delete(id);
    }
}